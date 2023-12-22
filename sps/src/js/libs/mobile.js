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