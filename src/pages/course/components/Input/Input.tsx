import * as React from 'react';

const Input = (props: any): JSX.Element => {
  const { type, name, placeholder, setValue, value } = props;
 
  return (
    <>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={(event) => {
          if (value !== undefined) {
            setValue(!value);
          } else {
            setValue(event.target.value);
          }
        }}
      ></input>
    </>
  );
};

export default Input;
