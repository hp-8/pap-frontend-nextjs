"use client"

import React from 'react';
import { useRouter } from 'next/router';
import data from '../../public/restaurantData.json'
import Head from 'next/head';

interface RestaurantData {
  state: string;
  city: string;
  name: string;
}

const StatePage: React.FC = () => {
  const router = useRouter();
  const { state } = router.query;

  // Filter restaurants based on the selected state
  const restaurantsInState = data.restaurants.filter((restaurant: RestaurantData) =>
    restaurant.state.toLowerCase() === state?.toString().toLowerCase()
  );

  return (
    <div>
      <Head>  
        <title>Restaurants in {state}</title>
      </Head>
      <h1>Restaurants in {state}</h1>
      <ul>
        {restaurantsInState.map((restaurant: RestaurantData) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatePage;