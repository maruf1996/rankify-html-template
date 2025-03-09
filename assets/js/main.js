(function ($) {
  "use strict";

  // fixed menu js
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 120) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // mobile menu
  var pnMenuWrap = $(".navbar-collapse > ul").clone();
  var pnSideMenu = $(".pn-offcanvas-menu nav");
  pnSideMenu.append(pnMenuWrap);
  if ($(pnSideMenu).find(".sub-menu, .tp-mega-menu").length != 0) {
    $(pnSideMenu)
      .find(".sub-menu, .tp-mega-menu")
      .parent()
      .append(
        '<button class="pn-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    ".pn-offcanvas-menu nav > ul > li button.pn-menu-close, .pn-offcanvas-menu nav > ul li.has-dropdown > a"
  );
  $(sideMenuList).on("click", function (e) {
    console.log(e);
    e.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().addClass("active");
      $(this).siblings(".sub-menu, .tp-mega-menu").slideDown();
    } else {
      $(this).siblings(".sub-menu, .tp-mega-menu").slideUp();
      $(this).parent().removeClass("active");
    }
  });

  // offcanvas bar
  $(".pn-offcanvas-toggle").on("click", function () {
    $(".pn-offcanvas").addClass("pn-offcanvas-open");
    $(".pn-offcanvas-ovarlay").addClass("pn-offcanvas-ovarlay-open");
  });
  $(".pn-offcanvas-close-toggle,.pn-offcanvas-ovarlay").on(
    "click",
    function () {
      $(".pn-offcanvas").removeClass("pn-offcanvas-open");
      $(".pn-offcanvas-ovarlay").removeClass("pn-offcanvas-ovarlay-open");
    }
  );

  /* Data Background js */
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // Magnific popup image js
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Magnific video js
  $(".play-video").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  // Team move and active js
  var team_item = gsap.utils.toArray(".team-item");
  let hover_img = gsap.utils.toArray(".hover-image");

  // Function to move the service image on mouse move
  function ServiceImageMove(event, item) {
    const contentBox = item.getBoundingClientRect();
    const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
    const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

    hover_img.forEach((img) => {
      gsap.to(img, {
        x: dx,
        y: dy,
      });
    });
  }

  // Add hover effect only for screens larger than 768px
  if (window.innerWidth > 767) {
    team_item.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        ServiceImageMove(event, item);
      });

      item.addEventListener("mouseleave", () => {
        hover_img.forEach((img) => {
          gsap.to(img, {
            x: 0,
            y: 0,
          });
        });
      });
    });

    // Add active team class on hover
    $(".team-item").hover(function () {
      $(".team-item").removeClass("active-team");
      $(this).addClass("active-team");
    });
  }

  /* Odometer Activeate js */
  $(document).ready(function () {
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Services slider js
  $(".services-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: '<i class="fa-solid arrow arrow-prev fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid arrow arrow-next fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".services-slider-two").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // testimonial slider js
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: '<i class="fa-solid arrow arrow-prev fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid arrow arrow-next fa-arrow-right"></i>',
  });

  // testimonial slider two js
  $(".testimonial-two-slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });

  // blog slider js
  $(".blog-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: $(".blog-arrows .arrow-prev"),
    nextArrow: $(".blog-arrows .arrow-next"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Project horizontal scroll js
  let horizontalSection = document.querySelector(".horizontal-scroll");
  if (horizontalSection) {
    gsap.to(".horizontal-scroll", {
      x: () => horizontalSection.scrollWidth * -1,
      xPercent: 100,
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top 40%",
        end: "+=2000px",
        pin: ".project-section-two",
        scrub: 2.4,
        invalidateOnRefresh: true,
      },
    });
  }

  // Mobile menu js start
})(jQuery);
