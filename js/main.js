jQuery(document).ready(function () {
    "use strict"
    $('.slider').ripples({
        resolution: 800,
        dropRadius: 15,
        perturbance: 0.100,
    });

    var typed = new Typed('.text', {
        strings: ["<strong> altayyab </strong><strong class='primary'>bakhsh</strong>", "<strong>welcome</strong> <strong class='primary'>you</strong>"],
        typeSpeed: 150,
        loop: true,
    });



    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top >= 200) {
            $("#goto").addClass('secondary');
        } else if (top < 200) {
            $("#goto").removeClass('secondary');
        }
    });





    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        }

    });

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }


    });

    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });


    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });

    new WOW().init();



});