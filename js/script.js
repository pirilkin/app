$(document).ready(function () {
    
    $('.about-slider').slick({
        slidesToShow: 4,
        autoplay: true,
        prevArrow: '<button class="about-slider__prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="about-slider__next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1199.98,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
              }
            },
           
        ]

    });
    function filterPhoto(photo){
        $('.works .col-xl-4').filter(photo).show();
        $('.works .col-xl-4').not(photo).hide();
    }
    $('.works-btns__btn').click(function(){
        $('.works-btns__btn').removeClass('works-btns__btn_active');
        $(this).addClass('works-btns__btn_active');
        filterPhoto('.' + $(this).attr('data-filter'));
    })
    $('.clients-slider').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        dotsClass:'clients-slider__dots',
    })
    
    $('.header-nav__burger').click (function(){
        if ($('.header-menu').css('display')=='none'){
            $('.header-menu').show(600).addClass('d-flex');
            $('.fa-bars').hide();
            $('.fa-close').show();
            // $(this).addClass('fixed');
        }
        else{
            $('.header-menu').hide(200).removeClass('d-flex');
            $('.fa-bars').show();
            $('.fa-close').hide();
            // $(this).removeClass('fixed');
        }
       
    })

});