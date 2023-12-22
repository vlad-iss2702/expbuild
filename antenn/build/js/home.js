$(document).ready(function(){
    $('.packet-carousel').owlCarousel({
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
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
    autoplay: true,
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
    autoplay: true,
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
    autoplay: true,
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
            items:1,
            margin: 80
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
    /*Idtabs*/
    $("#usual1 ul").idTabs();
    /*-Loader*/
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      }
    // Send form
    $('.form__block form button').click(function(){
        var modal = $(this).parents('.form__block');
        var title = modal.data('form-title');
        var validate = true;
        modal.find('*[required]').each(function(){
            if ($(this).val().length < 1 || $(this).is(':invalid')){
                validate = false;
                $(this).parent().addClass('invalid');
            } else {
                $(this).parent().removeClass('invalid');
            }
        });
        if (validate){
            var data = modal.find('form').serializeArray();
            data.push({
                'name': 'form',
                'value': title
            });
            if (typeof utm !== 'undefined') {
                data.push({
                    'name': 'utm',
                    'value': JSON.stringify(utm)
                });
            }
            ajaxSend('/helpers/mail.php', data);
        }
        return false;
    });

    // Modal
    $(document).on('keydown', function(e){
        if (e.keyCode == 27) {
            closeModal();
        }
    });
    $(document).on('click', function(e){
        var elem = e.target;
        if (elem.attributes['data-modal-close']){
            closeModal();
        }
    });
});
// Portfolio
var openPortfolio = function(id, isModal){
    if (id){

        $.post('/data/product_by_id.php', {'id': id}).success(function(c){
            $('.pf-detail .modal__body').html(c);
            $('.pf-d__images').owlCarousel({
                singleItem: true
            });
            if (isModal){
                openModal('.pf-detail');
            }
        });
    }
};
var pfModal = $('.pf-detail .modal__content');
var prevPortfolio = function(){
    pfModal.addClass('modal--loading');
    openPortfolio($('.pf-d__block').data('prev-id'));
    setTimeout(function(){
        pfModal.removeClass('modal--loading');
    }, 500);
};
var nextPortfolio = function(){
    pfModal.addClass('modal--loading');
    openPortfolio($('.pf-d__block').data('next-id'));
    setTimeout(function(){
        pfModal.removeClass('modal--loading');
    }, 500);
};
// Video
var siteFrame = $('.site-modal iframe');
var openSite = function(id, title){
    openModal('.site-modal', title);
    siteFrame.attr('src', id);
};
// Modal
var openModal = function(modal, title, formTitle) {
    closeModal();
    $('body').addClass('modal--active');
    $('.modal__back').addClass('modal__back--active');
    $('.modal__block' + modal + '').addClass('modal__block--active');
    if (title){
        $('.modal__block' + modal + ' .modal__info h4').text(title);
    }
    if (formTitle){
        $('.modal__block' + modal + '').attr('data-form-title', formTitle);
    }
};
var closeModal = function() {
    siteFrame.removeAttr('src');
    $('.modal__back--active').removeClass('modal__back--active');
    $('.modal__block--active').removeClass('modal__block--active');
    $('body').removeClass('modal--active');
    $('.modal__block .invalid').each(function(){
        $(this).removeClass('invalid');
    });
};
var clearModal = function(){
    $('form input, form textarea').each(function(){
        $(this).val('');
    });
};
var clearModalForm = function(modal){
    $('.modal__block' + modal + '').find('input, textarea, select').each(function(){
        $(this).val('');
    });
};
// Ajax
var ajaxSend = function(url, data){
    $.ajax({
        'type': 'post',
        'url': url,
        'data': data,
        'success': function(c){
            if (c){
                clearModal();
                closeModal();
                openModal('.success-modal');
            } else {
                alert('Ошибка при отправке заявки!')
            }
        }
    });
};
var $window = $(window);
function check_if_in_view() {
    var $animation_elements = $('.animated');
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if ($element.data('animated-delay')){
                $element.css({
                    'animation-delay' : $element.data('animated-delay')
                })
            }
            $element.addClass($element.data('animated-name'));
        } else {
            $element.removeClass($element.data('animated-name'));
        }
    });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.header-nav').addClass("header-sticky-nav");
    }
    else{
        $('.header-nav').removeClass("header-sticky-nav");
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.header-main').addClass("header-sticky-nav");
    }
    else{
        $('.header-main').removeClass("header-sticky-nav");
    }
});