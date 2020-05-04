$(document).ready(function () {
    
    $('.about-slider').slick({
        slidesToShow: 4,
        autoplay: true,
        prevArrow: '<button class="about-slider__prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="about-slider__next"><i class="fa fa-angle-right"></i></button>',
        
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

});