"use client"

// Import necessary modules and components
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DropdownList from '../utils/DropDownUtil';
import styles from './index.module.css';
import data from '../../../public/restaurantData.json';

// Define the RestaurantData interface for type-checking restaurant objects
interface RestaurantData {
  state: string;
  city: string;
}

// DropList component for selecting state and city, then navigating to the corresponding page
const DropList: React.FC = () => {
  // Initialize router for navigation
  const router = useRouter();

  // Define state for selected state and city
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Create a unique list of states and cities from the restaurant data
  const uniqueStatesAndCities: Record<string, string[]> = {};
  data.restaurants.forEach((restaurant: RestaurantData) => {
    uniqueStatesAndCities[restaurant.state] = uniqueStatesAndCities[restaurant.state] || [];
    uniqueStatesAndCities[restaurant.state].push(restaurant.city);
  });

  // Get the list of states and cities based on the selected state
  const states = Object.keys(uniqueStatesAndCities);
  const cities = selectedState ? Array.from(new Set(uniqueStatesAndCities[selectedState])) : [];

  // Handle state selection and reset city when state changes
  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setSelectedCity(null); // Reset city when state changes
  };

  // Handle city selection
  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  // Handle "Find" button click to navigate to the appropriate route
  const handleFindButtonClick = () => {
    if (selectedState) {
      // Redirect to the state and city route if both are selected, otherwise just the state
      if (selectedCity) {
        router.push(`/${selectedState.toLowerCase()}/${selectedCity.toLowerCase()}`);
      } else {
        router.push(`/${selectedState.toLowerCase()}`);
      }
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <h1>Find the restaurants that best suits you!</h1>
      <div className={styles.dropMenu}>
        {/* Dropdown for selecting state */}
        <DropdownList 
          label="Select State:" 
          options={states} 
          onSelect={handleStateSelect} 
        />

        {/* Dropdown for selecting city, dependent on selected state */}
        <DropdownList 
          label="Select City:" 
          options={cities} 
          onSelect={handleCitySelect} 
        />

        {/* Button to trigger the navigation based on selected state and city */}
        <button className={styles.btn} onClick={handleFindButtonClick}>
          Find
        </button>
      </div>
    </div>
  );
};

export default DropList;
