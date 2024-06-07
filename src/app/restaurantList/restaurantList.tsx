// components/RestaurantList.tsx
import React from 'react';
import Card from '../card/card';
import styles from './index.module.css';

interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className={styles.restaurantList}>
      {restaurants.map((restaurant, index) => (
        <Card key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
