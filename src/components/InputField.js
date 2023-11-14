import React from "react";
import "../css/input-field.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMobileAlt, faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const InputField = ({ label, type, value, onChange, icon }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "phone":
        return <FontAwesomeIcon icon={faPhone} />;
      case "mobile":
        return <FontAwesomeIcon icon={faMobileAlt} />;
      case "dollar":
        return <FontAwesomeIcon icon={faDollarSign} />;
      case "clock":
        return <FontAwesomeIcon icon={faClock} />;
      default:
        return null;
    }
  };
  return (
    <div className="input-field">
      <label>
        {getIcon(icon)} {label}
      </label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
