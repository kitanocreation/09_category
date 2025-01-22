$(function() {

    // console.log('test');

    /* スクロールアニメーション */
    $(window).on('scroll', function(){

        $('.slideIn-up').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-on');
            }
        });

        $('.fadeIn-about').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 300;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('h3.fadeIn-about').addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('.slideIn-left-about').addClass('slideIn-left-about-on');
            }
        });


        $('.fadeIn').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-on');
            }
        });

        $('.slideIn-left').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-left-on');
            }
        });

        $('.slideIn-up-pickUp').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-pickUp-on');
            }
        });
    });

    /* スライド */
    $('.ks-arrow-next').on('click', function() {

        if($(this).parent('section').find('.ks-slide-ul1').hasClass('ks-slide-ul-on1')) {
            $(this).parent('section').find('.ks-slide-ul1').removeClass('ks-slide-ul-on1');
            $(this).parent('section').find('.ks-slide-ul2').addClass('ks-slide-ul-on2');
        }

        if(!$(this).hasClass('ks-arrow-next-on')) {
            $(this).addClass('ks-arrow-next-on');
            $(this).parent('section').find('.ks-arrow-prev').removeClass('ks-arrow-prev-on');
        }
    });

    $('.ks-arrow-prev').on('click', function() {

        if($(this).parent('section').find('.ks-slide-ul2').hasClass('ks-slide-ul-on2')) {
            $(this).parent('section').find('.ks-slide-ul2').removeClass('ks-slide-ul-on2');
            $(this).parent('section').find('.ks-slide-ul1').addClass('ks-slide-ul-on1');
        }

        if(!$(this).hasClass('ks-arrow-prev-on')) {
            $(this).addClass('ks-arrow-prev-on');
            $(this).parent('section').find('.ks-arrow-next').removeClass('ks-arrow-next-on');
        }
    });    
});
