window.TripnScanSettings = (function () {
  var TRIPNSCAN_LANGUAGE_KEY = 'tripnscan_lang';

  // constructor
  function TripnScanSettings() {}

  TripnScanSettings.prototype.init = function () {
    bindingEvents()
  }

  bindingEvents = function () {
    bindingResizeWindowSettings();
    bindingInitSettingPage()
    bindingSettingsLanguagePhoneApp();
    $(window).trigger('resize');
  }

  bindingInitSettingPage = function () {
    var language = _getStorageLanguage();
    $(".settings__list-languages a[data-language='" + language + "']").addClass('active');
    $('.settings__language-selected').text(language);
  }

  bindingSettingsLanguagePhoneApp = function () {
    $('.settings__list-languages li a').click(function(event) {
      var language = $(this).data('language');
      _setStorageLanguage(language)
      $('.settings__language-selected').text(language);
      $('.settings__list-languages').find('li a').removeClass('active');
      $(".settings__list-languages a[data-language='" + language + "']").addClass('active');
    });
  }

  bindingResizeWindowSettings = function () {
    $(window).on('resize', function (event) {
      var headerTop = $('.header-desktop').outerHeight();
      var footerBot = $('footer').outerHeight();
      var windowHeight = $(window).height();
      var heightWindowSe = windowHeight - (headerTop + footerBot);
      $(".wrap-setting").css('height', heightWindowSe);
    });
  }

  _getStorageLanguage = function () {
    return localStorage.getItem(TRIPNSCAN_LANGUAGE_KEY);
  }

  _setStorageLanguage = function (language) {
    localStorage.setItem(TRIPNSCAN_LANGUAGE_KEY, language);
  }

  return TripnScanSettings;

})();

// Run TripnScanSettings when document ready
$(function(){
  (new TripnScanSettings()).init();
})
