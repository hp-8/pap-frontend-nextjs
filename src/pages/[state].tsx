// pages/[state].tsx
"use client";

// Import necessary modules and components
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/app/header/Header';
import RestaurantList from '@/app/restaurantList/restaurantList';
import data from '../../public/restaurantData.json';

// Define the Restaurant interface for type-checking restaurant objects
interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

// StatePage component definition
const StatePage: React.FC = () => {
  // Initialize router for getting query parameters
  const router = useRouter();
  const { state } = router.query;

  // Filter restaurants based on the selected state
  const restaurantsInState = data.restaurants.filter(
    (restaurant: Restaurant) => restaurant.state.toLowerCase() === state?.toString().toLowerCase()
  );

  // Generate a meta description based on the number of restaurants found
  const metaDescription = `Discover the best restaurants in ${state}. Explore various cuisines and enjoy the best dining experience in ${state}.`;

  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Restaurants in ${state}`,
    "itemListElement": restaurantsInState.map((restaurant, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Restaurant",
        "name": restaurant.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": restaurant.city,
          "addressRegion": restaurant.state,
        },
        "description": restaurant.description,
        "servesCuisine": restaurant.cuisine,
        "image": restaurant.images,
      },
    })),
  };

  return (
    <div>
      <Head>
        {/* SEO metadata */}
        <title>Restaurants in {state}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`restaurants, ${state}, dining, food, cuisine`} />
        <meta property="og:title" content={`Restaurants in ${state}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourwebsite.com/${state}`} />
        <meta property="og:image" content={restaurantsInState[0]?.images[0] || '/default-image.jpg'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      {/* Header component */}
      <Header />
      <main>
        {/* Main content with list of restaurants */}
        <h1>Restaurants in {state}</h1>
        <RestaurantList restaurants={restaurantsInState} />
      </main>
    </div>
  );
};

export default StatePage;
