$(document).ready(function() {
  $('.sevices-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText : ["<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-left.png' alt='' />","<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-right.png' alt='' />"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1,
            margin: 50
        },
        768:{
            items:2
        },
        1024:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
  var owl = $('.zoom-carousel');
        owl.owlCarousel({
            center: true,
            nav: true,
            loop: true,
            navText : ["<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-left.png' alt='' />","<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-right.png' alt='' />"],
            dots: true,
            autoplayTimeout:7000,
            animateOut: 'fadeOut',
            stageOuterClass: 'zoom-carousel-outher',
            responsive:{
            0:{
                items:3
            },
            500:{
                items:3
            },
            800:{
                items:3
            },
            1200:{
                items:3
            }
          }
        })
        var owl = $('.zoom-carousel-two');
        owl.owlCarousel({
            center: true,
            nav: true,
            loop: true,
            navText : ["<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-left.png' alt='' />","<img src='https://fast-print.moscow/wp-content/themes/fastprint/assets/img/slide-right.png' alt='' />"],
            dots: true,
            autoplayTimeout:7000,
            animateOut: 'fadeOut',
            stageOuterClass: 'zoom-carousel-outher-two',
            responsive:{
            0:{
                items:3
            },
            500:{
                items:3
            },
            800:{
                items:3
            },
            1200:{
                items:3
            }
          }
        })
  $('.contact-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    autoplayTimeout:7000,
    loop: false,
    navText : ["<i class=\"icon-chevron-left\"></i>","<i class=\"icon-chevron-right\"></i>"],
    items: 1
  });
  $('.main-carousel').owlCarousel({
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout:5000,
    smartSpeed: 700,
    loop: true,
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
    items: 1
  });

  $('.advantages-carousel').owlCarousel({
    margin: 100,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
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
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
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
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
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

    (function(w,doc) {
    if (!w.__utlWdgt ) {
        w.__utlWdgt = true;
        var d = doc, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == w.location.protocol ? 'https' : 'http')  + '://w.uptolike.com/widgets/v1/uptolike.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})(window,document);
    
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.header-nav').addClass("header-sticky-nav");
    }
    else{
        $('.header-nav').removeClass("header-sticky-nav");
    }
});
/* Отдельная функция для информацилнных модальных окон*/
$(document).ready(function() {
    var modules = {
  $window: $(window),
  $html: $('html'),
  $body: $('body'),
  $container: $('.container'),
  
  init: function () {
    $(function () {
       modules.modals.init();
    });
  }
  
  ,modals: {
    trigger: $('.modal-trigger'),
    modal: $('.modal'),
    scrollTopPosition: null,
  
    init: function () {
      var self = this;
  
      if (self.trigger.length > 0 && self.modal.length > 0) {
        modules.$body.append('<div class="modal-overlay"></div>');
  
        self.triggers();
      }
    },
  
    triggers: function () {
      var self = this;
    
      self.trigger.on('click', function (e) {
        e.preventDefault();
      
        var $trigger = $(this);
      
        self.openModal($trigger, $trigger.data('modalId'));
      });
    
      $('.modal-overlay').on('click', function (e) {
        e.preventDefault();
        self.closeModal();
      });
    
      modules.$body.on('keydown', function(e){
        if (e.keyCode === 27) {
          self.closeModal();
        }
      });
    
      $('.modal-close').on('click', function(e) {
        e.preventDefault();
        self.closeModal();
      });
    },
    
    openModal: function (_trigger, _modalId) {
      var self = this,
          scrollTopPosition = modules.$window.scrollTop(),
          $targetModal = $('#' + _modalId);
      
      self.scrollTopPosition = scrollTopPosition;
      
      modules.$html
      .addClass('modal-show')
      .attr('data-modal-effect', $targetModal.data('modal-effect'));
      
      $targetModal.addClass('modal-show');
      
      modules.$container.scrollTop(scrollTopPosition);
    },
      
    closeModal: function () {
      var self = this;
      
      $('.modal-show').removeClass('modal-show');
      modules.$html
        .removeClass('modal-show')
        .removeAttr('data-modal-effect');
        
      modules.$window.scrollTop(self.scrollTopPosition);
    }
  }
}

modules.init();

});