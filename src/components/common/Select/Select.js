import React, { useState } from "react";
import useStyles from "./styles";
import capitalizeFirstLetter from "../../../utils/capitalizeFirstLetter";

const Select = ({ options, value, onChange }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    toggleDropdown();
  };

  return (
    <div className={classes.selectContainer}>
      <div className={classes.select} onClick={toggleDropdown}>
        <div>{capitalizeFirstLetter(value)}</div>
        <div className={classes.arrow}>˅</div>
      </div>
      {isOpen && (
        <div className={classes.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={classes.option}
              onClick={() => handleChange(option.value)}
            >
              {capitalizeFirstLetter(option.label)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
