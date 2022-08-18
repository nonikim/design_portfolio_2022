$(function () {

    AOS.init();

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    let personaarea = $('.personaarea').offset().top;
    let works_list = $('.works_list').offset().top;
    let uiux = $('.works_uiux').offset().top;
    let app = $('.app_gajago').offset().top;
    let web = $('.web').offset().top;
    let bx = $('.bx').offset().top;
    let contact = $('.contact').offset().top;

    $('.trigger').click(function () {
        $(this).parent('.menu').toggleClass('active');
    });


    $('.worksmenu ul li:nth-child(1)').click(function () {
        let goUi = $('#uxui1').offset();
        $('html,body').animate({ scrollTop: goUi.top + 1 }, 500);
    })
    $('.worksmenu ul li:nth-child(2)').click(function () {
        let goApp = $('#app2').offset();
        $('html,body').animate({ scrollTop: goApp.top + 1 }, 500)
    })
    $('.worksmenu ul li:nth-child(3)').click(function () {
        let goWeb = $('#web3').offset();
        $('html,body').animate({ scrollTop: goWeb.top + 1 }, 500)
    })
    $('.worksmenu ul li:nth-child(4)').click(function () {
        let goBx = $('#bx4').offset();
        $('html,body').animate({ scrollTop: goBx.top + 1 }, 500)
    })

    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();
        //console.log(scr);
        if (scr >= 4200) {
            $('.worksmenu ul').addClass('fadein');
            $('.worksmenu ul li').addClass('on');
        } else {
            $('.worksmenu ul').removeClass('fadein');
            $('.worksmenu ul li').removeClass('on');
        }
        if (scr >= uiux && scr < app) {
            $('.worksmenu ul').addClass('works');
            $('.worksmenu ul li').removeClass('on');
            $('.worksmenu ul li:nth-child(1)').addClass('on');
        } else if (scr >= app && scr < web) {
            $('.worksmenu ul').addClass('works');
            $('.worksmenu ul li').removeClass('on');
            $('.worksmenu ul li:nth-child(2)').addClass('on');
        } else if (scr >= web && scr < bx) {
            $('.worksmenu ul').addClass('works');
            $('.worksmenu ul li').removeClass('on');
            $('.worksmenu ul li:nth-child(3)').addClass('on');
        } else if (scr >= bx) {
            $('.worksmenu ul').addClass('works');
            $('.worksmenu ul li').removeClass('on');
            $('.worksmenu ul li:nth-child(4)').addClass('on');
        } else {
            $('.worksmenu ul').removeClass('works');
        }
    })

    $('.uiuxlist div:nth-child(1)').on('click', function () {
        let dyson = $('.dyson').offset().top;
        $('html,body').animate({ "scrollTop": dyson }, 500)
    });
    $('.uiuxlist div:nth-child(2)').on('click', function () {
        let jomalone = $('.jomalone').offset().top;
        $('html,body').animate({ "scrollTop": jomalone }, 500)
    });
    $('.uiuxlist div:nth-child(3)').on('click', function () {
        let nobrand = $('.nobrand').offset().top;
        $('html,body').animate({ "scrollTop": nobrand }, 500)
    });
    $('.uiuxlist div:nth-child(4)').on('click', function () {
        let aladin = $('.aladin').offset().top;
        $('html,body').animate({ "scrollTop": aladin }, 500)
    });

});