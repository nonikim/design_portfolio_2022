$(function () {


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
        $(this).children('.depth2').fadeIn();
    }).on('mouseleave', function () {
        $('.depth2').fadeOut();
    });
    
    $('.gnb_pc .depth1 .depth2 li').on('mouseenter', function () {
        $(this).children('.depth3').fadeIn();
    });

});
