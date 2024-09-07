import React from 'react';

const Button = ({ children, href, secondary, ...props }) => {
 
  const buttonStyles = "border font-robotoFlex text-[15px] font-semibold leading-[22px] rounded-lg py-3 px-6 h-[47px] hover:bg-black hover:text-white";
 
  const secondaryStyles = "bg-transparent text-cobalt";
  const primaryStyles = "bg-cobalt text-gray"
  const buttonClass = `${buttonStyles} ${secondary ? secondaryStyles : primaryStyles}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;