import React from "react";

const InputText = (props) => {
  const { label, data, ...input } = props;
  return (
    <div>
      <label className="input__label">{label}</label>
      <input {...input} />
    </div>
  );
};

export default InputText;
