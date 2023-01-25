(function($) {

    "use strict";


    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
    
    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var sticky_Header = $('.sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 300) {
                sticky_Header.addClass("animated slideInDown")
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                sticky_Header.removeClass("animated slideInDown")
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }
                //                ,afterLoad: function(evt){
                //                    alert("The selected language has been loaded");
                //                },
                //                beforeOpen: function(evt){
                //                    alert("before open");
                //                },
                //                afterOpen: function(evt){
                //                    alert("after open");
                //                },
                //                beforeClose: function(evt){
                //                    alert("before close");
                //                },
                //                afterClose: function(evt){
                //                    alert("after close");
                //                }
        });
    };

    if ($('.area_select').length) {
        $('.area_select').on('change', function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }

    //Single Item- Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }

    //Info - Carousel
    if ($('.info-carousel').length) {
        $('.info-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Single Item Carousel
    if ($('.highlight-carousel').length) {
        $('.highlight-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //Services Carousel
    if ($('.services-carousel').length) {
        $('.services-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                778: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    //Services Carousel
    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            center: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                778: {
                    items: 2
                },
                800: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    //Services Carousel
    if ($('.project-two-carousel').length) {
        $('.project-two-carousel').owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            center: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                778: {
                    items: 1
                },
                800: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1,
                    margin: 0,
                    stagePadding: 175,
                },
                1500: {
                    items: 1,
                    stagePadding: 400
                }
            }
        });
        $('.project-style-two-carousel-nav.btn-prev').on('click', function() {
           $('.project-two-carousel').trigger('next.owl.carousel'); 
        });
        $('.project-style-two-carousel-nav.btn-next').on('click', function() {
           $('.project-two-carousel').trigger('prev.owl.carousel'); 
        });
    }
        //Services Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1,
                },
                1200:{
                    items:1
                }
            }
        });         
    }

    //Services Carousel
    if ($('.testimonials-carousel').length) {
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 15
                },
                480: {
                    items: 1,
                    stagePadding: 15
                },
                800: {
                    items: 2,
                    stagePadding: 15
                },
                1024: {
                    items: 3,
                    stagePadding: 15
                },
                1200: {
                    items: 3,
                    stagePadding: 15
                }
            }
        });
    }
    //Services Carousel
    if ($('.testimonials-carousel-two').length) {
        $('.testimonials-carousel-two').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 15
                },
                480: {
                    items: 1,
                    stagePadding: 15
                },
                800: {
                    items: 2,
                    stagePadding: 15
                },
                1024: {
                    items: 3,
                    stagePadding: 15
                },
                1200: {
                    items: 3,
                    stagePadding: 15
                }
            }
        });
    }

    //client Carousel
    if ($('.clients-carousel').length) {
        $('.clients-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    //client Carousel
    if ($('.client-carousel-two').length) {
        $('.client-carousel-two').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    //News Carousel
    if ($('.news-carousel').length) {
        $('.news-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                778: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    //News 2 Carousel
    if ($('.blog-two-carousel').length) {
        $('.blog-two-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                778: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });

        $('#blog-2-carousel-nav .prev-btn').on('click', function() {
           $('.blog-two-carousel').trigger('next.owl.carousel'); 
        });
        $('#blog-2-carousel-nav .next-btn').on('click', function() {
           $('.blog-two-carousel').trigger('prev.owl.carousel'); 
        });
    }

    //Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    // Contact Carousel
    if ($('.contact-carousel').length) {
        $('.contact-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    // Contact Carousel
    if ($('.branches-carousel').length) {
        $('.branches-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //Branches- Carousel
    if ($('.industry-carousel').length) {
        $('.industry-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1440: {
                    items: 4,
                },
                1920: {
                    items: 5
                }
            }
        });
    }

    //Verticle Services Carousel
    if ($('.verticle-carousel').length) {
        $('.verticle-carousel').slick({
            dots: true,
            autoplay: true,
            loop: true,
            autoplaySpeed: 5000,
            infinite: true,
            responsive: true,
            slidesToShow: 2,
            vertical: true,
            prevArrow: '<button type="button" class="slick-prev"><span class="flaticon-fast-forward"><span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="flaticon-fast-forward"><span></button>',
            slidesToScroll: 1
        });
    }

    //Masonary
    function enableMasonry() {
        if ($('.masonry-items-container').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.masonry-items-container');

            $container.isotope({
                itemSelector: '.masonry-item',
                masonry: {
                    columnWidth: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });

            winDow.on('resize', function() {

                $container.isotope({
                    itemSelector: '.masonry-item',
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            });
        }
    }

    enableMasonry();


    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Product Tabs
    if ($('.project-tab').length) {
        $('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).hasClass('actve-tab')) {
                return false;
            } else {
                $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
                $(target).addClass('active-tab');
            }
        });
    }


    //Price Range Slider
    if ($('.price-range-slider').length) {
        $(".price-range-slider").slider({
            range: true,
            min: 0,
            max: 90,
            values: [8, 85],
            slide: function(event, ui) {
                $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }


    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }


    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, { accY: 0 });
    }


    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function() {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }


    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }


    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    // bootstrap animated slider
    function bootstrapAnimatedLayer() {

        /* Demo Scripts for Bootstrap Carousel and Animate.css article
         * on SitePoint by Maria Antonietta Perna
         */

        //Function to animate slider captions 
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';

            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load 
        var $myCarousel = $('#minimal-bootstrap-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

        //Initialize carousel 
        $myCarousel.carousel({
            interval: 7000
        });

        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);

        //Pause carousel  
        $myCarousel.carousel('pause');


        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
    }
    bootstrapAnimatedLayer();

    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
        enableMasonry();
    });

})(window.jQuery);