import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, introduction, description }) => {

    


  return (
    <>
        <div className='flex flex-col'>
            <h1 className='text-white font-bebas font-normal text-[25px]'>{title}</h1>
            <p>{introduction}</p>
            <div>
                <Link>
                    <p>Rozwiń</p>
                  
                </Link>
            <p className='hidden'>{description}</p>
            </div>    
        </div>
    </>
  );
};

export default Card;