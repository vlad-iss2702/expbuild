$(document).ready(function() {
	$('.offers-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    autoplayTimeout:7000,
    animateOut: 'fadeOut',
    loop: true,
    navText:["<img src='../img/prev.png'>","<img src='../img/next.png'>"],
    items: 1
  });
  $('.succes-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: false,
    autoplayTimeout:7000,
    loop: true,
    navText : ["<i class=\"icon-long-arrow-left\"></i>","<i class=\"icon-long-arrow-right\"></i>"],
    items: 1
  });
  $('.partners-carousel').owlCarousel({
    margin: 0,
    nav: true,
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
            items:6
        },
        1200:{
            items:6
        }
      }
  });
  	/*Затемнение экрана при открытии мобильного меню*/
  	$('.sidebarIconToggle').click(function(){ 
      $('.mobile-menu').toggleClass('active-background');
  	});
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header-fixed').addClass("sticky");
    }
    else{
        $('.header-fixed').removeClass("sticky");
    }
});
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