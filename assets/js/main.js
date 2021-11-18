(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // Magnific Popup:
        $(".video-play-button").magnificPopup({
        	type: 'video'
        });

        // Counter:
        $('.counter').counterUp({
            delay: 100,
            time: 5000,
        });

        // SmoothScroll:
        $("a").smoothScroll();

        // Testimonial Carousel:
        $(".testimonial-carousel").owlCarousel({
            items: 3,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });

        // carroussel lazy load:

        $('.owl-carousel').owlCarousel({
            items: 2,
            lazyLoad:true,
            loop:true,
            margin:10,

        });

        // PreLoader:
        $(window).on('load', function () {
            $("#status").on('fadeOut', "slow");
          $("#preloader").on('delay', 500).on('fadeOut', "slow").remove();
        })






    });

    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };

    $('.phone').mask(behavior, options);

    jQuery(window).load(function(){

    });

}(jQuery));