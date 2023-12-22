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
