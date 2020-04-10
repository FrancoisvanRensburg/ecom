import React from 'react';

import './form-input.styles.scss';

// Functional component, because we don't want any state on the component
const FormInput = ({ handlChange, label, ...otherProps }) => (
  <div className='group'>
    <input
      className='form-input'
      onChange={handlChange}
      {...otherProps}
      type='text'
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
