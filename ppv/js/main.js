jQuery(document).ready(function() {


    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    jQuery('li.parent').on('click', function() { jQuery(this).toggleClass('openParent'); });


    $(".mpage_slider.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: false,
        autoHeight: true,
        nav: true,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: true,
        dotsData: false,
        smartSpeed: 1000,
        responsive : {
            0 : {
                items:1,
                nav:false
            },
            576 : {
                items:1,
                nav:true
            }
        }
    });
    $(".toolsSlider.owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 1,
        center: false,
        autoHeight: true,
        nav: true,
        dots: true,     
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-chevron-small-left' aria-hidden='true'></i>", "<i class='icon-chevron-small-right' aria-hidden='true'></i>"],           
        smartSpeed: 1000,
        responsive : {
            0 : {
                items:3
            },
            768 : {
                items:3
            }
        }

    });


    $(".mainDocumentsSlider.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 35,
        center: false,
        autoHeight: true,
        nav: true,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        dotsData: false,
        smartSpeed: 1000,
        dots: true,
        responsive : {
            0 : {
                items:1,
                dots: true
            },
            576 : {
                items:4,
                dots: true
            }
        }
    });
    $(".maiPartnersSlider.owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        center: false,
        autoHeight: true,
        nav: true,
        stagePadding: 0,
        autoplayHoverPause: true,
        autoplay: false,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        dotsData: false,
        smartSpeed: 1000,
        dots: true,
        responsive : {
            0 : {
                items:1,
                dots: true
            },
            576 : {
                items:4,
                dots: true
            }
        }
    });

    $(".projectLeftBottomSlider.owl-carousel").owlCarousel({
        items: 2,
        loop: false,
        margin: 20,
        center: false,
        autoHeight: true,
        nav: true,
        autoplayTimeout: 4000,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        smartSpeed: 1000,     
    });


    // let owl=$("#mainSlider");
    // owl.owlCarousel();
    // $(".navigationNextBtn").click(function(){
    // 	owl.trigger("next.owl.carousel");
    // });
    // $(".navigationPrevBtn").click(function(){
    // 	owl.trigger("prev.owl.carousel");
    // });


    // $("#partnersSlider").owlCarousel({
    //     items: 4,
    //     loop: false,
    //     margin: 25,
    //     center: false,
    //     autoHeight: true,
    //     nav: true,
    //     navContainer: ".partnersNav",
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: true,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //         },
    //         768: {
    //             items: 3,
    //         },
    //         992: {
    //             items: 4
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // let owl2=$("#partnersSlider");
    // owl2.owlCarousel();
    // $(".partnersNavNextBtn").click(function(){
    // 	owl2.trigger("next.owl.carousel");
    // });
    // $(".partnersNavPrevBtn").click(function(){
    // 	owl2.trigger("prev.owl.carousel");
    // });

    // $('#popularProductsSlider').owlCarousel({
    //     loop: true,
    //     margin: 28,
    //     center: false,
    //     autoHeight: true,
    //     nav: false,
    //     pagination: false,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: false,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     animateOut: 'fadeOutLeft',
    //     animateIn: 'fadeInRight',
    //     responsive: {
    //         0: {
    //             items: 1.3,
    //             margin: 15,
    //         },
    //         480: {
    //             items: 1.6,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //             margin: 28
    //         },
    //         768: {
    //             items: 3,
    //             margin: 15
    //         },
    //         992: {
    //             items: 3,
    //             margin: 27
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // $('#stocksSlider').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     center: false,
    //     autoHeight: true,
    //     nav: false,
    //     pagination: false,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: false,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     animateOut: 'fadeOutLeft',
    //     animateIn: 'fadeInRight',
    //     responsive: {
    //         0: {
    //             items: 1.3,
    //             margin: 15
    //         },
    //         480: {
    //             items: 1.6,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //             margin: 30
    //         },
    //         768: {
    //             items: 2,
    //             margin: 30
    //         },
    //         992: {
    //             items: 3,
    //             margin: 25
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }
    // });

    // $("#contactsContentSlider").owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     center: false,
    //     autoHeight: true,
    //     nav: true,
    //     stagePadding: 0,
    //     autoplayHoverPause: true,
    //     autoplay: false,
    //     autoplayTimeout: 4000,
    //     navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    //     dots: true,
    //     dotsData: false,
    //     smartSpeed: 1000,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 15
    //         },
    //         480: {
    //             items: 2,
    //             margin: 15
    //         },
    //         576: {
    //             items: 2,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         992: {
    //             items: 3,
    //         },
    //         1200: {
    //             items: 3
    //         }
    //     }
    // });


    jQuery("input#mpage__feedback_phone").inputmask("+7 (999)-999-99-99");

    // $(".catalogCardsSidebarColumnMenuFirst button, .catalogCardsSidebarColumnMenuSecond button .catalogCardsSidebarColumnTitleMobile").on("click", function() {
    //     $(this).children("span").toggleClass("active");
    // });

    // $(".catalogCardsFiltersBtn").on("click", function() {
    //     $(".catalogCardsFiltersArea").removeClass("hidden");
    // });

    // $(".catalogCardsFiltersCloseBtn").on("click", function() {
    //     $(".catalogCardsFiltersArea").addClass("hidden");
    // });

    
    $(".mpage_catalog").on("click", function() {
        $(".mobileCatMenu").addClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").addClass("mobileCatMenuOverlayActive");
        $("body").addClass("bodyHidden");
    });
    $(".mobileCatMenuClose > img").on("click", function() {
        $(".mobileCatMenu").removeClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").removeClass("mobileCatMenuOverlayActive");
        $("body").removeClass("bodyHidden");
    });

    $(".mobileCatMenuOverlay").on("click", function() {
        $(".mobileCatMenu").removeClass("mobileCatMenuOpen");
        $(".mobileCatMenuOverlay").removeClass("mobileCatMenuOverlayActive");
        $("body").removeClass("bodyHidden");
    });

    $(".mobileIconBurger").on("click", function() {
        $(".mobileMainMenu").fadeIn();
        $(".mobileIconBurger").fadeOut();
        $(".mobileIconClose").fadeIn();
    });
    $(".mobileIconClose").on("click", function() {
        $(".mobileMainMenu").fadeOut();
        $(".mobileIconBurger").fadeIn();
        $(".mobileIconClose").fadeOut();
    });


    //Active-menu
    const mainMenuItem = document.querySelectorAll('.header_menu_all li a'),
         mainBaseUrl = window.location.href;

    mainMenuItem.forEach( item => {
        if (mainBaseUrl == item.href) {
            item.classList.add('activeMenu');            
        } 
    });
    const footerMenuItem = document.querySelectorAll('.footer_menu_wr ul li a');
    footerMenuItem.forEach( item => {
        if (mainBaseUrl == item.href) {
            item.classList.add('active');            
        } 
    });


    //LoginTabsForm
    const tabsItem = document.querySelectorAll('.cabinetFormRadioInputButton'),
        tabsContent = document.querySelectorAll('.cabinetFormsItem'),
        tabsList = document.querySelector('.cabinetFormRadio'); 
    
        function tabsbContentHide() {
            tabsContent.forEach( item => { 
                item.classList.add('cabinetFormsHide');
                item.classList.remove('cabinetFormsShow', 'cabinetFormsFade');
            });
            
            tabsItem.forEach( tab => {
                tab.classList.remove('cabinetFormRadioInputActive');
            });
        }
        function tabsContentShow(i) {
            tabsContent[i].classList.add('cabinetFormsShow', 'cabinetFormsFade');
            tabsContent[i].classList.remove('cabinetFormsHide');
            tabsItem[i].classList.add('cabinetFormRadioInputActive');
        }

        tabsbContentHide();
        tabsContentShow(0);

        tabsList.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains('cabinetFormRadioInputButton')) {
            tabsItem.forEach( (item, i) => {
                if ( target == item ) {
                    tabsbContentHide();
                    tabsContentShow(i);
                }
            });
            }
        })

});