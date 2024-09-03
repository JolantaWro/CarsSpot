import React from 'react';
import logo from '../../assets/images/logo.svg'
import HeaderNavigation from './HeaderNavigation';
import Button from '../ui/button'
import Container from '../ui/container'


const Header = () => (
    <header className='flex py-4 gap-x-[10px]'>
        <div className='flex mx-auto w-[1200px] justify-between'>
            <div className='flex items-center justify-center'>
                <img src={logo} alt="CarsSpot logo"/> 
            </div>
             
            <div className='flex items-center justify-center'>
                <HeaderNavigation />
            </div>
            <div className='flex items-center justify-center'>
                <Button secondary>Zadzwoń do nas</Button>
            </div>
        </div>
    </header>
);

export default Header;