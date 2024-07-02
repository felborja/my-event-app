import React from "react";

function InputField({ label, type = "text", value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;
