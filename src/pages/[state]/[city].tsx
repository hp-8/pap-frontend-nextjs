// src/pages/[state]/[city].tsx
"use client";

// Import necessary modules and components
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/app/header/Header';
import RestaurantList from '@/app/restaurantList/restaurantList';
import data from '../../../public/restaurantData.json';

// Define the RestaurantData interface for type-checking restaurant objects
interface RestaurantData {
  state: string;
  city: string;
  name: string;
  description: string;
  images: string[];
  cuisine: string;
}

// CityPage component definition
const CityPage: React.FC = () => {
  // Initialize router for getting query parameters
  const router = useRouter();
  const { state, city } = router.query;

  // Filter restaurants based on the selected state and city
  const restaurantsInCity = data.restaurants.filter(
    (restaurant: RestaurantData) =>
      restaurant.state.toLowerCase() === state?.toString().toLowerCase() &&
      restaurant.city.toLowerCase() === city?.toString().toLowerCase()
  );

  // Generate a meta description based on the number of restaurants found
  const metaDescription = `Discover the best restaurants in ${city}, ${state}. Explore various cuisines and enjoy the best dining experience in ${city}.`;

  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Restaurants in ${city}, ${state}`,
    "itemListElement": restaurantsInCity.map((restaurant, index) => ({
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
        <title>Restaurants in {city}, {state}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`restaurants, ${city}, ${state}, dining, food, cuisine`} />
        <meta property="og:title" content={`Restaurants in ${city}, ${state}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourwebsite.com/${state}/${city}`} />
        <meta property="og:image" content={restaurantsInCity[0]?.images[0] || '/default-image.jpg'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      {/* Header component */}
      <Header />
      <main>
        {/* Main content with list of restaurants */}
        <h1>Restaurants in {city}, {state}</h1>
        <RestaurantList restaurants={restaurantsInCity} />
      </main>
    </div>
  );
};

export default CityPage;
