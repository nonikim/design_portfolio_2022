$(function () {



/*     $(window).on('resize', function () {
        winHeight = $(window).height();
    });
    $('#wrap>div').on('mousewheel', function (e, d) {
        e.preventDefault();
        if (d > 0) {//스크롤을 올렸을때
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            })
        } else if (d < 0) {//스크롤을 내렸을때
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            })
        }
    }); */

    $('.all img').on('click', function () {
        $('#gnbMobile').fadeIn('fast');
    });

    $('.closeM img').on('click', function () {
        $('#gnbMobile').fadeOut('fast');
    });

    $('#gnbMobile .depth1').on('click', function () {
        $(this).find('.depth2 li').slideToggle().parent().parent().siblings().find('.depth2 li').slideUp();
    });

    $('#fbn').slideDown();

    $('#fbn .close').on('click', function () {
        $('#fbn').slideUp('fast');
    });
});