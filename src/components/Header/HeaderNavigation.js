import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

const HeaderNavigation = () => {
    return (
        <nav>
            <ul className="flex gap-x-6">
                <li>
                    <Link smooth to="#gallery" className="font-robotoFlex text-base font-normal leading-6 transform transition-transform hover:scale-105 hover:underline hover:underline-offset-4">
                        Galeria zdjęć
                    </Link>
                </li>
                <li>
                    <Link smooth to="#faq" className="font-robotoFlex text-base font-normal leading-6 transform transition-transform hover:scale-105 hover:underline hover:underline-offset-4">
                        FaQ
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
  
export default HeaderNavigation;  