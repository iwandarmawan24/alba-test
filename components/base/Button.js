import React from 'react';
import { string, func } from 'prop-types';

const Button = ({ text, onClick, className }) => {
  return (
    <button type="button" onClick={onClick}
      className={`${className} bg-yellow-400 
      text-black font-semibold 
      py-1 p-4 rounded-full cursor-pointer`}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: string,
  onClick: func,
  className: string
};

Button.defaultProps = {
  text: 'Button',
  onClick: () => { },
  className: ""
};

export default Button;
