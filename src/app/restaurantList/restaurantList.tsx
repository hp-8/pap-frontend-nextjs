// components/RestaurantList.tsx

// Import necessary modules and components
import React from 'react';
import Card from '../card/card';
import styles from './index.module.css';

// Define the Restaurant interface for type-checking restaurant objects
interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

// Define the RestaurantListProps interface for type-checking the props of the RestaurantList component
interface RestaurantListProps {
  restaurants: Restaurant[];
}

// RestaurantList component definition
const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className={styles.restaurantList}>
      {/* Map through the restaurants array and render a Card component for each restaurant */}
      {restaurants.map((restaurant, index) => (
        <Card key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
