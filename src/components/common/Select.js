import React from "react";

const Select = (props) => {
  const { label, data, ...input } = props;
  return (
    <div>
      <label className="input__label">{label}</label>
      <select {...input}>
        {data.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
