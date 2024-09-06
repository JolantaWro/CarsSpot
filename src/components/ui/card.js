import React, { useState } from 'react';
import arrow from '../../assets/images/arrowDown.svg'

const Card = ({ title, description }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };


  return (
    <>
        <div className='flex flex-col gap-4 text-white font-normal'>
            <h1 className='font-bebas text-[25px] leading-9 tracking-negative-3'>{title}</h1>
            <p className={`font-roboto text-base leading-5 ${!isExpanded ? 'line-clamp-2' : ''}`}>{description}</p>
              <div className='inline-flex items-center gap-[6px] pb-[6px] border-b-[1.5px] w-fit cursor-pointer' onClick={toggleExpanded}>
                  <span className='font-roboto text-sm leading-5'>{isExpanded? 'Zwiń' : 'Rozwiń'}</span>
                  <img src={arrow} alt='Arrow Down' className={`w-[12px] h-[14px] transform ${isExpanded? 'rotate-180' : ''}`}></img>
              </div>   
        </div>
    </>
  );
};

export default Card;