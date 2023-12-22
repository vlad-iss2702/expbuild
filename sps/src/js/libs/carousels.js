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