$(function () {

    $('#mainslider_m').slick({
        autoplay: true,
        arrows: false,
        speed: 2800,
        autoplaySpeed: 1000,
        dots: true,
        fade: true
    });

    $('#mainslider_pc').slick({
        autoplay: true,
        arrows: false,
        speed: 2800,
        autoplaySpeed: 1000,
        dots: true,
        fade: true,
        pauseOnHover: false,
    });

    $('.openM').on('click', function () {
        $('.gnb_mob').slideToggle();
    });

    $('.gnb_mob .depth1 h2').on('click', function () {
        $(this).next().slideToggle().parent().siblings().children('.depth2').slideUp();
    });

    $('.gnb_mob .depth1 .depth2 h3').on('click', function () {
        $(this).next().slideToggle().parent().siblings().children('.depth3').slideUp();
    });

    $('.gnb_pc .depth1').on('mouseenter', function () {
        $('.new').slideDown();
        $(this).children('.depth2').stop().fadeIn();
    }).on('mouseleave', function () {
        $(this).children('.depth2').stop().fadeOut();
    });

    AOS.init();

});
