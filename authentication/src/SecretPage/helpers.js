import React from 'react';

export const validate = values => {
    const errors = {}
    if (!values.fullname) {
      errors.fullname = 'Required'
    } else if (values.fullname.length > 15) {
      errors.fullname = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
  }
  
  export const warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }
  
  export const renderField = ({
    name,
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched &&
          ((error && <small className="form-text text-danger">{error}</small>) ||
            (warning && <small className="form-text text-warning">{warning}</small>))}
      </div>
    </div>
  )