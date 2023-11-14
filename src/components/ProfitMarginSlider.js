import React from "react";

const ProfitMarginSlider = ({ value, onChange }) => {
  return (
    <div>
      <label>Profit Margin: {value}% </label>
      <input type="range" min="0" max="100" value={value} onChange={onChange} />
    </div>
  );
};

export default ProfitMarginSlider;
