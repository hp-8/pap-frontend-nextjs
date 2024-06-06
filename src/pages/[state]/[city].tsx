"use client"
// src/pages/[state]/[city].tsx

import React from 'react';
import { useRouter } from 'next/router';
import data from '../../../public/restaurantData.json';
import Head from 'next/head';


interface RestaurantData {
  state: string;
  city: string;
  name: string;
}

const CityPage: React.FC = () => {
  const router = useRouter();
  const { state, city } = router.query;

  // Filter restaurants based on the selected state and city
  const restaurantsInCity = data.restaurants.filter(
    (restaurant: RestaurantData) =>
      restaurant.state.toLowerCase() === state?.toString().toLowerCase() &&
      restaurant.city.toLowerCase() === city?.toString().toLowerCase()
  );

  return (
      <div>
        <Head>
        <title>Restaurants in {city}</title>

        </Head>
      <h1>Restaurants in {city}, {state}</h1>
      <ul>
        {restaurantsInCity.map((restaurant: RestaurantData) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityPage;
