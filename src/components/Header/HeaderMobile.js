import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import Button from '../ui/button'

const HeaderMobile = () => {
    return (
        <nav className='py-10'>
            <ul className="flex gap-x-6 justify-center items-center ">
                <li>
                    <Link smooth to="#galery" className="font-robotoFlex text-base font-medium leading-6 transform transition-transform hover:scale-105 hover:underline hover:underline-offset-4 hover:text-cobalt">
                        Galeria zdjęć
                    </Link>
                </li>
                <li>
                    <Link smooth to="#fqa" className="font-robotoFlex text-base font-medium leading-6 transform transition-transform hover:scale-105 hover:underline hover:underline-offset-4 hover:text-cobalt">
                        FaQ
                    </Link>
                </li>
                <li>
                    <Button>Zadzwoń do nas</Button>
                </li>
            </ul>
        </nav>

    )
}
  
export default HeaderMobile;  