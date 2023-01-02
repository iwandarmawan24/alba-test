import React from 'react';
import { string, func } from 'prop-types';

const Button = ({ text, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} bg-yellow-400 
      text-black font-bold text-xsm
      py-2 p-4 rounded-full cursor-pointer min-w-[150px]`}
  >
    {text}
  </button>
);
Button.propTypes = {
  text: string,
  onClick: func,
  className: string,
};

Button.defaultProps = {
  text: 'Button',
  onClick: () => { },
  className: '',
};

export default Button;
