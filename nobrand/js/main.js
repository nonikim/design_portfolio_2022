$(function () {

    let winWidth = $(window).width();
    let winHeight = $(window).height();

    $('.goTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 500)
    });

    $('.list').slick({
        autoplay: true,
        speed: 3000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 960, settings: {
                    speed: 2500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 0,
                    arrows: false,
                }
            }
        ]
    });

    $('#mainVisual_pc').slick({
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        dots: true
    });
    $('#slick-slide-control10').text('0 1');
    $('#slick-slide-control11').text('02');
    $('#slick-slide-control12').text('03');

    $('#mainVisual_m').slick({
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 2000
    });

    $('.all').on('click', function () {
        $('.openM').stop().animate({
            right: 0
        }, 900);
    });

    $('.closeM').on('click', function () {
        $('.openM').stop().animate({
            right: '-100%'
        }, 900);
    });


    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();
        if (scr > 1100) {
            $('#side').fadeIn();
        } else {
            $('#side').fadeOut();
        };
    });

    $(window).on('resize', function () {
        winHeight = $(window).height();
    });
    if (winWidth > 960) {
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
        });
    }

    AOS.init();
});
