import React from 'react';
import styles from './index.module.css';

// Define the DropdownListProps interface for type-checking the props of the DropdownList component
interface DropdownListProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  label: string;
}

// DropdownList component definition
const DropdownList: React.FC<DropdownListProps> = ({ options, onSelect, label }) => {
  // Handle change event for the select element
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      {/* Label for the dropdown */}
      <label>{label}</label>
      {/* Dropdown select element */}
      <select onChange={handleChange}>
        <option value="">Select</option>
        {/* Map through options array and render an option element for each option */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
