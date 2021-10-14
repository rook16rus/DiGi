import './sass/normalize.css';
import './sass/style.scss';
import '../libs/slick/slick.css'
import '../libs/slick/slick.min'
import './images/next-arrow.svg'
import './images/prev-arrow.svg'
import $ from 'jquery';

$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="next-arrow.svg" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="prev-arrow.svg" alt="prev arrow"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});