$(document).ready(function() {
  var map1;
  var lastPosition = localStorage.getItem("lastMapPosition");
  if (lastPosition) {
    lastPosition = JSON.parse(lastPosition);
    lat = lastPosition.lat;
    lng = lastPosition.lng;
  } else {
    lat = 35.466682;
    lng = 139.616876;
  }
  var myLatlng1 = new google.maps.LatLng(lat, lng);

  var myOptions1 = {
    zoom: 16,
    center: myLatlng1,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  }

  map1 = new google.maps.Map(document.getElementById("map-canvas-01"), myOptions1);
  // hide popup
  $(".popup-map").hide();
  $(".popup-map .close-popup").click(function() {
    $(".popup-map").hide();
  });
  // Disabled Map Scroll in Contact Page
  map1.setOptions({
    'scrollwheel': false
  });

  function initialize() {}

  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, "resize", function() {
    var centerMap1 = map1.getCenter();
    google.maps.event.trigger(map1, "resize");
    map1.setCenter(centerMap1);
  });

  google.maps.event.addListener(map1, 'dragend', function() {
    var lastMapPosition = map1.getCenter();
    storeData = JSON.stringify({
      lat: lastMapPosition.lat(),
      lng: lastMapPosition.lng()
    });
    localStorage.setItem("lastMapPosition", storeData);
  });

  // function add icon current location
  function addYourLocationButton(map, marker) {
    var secondChild = document.createElement('div');
    secondChild.id = 'current-position-icon';

    google.maps.event.addListener(map, 'dragend', function () {
      $('#current-position-icon').css('background-position', '0px 0px');
    });

    secondChild.addEventListener('click', function () {
      $('#current-position-icon').addClass('finding-location');

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          marker.setPosition(latlng);
          map.setCenter(latlng);
          $('#current-position-icon').removeClass('finding-location');
        });
      }
    });

    secondChild.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(secondChild);
  }

  /**
   * get current location
   */
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // map1.setCenter(pos);

      // add current location button
      var _markerCurrentLocation = new google.maps.Marker({
        map: map1,
        animation: google.maps.Animation.DROP,
      });

      addYourLocationButton(map1, _markerCurrentLocation);

      //add some markers
      var icon = {
        url: "../static/images/mapmaker.png"
      };
      var arrNearByLocation = [{
        lat: pos.lat + 0.0001,
        lng: pos.lng + 0.0001
      }, {
        lat: pos.lat + 0.002,
        lng: pos.lng + 0.0001
      }];
      for (var _i = 0, _c = arrNearByLocation.length; _i < _c; _i++) {
        /**
         * show popup when click marker
         * @type {google.maps.Marker}
         */
        var _marker = new google.maps.Marker({
          position: new google.maps.LatLng(arrNearByLocation[_i]), // near by
          map: map1,
          icon: icon,
        });
        google.maps.event.addListener(_marker, 'click', function() {
          $(".popup-map").show();
        });
      }
    }, function() {
      handleLocationError(true, infoWindow, map1.getCenter());
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map1.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map1);
  }

  heightListMapPC();
  $(window).on('resize', function(event) {
    heightListMapPC();
  });

  function heightListMapPC() {
    var headerTop = $('.desktop-device .header-desktop').outerHeight();
    var footerBot = $('footer').outerHeight();
    var windowHeight = $(window).height();
    var heightWindowSe = windowHeight - (headerTop + footerBot);
    $(".desktop-device .wrap-map-main .wrap-list-map").css('min-height', heightWindowSe);
  }

});
