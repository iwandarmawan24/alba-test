import React from 'react';
import { string, func, bool } from 'prop-types';

const Button = ({
  text, onClick, className, disabled,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} 
      text-black font-bold text-xsm
      py-2 p-4 rounded-full ${disabled ? 'bg-yellow-100 text-grey-300 ' : 'bg-yellow-400 cursor-pointer'}  min-w-[150px]`}
    disabled={disabled}
  >
    {text}
  </button>
);
Button.propTypes = {
  text: string,
  onClick: func,
  className: string,
  disabled: bool,
};

Button.defaultProps = {
  text: 'Button',
  onClick: () => { },
  className: '',
  disabled: false,
};

export default Button;
