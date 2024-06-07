import React from 'react';
import styles from './index.module.css'

interface DropdownListProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  label: string;
  
}

const DropdownList: React.FC<DropdownListProps> = ({ options, onSelect, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <label>{label}</label>
      <select onChange={handleChange}>
        <option value="">Select</option>
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
