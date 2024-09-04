import React from 'react';
import logo1 from '../../assets/images/logo1.svg'


const Logo = () => (
    <div className='flex gap-x-2'>
        <div className='h-[28px] w-[25px]'>
            <img src={logo1} alt="CarsSpot logo 1"/>    
        </div>
        <h1 className='text-black text-2xl font-black font-roboto'><span className='text-cobalt'>Cars</span>Spot</h1>
    </div>
);

export default Logo;