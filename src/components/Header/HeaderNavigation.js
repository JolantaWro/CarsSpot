import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

const HeaderNavigation = () => {
    return (
        <nav>
            <ul className="flex gap-x-6">
                <li>
                    <Link smooth to="#galery" className="font-robotoFlex text-base font-normal leading-6">
                        Galeria zdjęć
                    </Link>
                </li>
                <li>
                    <Link smooth to="#fqa" className="font-robotoFlex text-base font-normal leading-6">
                        FaQ
                    </Link>
                </li>
            </ul>
        </nav>

    )
}
  
  export default HeaderNavigation;  