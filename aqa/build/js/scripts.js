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
$('.main-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    navText : ["<i class=\"icon-arrow-left\"></i> ", "<i class=\"icon-arrow-right\"></i>"],
    items: 1,
})
$('.info-carousel').owlCarousel({
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    navText : ["<i class=\"icon-arrow-left\"></i> ", "<i class=\"icon-arrow-right\"></i>"],
    items: 1,
})

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
//Sticky header
$(function() {
	var marquee = $("#marquee"); 
	marquee.css({"overflow": "hidden", "width": "100%"});
	// оболочка для текста ввиде span (IE не любит дивы с inline-block)
	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
	marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
	marquee.wrapInner("<div>");
	marquee.find("div").css("width", "200%");
	var reset = function() {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
	};
	reset.call(marquee.find("div"));
});



});
