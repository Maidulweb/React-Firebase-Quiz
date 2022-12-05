import React from 'react';

const CheckBox = ({className, text, ...props}) => {
    return (
      <>
        <label className={className}>
          <input {...props} /> <span>{text}</span>
        </label>
      </>
    );
};

export default CheckBox;