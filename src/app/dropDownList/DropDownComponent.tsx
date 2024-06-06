"use client"

// DropList.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DropdownList from '../utils/DropDownUtil';
import styles from './index.module.css';
import data from '../../../public/restaurantData.json';

interface RestaurantData {
  state: string;
  city: string;
}

const DropList: React.FC = () => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const uniqueStatesAndCities: Record<string, string[]> = {};
  data.restaurants.forEach((restaurant: RestaurantData) => {
    uniqueStatesAndCities[restaurant.state] = uniqueStatesAndCities[restaurant.state] || [];
    uniqueStatesAndCities[restaurant.state].push(restaurant.city);
  });

  const states = Object.keys(uniqueStatesAndCities);
  const cities = selectedState ? Array.from(new Set(uniqueStatesAndCities[selectedState])) : [];

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setSelectedCity(null); // Reset city when state changes
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleFindButtonClick = () => {
    if (selectedState) {
      // If state is selected, redirect to the selected state and city route (if city is selected)
      if (selectedCity) {
        router.push(`/${selectedState.toLowerCase()}/${selectedCity.toLowerCase()}`);
      } else {
        router.push(`/${selectedState.toLowerCase()}`);
      }
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <DropdownList 
        label="Select State:" 
        options={states} 
        onSelect={handleStateSelect} 
      />

      <DropdownList 
        label="Select City:" 
        options={cities} 
        onSelect={handleCitySelect} 
      />

      <button onClick={handleFindButtonClick}>Find</button>
    </div>
  );
};

export default DropList;
