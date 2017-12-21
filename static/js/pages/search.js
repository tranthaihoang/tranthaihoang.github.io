window.TripnScanSearchPage = (function() {
  var Api = new TripnScanApi();

  function TripnScanSearchPage() {
    bindingEvents();
  }

  bindingEvents = function() {
    bindingLoadSearchPageData();
    bindingSearchKeyword();
    bindingClickSearchMore();
    bindingSelectSearchValue();
    bindingResizeWindowSettings();
    $(window).trigger('resize');
  }

  bindingResizeWindowSettings = function () {
    $(window).on('resize', function (event) {
      var headerTop = $('.header-desktop').outerHeight();
      var footerBot = $('footer').outerHeight();
      var windowHeight = $(window).height();
      var heightWindowSe = windowHeight - (headerTop + footerBot);
      $(".tablet-device .input-catalog-search").css('height', heightWindowSe);
    });
  }

  bindingSelectSearchValue = function() {
    $('.search__list-categorys ul li a').click(function(event) {
      var value = $(this).data('value');
     $(this).closest('li.item-nav').find('.search__value-selected').text(value);
      // $('.settings__list-languages').find('li a').removeClass('active');
      // $(".settings__list-languages a[data-language='" + language + "']").addClass('active');
    });
  }

  bindingLoadSearchPageData = function() {
    var data = _getStorageData();
    if (data) {
      _insertResultData(parseInt(data));
    } else {
      _setStorageData(30);
    }
  }

  bindingSearchKeyword = function() {
    $(document).on('click', '.search-page-search-btn', function() {
      var keyword = $('.search-page__input-search').val()
      if (!keyword) { return };
      data = Api.searchKeyword(keyword);
    })
  }

  _insertResultData = function(data) {
    for (i = 0; i <= data; i++) {
      var itemData = _bindingTemplateData(i);
      $('.list-search-results').append(itemData);
    }
    if (data <= 20) {
      $('.search-result__read-more').addClass('hidden')
    }
    _setStorageData(data)
  }

  bindingClickSearchMore = function() {
    $(document).on('click', '.search-result__read-more', function() {
      $hiddenResults = $('.list-search-results li.hidden')
      $hiddenResults.each(function(index) {
        if (index <= 20) {
          $(this).removeClass('hidden')
        }
      })
      if ($hiddenResults.length <= 20) {
        $('.search-result__read-more').addClass('hidden')
      }
    })
  }

  _bindingTemplateData = function(item) {
    var cssClass = ''
    var source = document.getElementById("item-result__template").innerHTML;
    var template = Handlebars.compile(source);
    if (item > 20) { cssClass = 'hidden' }
    var html = template({ item: item, cssClass: cssClass })
    return html
  }

  _getStorageData = function() {
    return localStorage.getItem('searchResultData');
  }

  _setStorageData = function(data) {
    localStorage.setItem("searchResultData", data);
  }

  return TripnScanSearchPage
})()

$(function() {
  new TripnScanSearchPage()
})
