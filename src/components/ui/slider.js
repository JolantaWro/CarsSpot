import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const SliderComponent = ({ settings, children }) => {
    const defaultSettings = {
        dots: true, 
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        ...settings,
      };
    return(
        <Slider  {...defaultSettings}>{children}</Slider>
    )
}

export default SliderComponent;