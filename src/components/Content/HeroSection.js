import React from 'react';
import mainPhoto from '../../assets/images/main.svg'
import Button from '../ui/button'
import Container from '../ui/container';


const HeroSection = () => (
    <div className='py-[120px] relative xs:py-10 md:py-36'>
        <Container className='justify-start pb-10 gap-12 xs:justify-center xs:pb-10'>
            <div className='flex flex-col gap-10 justify-start col-span-12 xs:gap-y-8 xs:col-span-4 xs:w-full xs:justify-center xs:px-2 sm:col-span-8 sm:w-full sm:justify-center sm:px-8 md:col-span-8 md:px-8 md:w-full'>
                <h1 className='font-bebas font-normal text-[76px] uppercase leading-[83px] tracking-negative-4 xs:text-4xl sm:text-4xl md:text-5xl' >Sprzedajemy samochody <br /> z europy</h1>
                <p className='font-roboto text-base font-normal leading-6'>Kup komfortowy pojazd, aby każda podróż <br />była wyjątkowym przeżyciem.</p>
                <div className='flex gap-x-6'>
                    <Button href="#gallery">Zobacz zdjęcia</Button>
                    <Button secondary >Zadzwoń do nas</Button>
                </div>
            </div>
        </Container>
        <div className="absolute -bottom-[95px] right-0 z-0">
            <img src={mainPhoto} alt="Three black cars" className="object-cover max-w-full h-auto"/>
        </div>
    </div>

);

export default HeroSection;