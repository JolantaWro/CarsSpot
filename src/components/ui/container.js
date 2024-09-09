import React from 'react';
import clsx from 'clsx';

const Container = ({ children, className })  => {
    return (
        <div
            className={clsx(
                'grid grid-cols-12 xs:grid-cols-4 sm:grid-cols-8 mx-auto items-center max-w-[1200px]',
                className 
            )}
        >
            {children}
        </div>
    )
}

export default Container;