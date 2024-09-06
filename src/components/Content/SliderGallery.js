import React from 'react';
import SliderComponent from '../ui/slider';


const SliderGallery = ({ data }) => {
    const sliderSettings = {
        slidesToShow: 3, 
        centerMode: true,
        dots: true,
        dotsClass: "slick-dots custom-dots",
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
        {data.map((image, index) => (
             <div
             key={image.id}
             className="flex pr-16 xs:pr-0 sm:pr-0 md:pr-2 lg:pr-2 pb-12" 
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
      <style jsx>
        {`
          .slick-dots li {
            width: 10px;   
            height: 10px;
            right: 36px
          }

          .slick-dots li button:before {
            font-size: 10px;
            color: #F1F1F1;
            opacity: 1;
          }
          .slick-dots li button:hover:before,
          .slick-dots li button:focus:before {
            color: #F1F1F1;
            opacity: 1;
          }

          .slick-dots li.slick-active button:before {
            color: #0147FF;
          }
       `}
      </style>
    </div>
  );
};

export default SliderGallery;