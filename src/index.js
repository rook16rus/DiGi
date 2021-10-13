import './sass/normalize.css';
import './sass/style.scss';
import '../libs/slick/slick.css'
import '../libs/slick/slick.min'
import $ from 'jquery';

$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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