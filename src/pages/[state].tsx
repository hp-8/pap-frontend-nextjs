// pages/[state].tsx
"use client";

import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/app/header/Header';
import RestaurantList from '@/app/restaurantList/restaurantList';
import data from '../../public/restaurantData.json';

interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

const StatePage: React.FC = () => {
  const router = useRouter();
  const { state } = router.query;

  // Filter restaurants based on the selected state
  const restaurantsInState = data.restaurants.filter(
    (restaurant: Restaurant) => restaurant.state.toLowerCase() === state?.toString().toLowerCase()
  );

  return (
    <div>
      <Head>
        <title>Restaurants in {state}</title>
      </Head>
      <Header />
      <h1>Restaurants in {state}</h1>
      <RestaurantList restaurants={restaurantsInState} />
    </div>
  );
};

export default StatePage;
