$(document).ready(function() {
	/*Слайдер ихображений в модальном окне*/
	$('.modal-img-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		items: 1
	});
  	/*Затемнение экрана при открытии мобильного меню*/
  	$('.sidebarIconToggle').click(function(){ 
      $('.mobile-menu').toggleClass('active-background');
  	});
  	/*Для плавного перемещения меню*/
  	$(document).ready(function() {
        $("#menu").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
    /*Для плавного перемещения мобильного меню*/
  	$(document).ready(function() {
        $("#menu-mobile").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
    });
    /*Для закрытия меню после перемещения к определенному блоку*/
    $(document).ready(function() {
        $("#menu-mobile").on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
              
            $('.mobile-menu').removeClass('active-background');
            $('.openSidebarMenu').prop('checked', false);
        });
    });
    /*Модальные окна для видеороликов*/
    $(".js-video-button").modalVideo({
      youtube:{
        controls:0,
        nocookie: true
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