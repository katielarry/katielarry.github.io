(function($, window, document, undefined) {
  // var $win = $(window);

  $(document).ready(function() {
    // var $header = $(".header");
    // var $burgerButton = $(".burger-menu");
    // var $nav = $(".nav");

    $(".burger-menu").on("click", function(e) {
      e.preventDefault();

      $(".burger-menu").toggleClass("active");
      $(".nav").toggleClass("open");
    });

    if ($(window).width() < 768) {
      $(".animated").animated({
        animatedIn: "animated-in",
        offset: 1,
        reverse: false,
        mobileDisabled: false
      });
    } else {
      $(".animated").animated({
        animatedIn: "animated-in",
        offset: 0.8,
        reverse: false,
        mobileDisabled: false
      });
    }

    $(".footer").animated({
      animatedIn: "animated-in",
      offset: 0.9,
      reverse: false,
      mobileDisabled: false
    });

    $(".intro__link").on("click", function(e) {
      var waypoint = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(waypoint).offset().top
        },
        700
      );

      e.preventDefault();
    });

    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 5) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });
  });
})(jQuery, window, document);
