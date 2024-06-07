import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

// Define the Restaurant interface to type-check restaurant objects
interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

// Define the CardProps interface to type-check the props for the Card component
interface CardProps {
  restaurant: Restaurant;
}

// Card component to display restaurant details in a card layout
const Card: React.FC<CardProps> = ({ restaurant }) => {
  // Destructure restaurant properties for easier access
  const { name, state, city, description, images, cuisine } = restaurant;

  return (
    <div className={styles.card}>
      {/* Display the first image of the restaurant */}
      <img src={images[0]} alt={name} className={styles.image} />
      <div className={styles.content}>
        {/* Display the restaurant name */}
        <h2 className={styles.title}>{name}</h2>
        {/* Display the restaurant description */}
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <div className={styles.cuisines}>
            {/* Display the type of cuisine the restaurant serves */}
            <span className={styles.cuisine}>{cuisine}</span>
          </div>
          {/* Link to the detailed view of the restaurant */}
          <Link href={`/${state}/${city}/${encodeURIComponent(name)}`} className={styles.viewButton}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
