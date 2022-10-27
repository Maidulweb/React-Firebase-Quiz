import React from 'react';

const CheckBox = ({text, ...props}) => {
    return (
      <>
        <label>
          <input {...props} />
          <span>{text}</span>
        </label>
      </>
    );
};

export default CheckBox;