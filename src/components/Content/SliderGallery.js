import React from 'react';
import SliderComponent from '../ui/slider';
import { passengerCars } from '../../config/galleryData'
import vans from '../../config/galleryData'


const SliderGallery = () => {
    const sliderSettings = {
        slidesToShow: 3, 
        centerMode: true,
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: false
            },
          },
        ],
      };
  return (
    <div className="pt-20 pl-8 xs:px-2 sm:pl-0 md:pl-2 lg:pl-2 xl:pl-20">
      <SliderComponent settings={sliderSettings}>
        {passengerCars.map((image, index) => (
             <div
             key={image.id}
             className="flex pr-16 xs:pr-0 sm:pr-0 md:pr-2 lg:pr-2" 
             style={{ width: '600px', height: '446px' }} 
           >
             <img
               src={image.image}
               alt={image.alt}
               className="object-cover"
               style={{ width: '600px', height: '446px' }} 
             />
           </div>
           
        ))}
      </SliderComponent>
    </div>
  );
};

export default SliderGallery;