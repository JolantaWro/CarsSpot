import React from 'react';
import logo from '../../assets/images/logo.svg'
import HeaderNavigation from './HeaderNavigation';
import HeaderMobile from './HeaderMobile';
import Button from '../ui/button'
import Container from '../ui/container'


const Header = () => (
    <header className='py-4 gap-x-[10px]'>
        <Container>
            <div className='flex justify-start col-span-3 md:pl-6'>
                <img src={logo} alt="CarsSpot logo company" />
            </div>
            <div className='flex justify-center col-span-6 xs:achidden sm:hidden'>
                <HeaderNavigation />
            </div>
            <div className='flex justify-end col-span-3 xs:hidden sm:hidden md:pr-4'>
                <Button>Zadzwoń do nas</Button>
            </div>
            <div className='hidden xs:block xs:col-span-4 sm:block sm:col-span-8'>
                <HeaderMobile />
            </div>
        </Container>
    </header>
);

export default Header;