import React from 'react';
import './styles.css'

function Textarea({ type, name, placeholder, handleOnChange, value, text }) {
    return (
        <div className='form_control'>
            <label htmlFor={name} className='mb-1'>{text}</label>
            <textarea
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}  
                value={value}
                className="form-control"
            />
        </div>
    );
}

export default Textarea;
