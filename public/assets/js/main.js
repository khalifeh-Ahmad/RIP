$(document).ready(function() {
    $('.open-menu').on('click', function() {
        $('.top-navbar').addClass('menu-open');
        $('.open-menu').hide();
        $('.close-menu').show();
    });

    $('.close-menu').on('click', function() {
        $('.top-navbar').removeClass('menu-open');
        $('.close-menu').hide();
        $('.open-menu').show();
    });
});



$(document).ready(function(){
    var teamCarousel = $(".team-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true, // Set to true for default navigation
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000, 
        smartSpeed: 1000,
        responsive: {
            0: {
                center: true,
                items: 1.3
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        navText: ["", ""] // Remove default text if using custom buttons
    });

    // Custom navigation handlers
    $(".owl-prev").click(function(){
        teamCarousel.trigger('prev.owl.carousel');
    });

    $(".owl-next").click(function(){
        teamCarousel.trigger('next.owl.carousel');
    });
});
