import React from "react";

function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-[#5664f5] text-white rounded hover:bg-[#2e3de2]"
    >
      {text}
    </button>
  );
}

export default Button;
