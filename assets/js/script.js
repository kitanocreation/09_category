$(function() {

    // console.log('test');

    /* slick */
    $(".ks-slick").slick({
        autoplay: true, // 自動再生ON
        fade: true, // フェードON
        dots: false, // ドットOFF
        arrows: false, // 矢印OFF
        speed: 3000, // スライド、フェードアニメーションの速度2000ミリ秒
        autoplaySpeed: 3000, // 自動再生速度4000ミリ秒
        pauseOnFocus: false, // フォーカスで一時停止OFF
        pauseOnHover: false // マウスホバーで一時停止OFF
    });

    /* スクロールアニメーション */
    $(window).on('scroll', function(){

        $('.slideIn-up').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-on');
            }
        });

        $('.fadeIn-about').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 200;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('h3.fadeIn-about').addClass('fadeIn-about-on');
                $(this).parent('.ks-about-flex').find('.slideIn-left-about').addClass('slideIn-left-about-on');
            }
        });

        $('.fadeIn').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-on');
            }
        });

        $('.ks-pickUp-item_img-obi').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).find('.ks-pickUp-item_img-obi-bg-sp').addClass('ks-pickUp-item_img-obi-bg-sp-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-sp div').addClass('ks-pickUp-item_img-obi-bg-sp-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-pc').addClass('ks-pickUp-item_img-obi-bg-pc-on');
                $(this).find('.ks-pickUp-item_img-obi-bg-pc div').addClass('ks-pickUp-item_img-obi-bg-pc-on');
                $(this).find('p').addClass('ks-pickUp-item_img-obi_p-on');
                $(this).find('p span').addClass('ks-pickUp-item_img-obi_span-on');
            }
        });

        $('.slideIn-left').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-left-on');
            }
        });

        $('.slideIn-up-pickUp').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('slideIn-up-pickUp-on');
            }
        });

        $('.fadeIn-ranking').each(function() {
            let targetOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop() + $(window).height();
            let offset = 100;
            if (scrollPos > targetOffset + offset) {
                $(this).addClass('fadeIn-ranking-on');
                $(this).parent('.ks-ranking').find('.slideIn-left-ranking').addClass('slideIn-left-ranking-on');
                $(this).parent('.ks-recommend').find('.slideIn-left-ranking').addClass('slideIn-left-ranking-on');
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
