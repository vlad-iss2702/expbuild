$(document).ready(function() {
	$(function() {
  var $menu_popup = $('.menu-popup');
  $(".menu-triger, .menu-close").click(function(){
    $menu_popup.slideToggle(300, function(){
      if ($menu_popup.is(':hidden')) {
        $('body').removeClass('body_pointer');
      } else {
        $('body').addClass('body_pointer');
      }         
    });  
    return false;
  });     
  $(document).on('click', function(e){
    if (!$(e.target).closest('.menu').length){
      $('body').removeClass('body_pointer');
      $menu_popup.slideUp(300);
    }
  });
});

// Nav buttons
$('.nav-buttons__button--menu').click(function () {
  let active = $(this).hasClass('nav-buttons__button--active');
  $('.nav-buttons__button--active').removeClass('nav-buttons__button--active');
  $('.left-block').slideUp();

  if (!active){
      $(this).addClass('nav-buttons__button--active');
  }

  $('.nav').slideToggle();
});
$('.nav-buttons__button--filter').click(function () {
  let active = $(this).hasClass('nav-buttons__button--active');
  $('.nav-buttons__button--active').removeClass('nav-buttons__button--active');
  $('.nav').slideUp();

  if (!active){
      $(this).addClass('nav-buttons__button--active');
  }

  $('.left-block').slideToggle();
});
$('.main-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    navText : ["<i class=\"icon-chevron-thin-left\"></i> ", "<i class=\"icon-chevron-thin-right\"></i>"],
    items: 1,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:1,
          nav:false,
          margin: 20,
      },
      992:{
          items:1,
          nav:true,
          loop:false
      },
      1200:{
          items:1,
      },
      1300:{
        items:1,
    }
  }
})
$('.partners-carousel').owlCarousel({
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    navText : ["<i class=\"icon-chevron-thin-left\"></i> ", "<i class=\"icon-chevron-thin-right\"></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:true,
            loop:false
        },
        1200:{
            items:4,
        },
        1300:{
          items:5,
      }
    }
})
$('.reviews-carousel').owlCarousel({
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 7000,
  loop: false,
  mouseDrag: true,
  touchDrag: false,
  animateOut: 'fadeOut',
  smartSpeed: 500,
  navText : ["<i class=\"icon-chevron-thin-left\"></i> ", "<i class=\"icon-chevron-thin-right\"></i>"],
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:2,
          nav:false
      },
      992:{
          items:3,
          nav:true,
          loop:false
      },
      1200:{
          items:4,
      },
      1300:{
        items:5,
    }
  }
})

var sync1 = $(".gallery-product-carousel");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
  video:true,
  startPosition: 12,
  items:1,
  loop:true,
  navText : ["<i class=\"icon-chevron-thin-left\"> ", "<i class=\"icon-chevron-thin-right\"></i>"],
  margin: 20,
  mouseDrag: true,
  touchDrag: true,
  animateOut: 'fadeOut',
  autoplay:false,
  autoplayTimeout:6000,
  autoplayHoverPause:false,
  nav: false,
  dots: false
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) {
  $owl_slider = $(this).data('owl.carousel');
  var loop = $owl_slider.options.loop;

  if(loop){
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
  }else{
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data('owl.carousel');
  var itemClass = "." + owl_thumbnail.options.itemClass;


  var thumbnailCurrentItem = sync2
  .find(itemClass)
  .removeClass("synced")
  .eq(current);

  thumbnailCurrentItem.addClass('synced');

  if (!thumbnailCurrentItem.hasClass('active')) {
    var duration = 300;
    sync2.trigger('to.owl.carousel',[current, duration, true]);
  }   
}
var thumbs = sync2.owlCarousel({
  startPosition: 12,
  items:6,
  loop:false,
  margin:10,
  autoplay:false,
  nav: false,
  dots: false,
  onInitialized: function (e) {
    var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
    thumbnailCurrentItem.addClass('synced');
  },
})
.on('click', thumbnailItemClass, function(e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
}).on("changed.owl.carousel", function (el) {
  var number = el.item.index;
  $owl_slider = sync1.data('owl.carousel');
  $owl_slider.to(number, 100, true);
});
/*-----Akkordeon-scripts-----*/
$('.list-product-nav .list-product-cat').click(function(e) {
  e.preventDefault();
  $('.list-product-nav .list-product-subnav').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation();

  var span = $(this).find('.icoomon');
  span.toggleClass('icon-chevrons-down icon-chevrons-up');
});


/*$("#toggle > li > div").click(function () {
  if (false == $(this).next().is(':visible')) {
      $('#toggle ul').slideUp();        
  }
  
  var $currIcon=$(this).find("span.the-btn > i")
  
  $("span.the-btn > i").not($currIcon).addClass('icon-chevrons-down').removeClass('icon-chevrons-up');
  
  $currIcon.toggleClass('icon-chevrons-up icon-chevrons-down');
  
  $(this).next().slideToggle();

  $("#toggle > li > div").removeClass("active");
  $(this).addClass('active');

});*/

/*-------mobile-accordeon-----*/
/*( function( $ ) {
  $( document ).ready(function() {
  $('#cssmenu li.has-sub>a').on('click', function(){
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
      }
      else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
      }
    });
  
    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
  
    (function getColor() {
      var r, g, b;
      var textColor = $('#cssmenu').css('color');
      textColor = textColor.slice(4);
      r = textColor.slice(0, textColor.indexOf(','));
      textColor = textColor.slice(textColor.indexOf(' ') + 1);
      g = textColor.slice(0, textColor.indexOf(','));
      textColor = textColor.slice(textColor.indexOf(' ') + 1);
      b = textColor.slice(0, textColor.indexOf(')'));
      var l = rgbToHsl(r, g, b);
      if (l > 0.7) {
        $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
        $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
      }
      else
      {
        $('#cssmenu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
        $('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
      }
    })();
  
    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
  
        if(max == min){
            h = s = 0;
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return l;
    }
  });
  } )( jQuery );*/

  /*------Accordeon-new------------*/
  $(document).ready(function($){
      $('#accordion-1').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow'
      });
  });

/*$(document).ready(function () {
  $('#cssmenu li > a').on('click', function(){
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
      }
      else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
      }
  });

  $('#cssmenu>ul>li >a').append('<span class="holder"></span>');
});*/
$(document).ready(function () {
  var checkCookie = $.cookie("sub-nav");
  if (checkCookie != "") {
    $('#menu > li.sub > a:eq('+checkCookie+')').addClass('active').next().show();
  }
  $('#menu > li.sub > a').click(function(){
      var navIndex = $('#menu > li.sub > a').index(this);
      $.cookie("sub-nav", navIndex);
      $('#menu li ul').slideUp();
       if ($(this).next().is(":visible")){
           $(this).next().slideUp();
       } else {
       $(this).next().slideToggle();
       }
       $('#menu li a').removeClass('active');
       $(this).addClass('active');
       return false;
  });
    var checkCookie = $.cookie("sub-link");
  if (checkCookie != "") {
    $('#menu > li.sub > ul li a:eq('+checkCookie+')').addClass('active');
  }
    $('.sub ul li a').click(function(){
        var subIndex = $('.sub ul li a').index(this);
      $.cookie("sub-link", subIndex);
   $('.sub ul li a').removeClass('active');
   $(this).addClass('active');
});
});

// Lightbox
    $(document).on('click', '#galleryBlock, .gallery-init, *[rel=zoom]', function (event) {
        app.blueimp(this, event);
    });

    app = {
    blueimp: function(e, event){
        event = event || window.event;
        if (
            event.target.nodeName == 'IMG' ||
            event.target.nodeName == 'SPAN' ||
            event.target.nodeName == 'A'){
            var target = event.target || event.srcElement;
            var index = (event.target.nodeName == 'A') ? target : target.parentNode;
            var	options = {
                index: index,
                event: event
            };
            links = e.getElementsByTagName('a');
            if ($(e).attr('rel') == 'zoom'){
                links = $(e);
            }
            blueimp.Gallery(links, options);
        }
        return false;
    }
};


});
