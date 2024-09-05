import React from 'react';

const Button = ({ children, href, extraStyles, secondary, ...props }) => {

  const buttonStyles = `font-robotoFlex text-[15px] font-semibold leading-[22px] rounded-lg py-3 px-6 h-[47px] ${extraStyles}`;
  const primaryStyles = "bg-transparent text-cobalt border hover:bg-cobalt hover:text-white";
  const secondaryStyles = "bg-cobalt text-gray hover:bg-gray hover:text-cobalt hover:border";

  const buttonClass = secondary ? `${buttonStyles} ${secondaryStyles}` : `${buttonStyles} ${primaryStyles}`;

  return (
    <>
      {
        href ? (
          <a
            href={href}
            target="_blank"
            className={buttonClass}
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        ) : (
          <button className={buttonClass} {...props}>
            {children}
          </button>
        )
      }
    </>
  );
};

export default Button;