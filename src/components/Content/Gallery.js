import React from 'react';


const Gallery = () => (
    <div className='pt-[220px]'>
        <div className='grid grid-cols-12 justify-start mx-auto gap-6 xs:grid-cols-4 sm:grid-cols-8 max-w-[1200px]'>
            <div className='flex flex-col justify-start col-span-12 gap-6 xs:col-span-4 sm:col-span-8'>
                <p className='font-roboto font-normal text-[21px] leading-[32px] text-cobalt'>Prezentacja firmy</p>
                <h1 className='font-bebas font-normal text-[40px] uppercase leading-[48px]'>Zobacz naszą galerię zdjęć</h1>
                <div className='flex gap-12'>
                    <p className='font-roboto text-base font-normal leading-6 tracking-negative-2 hover:text-cobalt hover:font-semibold'>Samochody osobowe</p>
                    <p className='font-roboto text-base font-normal leading-6 tracking-negative-2 hover:text-cobalt hover:font-semibold'>Samochody dostawcze</p>
                </div>
            </div>
        </div>
    </div>
);

export default Gallery;