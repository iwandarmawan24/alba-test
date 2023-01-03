/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { string, func, oneOf } from 'prop-types';

const InputForm = ({
  label, type, name, onChange, value, placeholder, onErrorHandler,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, []);

  const handleError = () => {
    if (inputValue !== '' && type === 'email') {
      const emailPattern = /\S+@\S+\.\S+/;
      if (emailPattern.test(inputValue)) {
        setError(false);
        onErrorHandler(false);
      } else {
        setError(true);
        onErrorHandler(true);
      }
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
    handleError();
  };

  return (
        <div className="mb-2">
            <label
              for={type}
              className="block text-sm font-semibold text-gray-800"
            >
                {label}
            </label>
            <input
              name={name}
              type={type}
              className="block w-full px-4 py-2 mt-2 text-black bg-white
              border rounded-md focus:border-yellow-400 focus:ring-purple-300
               focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              value={inputValue}
              placeholder={placeholder}
            />
            {
                error ? <p className="text-sm text-[#Be2542]">not a valid email !</p>
                  : ''
            }
        </div>
  );
};

InputForm.propTypes = {
  label: string,
  type: oneOf(['email', 'password', 'text']),
  name: string.isRequired,
  onChange: func,
  value: string,
  placeholder: string,
  onErrorHandler: func,

};
InputForm.defaultProps = {
  label: 'Label',
  type: 'text',
  onChange: () => { },
  value: '',
  placeholder: '',
  onErrorHandler: () => {},
};
export default InputForm;
