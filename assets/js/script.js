$(function() {

    // console.log('test');

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
