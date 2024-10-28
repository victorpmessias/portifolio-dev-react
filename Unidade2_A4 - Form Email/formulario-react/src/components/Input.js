import React from 'react';
import './Input.css'
import InputErrorBox from './InputErrorBox';

const Input = ({ name, type="text", label, error, ...props }, ) => {

  return (
    <div className='inputContainer'>
      <label className='inputLabel' htmlFor={name}>{label}:</label>
      <input
        className='inputField'
        id={name}
        type={type}
        {...props}
      />
      <InputErrorBox error={error}/>
    </div>
  );
}

export default Input;