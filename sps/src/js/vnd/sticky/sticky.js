//Sticky header
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.header__fixed').addClass("header-sticky-nav");
    }
    else{
        $('.header__fixed').removeClass("header-sticky-nav");
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.mobile__fixed').addClass("header-sticky-nav");
    }
    else{
        $('.mobile__fixed').removeClass("header-sticky-nav");
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.menu-triger').addClass("header-sticky-nav");
    }
    else{
        $('.menu-triger').removeClass("header-sticky-nav");
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 80){  
        $('.menu-popup').addClass("header-sticky-nav");
    }
    else{
        $('.menu-popup').removeClass("header-sticky-nav");
    }
});
//////////////////////////////

$(document).ready(function () {
  $('#nav li').first().addClass("active").find('ul').show();
  $('#nav > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('#nav li .sub-menu').slideUp();
      $(this).next().slideToggle();
      $('#nav li a').removeClass('active');
      $(this).addClass('active');
    }
  });
});