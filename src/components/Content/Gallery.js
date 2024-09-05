import React from 'react';
import SliderGallery from './SliderGallery';


const Gallery = () => (
    <div className='pt-[300px] pb-20 xs:px-2'>
        <div className='grid grid-cols-12 justify-start mx-auto gap-6 xs:grid-cols-4 sm:grid-cols-8 max-w-[1264px] 2xl:w-full'>
            <div className='flex flex-col justify-start col-span-12 gap-6 xs:col-span-4 sm:col-span-8 md:px-2'>
                <p className='font-roboto font-normal text-[21px] leading-[32px] text-cobalt'>Prezentacja firmy</p>
                <h1 className='font-bebas font-normal text-[40px] uppercase leading-[48px]'>Zobacz naszą galerię zdjęć</h1>
                <div className='flex gap-12 xs:gap-4 xs:justify-start '>
                    <p className='font-roboto text-base font-normal leading-6 tracking-negative-2 hover:text-cobalt hover:font-semibold'>Samochody osobowe</p>
                    <p className='font-roboto text-base font-normal leading-6 tracking-negative-2 hover:text-cobalt hover:font-semibold'>Samochody dostawcze</p>
                </div>
            </div>

        </div>
        {/* <div className='mx-auto max-w-[1440px]'> */}
        <div className=''>
            <SliderGallery />
        </div>
    </div>
);

export default Gallery;