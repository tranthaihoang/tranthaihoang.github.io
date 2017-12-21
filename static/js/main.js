$(document).ready(function() {
    detectDevice();
    // collapNAV();
    toggleSelectSearchOptions();
    FixedNavScrollSP();
    heightQRnotFoundSP();
    heightQRnotFoundTB();
    bindingHeightTablet();
    bindingHeightDesktop();
    FixedNavScrollTB();
});

$(window).on('resize', function(event) {
    event.preventDefault();
    heightQRnotFoundSP();
    heightQRnotFoundTB();
    FixedNavScrollSP();
    bindingHeightTablet();
    bindingHeightDesktop();
    FixedNavScrollTB();
});

$(window).on('load', function() {


});

function toggleSelectSearchOptions() {
    $('.list-nav .item-nav').each(function() {
        $(this).on('click', function(event) {
            $(this).find('.collap-nav').slideToggle( "slow" );
        });
    });
}

function collapNAV() {
    $('.list-nav .item-nav').each(function() {
        $(this).on('click', function(event) {
            $('.collap-nav').slideToggle( "slow" );
        });
    });
}

function detectDevice(){
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.phone()) {
        $('body').attr('class', 'mobile-device');
    }else if (md.tablet()) {
        $('body').attr('class', 'tablet-device');
    }else {
        $('body').attr('class', 'desktop-device');
    }
}

function IsSafari() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var isPhone = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");
    if (navigator.appVersion.indexOf("Mac") != -1) {
        $('body').addClass('fixMac');
        /*if (ua.indexOf('chrome') > -1) {

        } else {

        }*/
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                //$('body').addClass('fixsafari');
            } else {
                $('body').addClass('fixsafari');
            }
        }
    }
    if (isAndroid || isPhone) {
        $('body').removeClass('fixMac');
    }
}

// Heigh winodow QR not Found
function heightQRnotFoundSP() {
      var headerTop = $('.mobile-device .header-mobile').outerHeight();
      var footerBot = $('footer').outerHeight();
      var windowHeight = $(window).height();
      var heightWindowSe = windowHeight - (headerTop + footerBot);
      $(".wrap-qr-notfound").css('min-height', heightWindowSe);
    }

function heightQRnotFoundTB() {
      var headerTop = $('.tablet-device .header-desktop').outerHeight();
      var footerBot = $('footer').outerHeight();
      var windowHeight = $(window).height();
      var heightWindowSe = windowHeight - (headerTop + footerBot);
      $(".wrap-qr-notfound").css('min-height', heightWindowSe);
    }

function bindingHeightTablet(){
    var headerTop = $('.header-desktop').outerHeight();
    var footerBot = $('footer').outerHeight();
    var windowHeight = $(window).height();
    var heightWindowSe = windowHeight - (headerTop + footerBot);
    $(".tablet-device .binding-height").css('min-height', heightWindowSe);
}

function bindingHeightDesktop(){
    var headerTop = $('.header-desktop').outerHeight();
    var footerBot = $('footer').outerHeight();
    var windowHeight = $(window).height();
    var heightWindowSe = windowHeight - (headerTop + footerBot);
    $(".desktop-device .binding-height").css('min-height', heightWindowSe);
}

    // when scroll window Fixed Nav smartphone
function FixedNavScrollSP(){
    $(window).bind('scroll', function () {
        var headerTop = $('header .logo').outerHeight();
        if ($(window).scrollTop() > headerTop) {
            $('.mobile-device .nav').addClass('fixed');
        } else {
            $('.mobile-device .nav').removeClass('fixed');
        }
    });
}
  // Fixed nav srcoll window Tablet

function FixedNavScrollTB(){
    $(window).bind('scroll', function () {
        var headerTop = $('.header-desktop').outerHeight();
        if ($(window).scrollTop() > headerTop) {
            $('.header-desktop').addClass('fixed');
        } else {
            $('.header-desktop').removeClass('fixed');
        }
    });
}
