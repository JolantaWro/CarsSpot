import React, { useState } from 'react';
import SliderGallery from './SliderGallery';
import { passengerCars, vans } from '../../config/galleryData'
import Container from '../ui/container';

const Gallery = () => {
    const [galleryData, setGalleryData] = useState(passengerCars);
    const [activeCategory, setActiveCategory] = useState('passengerCars');

    const showPassengerCars = () => {
        setGalleryData(passengerCars);
        setActiveCategory('passengerCars');
      };

      const showVans = () => {
        setGalleryData(vans);
        setActiveCategory('vans');
      };

    return (
    <section id="gallery" className='pt-[285px] pb-28 xs:px-2 sm:px-2'>
        <Container className='justify-start max-w-[1264px] 2xl:w-full'>
            <div className='flex flex-col justify-start col-span-12 xs:col-span-4 sm:col-span-8 md:px-2'>
                <h1 className='font-roboto font-normal text-[21px] leading-[32px] text-cobalt'>Prezentacja firmy</h1>
                <h2 className='font-bebas font-normal text-[40px] uppercase leading-[48px]'>Zobacz naszą galerię zdjęć</h2>
                <div className='flex gap-x-12 xs:gap-4 xs:justify-start pt-6'>
                    <button 
                        className={`text-black font-roboto text-base font-normal leading-6 tracking-negative-2 cursor-pointer ${
                            activeCategory === 'passengerCars'
                            ? 'text-cobalt font-semibold underline underline-offset-4'
                            : 'text-black hover:font-semibold hover:underline hover:underline-offset-4'
                        }`}
                        onClick={showPassengerCars}
                        >
                        Samochody osobowe
                    </button>
                    <button 
                        className={`text-black font-roboto text-base font-normal leading-6 tracking-negative-2 cursor-pointer ${
                            activeCategory === 'vans'
                            ? 'text-cobalt font-semibold underline underline-offset-4'
                            : 'text-black hover:font-semibold hover:underline hover:underline-offset-4'
                        }`}
                        onClick={showVans}
                        >
                        Samochody dostawcze
                        </button>
                </div>
            </div>
        </Container>
        <div>
            <SliderGallery data={galleryData} />
        </div>
    </section>
)};

export default Gallery;