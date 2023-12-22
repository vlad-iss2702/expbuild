$(document).ready(function() {
	$('.info__carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-chevron-left1\"></i>","<i class=\"icon-chevron-right1\"></i>"],
    items: 1
  });
    $('.industrial__carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-chevron-left1\"></i>","<i class=\"icon-chevron-right1\"></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        800:{
            items:3
        },
        1200:{
            items:3
        }
      }
  });
    $('.partners-carousel').owlCarousel({
    margin: 0,
    nav: false,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        800:{
            items:5
        },
        1200:{
            items:5
        }
      }
  });
    $('.command__slider').owlCarousel({
    margin: 20,
    nav: false,
    dots: true,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        800:{
            items:4
        },
        1200:{
            items:4
        }
      }
  });
    $('.about__carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-chevron-left1\"></i>","<i class=\"icon-chevron-right1\"></i>"],
    items: 1
  });
    App = {
        openFixedMenu: function () {
            $('body').addClass('disabled');
            $('.fixed-menu').addClass('fixed-menu--active').show()
        },
        closeFixedMenu: function () {
            $('body').removeClass('disabled');
            $('.fixed-menu').removeClass('fixed-menu--active').hide()
        },
    };
});

