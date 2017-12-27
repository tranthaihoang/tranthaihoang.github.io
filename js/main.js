

  // Height calculation changes
     $(window).resize(function() {
      heightWindow();
    });
    heightWindow();
      function heightWindow() {
        var headerTop = $('header').outerHeight();
        var inputChat = $('.menu-footer').outerHeight();
        var windowHeight = $(window).height();
        var heightWindowSe = windowHeight - (headerTop + inputChat);
        $(".scroll-default").css('height', heightWindowSe);
      }
