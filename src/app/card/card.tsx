import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

interface Restaurant {
  name: string;
  state: string;
  city: string;
  description: string;
  images: string[];
  cuisine: string;
}

interface CardProps {
  restaurant: Restaurant;
}

const Card: React.FC<CardProps> = ({ restaurant }) => {
  const { name, state, city, description, images, cuisine } = restaurant;

  return (
    <div className={styles.card}>
      <img src={images[0]} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <div className={styles.cuisines}>
            <span className={styles.cuisine}>{cuisine}</span>
          </div>
          <Link href={`/${state}/${city}/${encodeURIComponent(name)}`} className={styles.viewButton}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
