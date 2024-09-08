import React from 'react';
import waves from '../../assets/images/waves.svg'


const Waves = () => (
    <div className="pr-[70px] absolute top-0 right-0 z-0 xs:hidden sm:hidden">
        <img src={waves} alt="Two gray waves"/>
  </div>
);

export default Waves;