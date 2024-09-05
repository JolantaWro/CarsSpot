import React from 'react';
import SliderComponent from '../ui/slider';
import { passengerCars } from '../../config/galleryData'
import vans from '../../config/galleryData'


const SliderGallery = () => {
    const sliderSettings = {
        slidesToShow: 2, 
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1, 
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
             
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            
            },
          },
        ],
      };
  return (
    <div className="pt-10 max-w-[1440px] mx-auto">
      <SliderComponent settings={sliderSettings}>
        {passengerCars.map((image, index) => (
             <div
             key={image.id}
             className="flex justify-center" 
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