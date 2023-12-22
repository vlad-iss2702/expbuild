/*Слайдеры*/
$(document).ready(function() {
	$('.packet-carousel').owlCarousel({
    margin: 30,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-angle-left\"></i>","<i class=\"icon-angle-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1,
            margin: 10
        },
        414: {
            items:1
        },
        500:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3,
            margin: 10
        },
        800:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
      }
  });
  $('.advantages-carousel').owlCarousel({
    margin: 100,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-angle-left\"></i>","<i class=\"icon-angle-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1,
            margin: 10
        },
        414: {
            items:1
        },
        500:{
            items:1
        },
        576:{
            items: 2,
            margin: 20
        },
        768:{
            items: 3,
            margin: 20
        },
        800:{
            items:3
        },
        992:{
            items:3,
            margin: 50
        },
        1200:{
            items:3
        }
      }
  });
  $('.inside-tarif-carousel').owlCarousel({
    margin: 20,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    stageOuterClass: 'tarif-carousel-outher',
    loop: true,
    navText : ["<i class=\"icon-angle-left\"></i>","<i class=\"icon-angle-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1,
            margin: 10
        },
        414: {
            items:1
        },
        500:{
            items:1
        },
        768:{
            items:2
        },
        800:{
            items:3
        },
        1200:{
            items:4
        }
      }
  });
  $('.tarif-carousel').owlCarousel({
    margin: 80,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    stageOuterClass: 'tarif-carousel-outher',
    loop: true,
    navText : ["<i class=\"icon-angle-left\"></i>","<i class=\"icon-angle-right\"></i>"],
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1,
            margin: 10
        },
        414: {
            items:1
        },
        500:{
            items:1
        },
        576:{
            items:2,
            margin: 10
        },
        768:{
            items:2,
            margin: 20
        },
        800:{
            items:2
        },
        992:{
           items:3,
           margin: 25,
        },
        1200:{
            items:3
        }
      }
  });
  	/*Затемнение экрана при открытии мобильного меню*/
  	$('.sidebarIconToggle').click(function(){ 
      $('.mobile-menu').toggleClass('active-background');
  	});
    
});

/*Стики для хеадеров*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.header-nav').addClass("header-sticky-nav");
    }
    else{
        $('.header-nav').removeClass("header-sticky-nav");
    }
});