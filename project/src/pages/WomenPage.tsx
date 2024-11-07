import React from 'react';
import Navbar from '../components/Navbar';
import CollectionPage from '../components/CollectionPage';

const womenProducts = [
  {
    name: "Nike Air Zoom Pegasus",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1618224647185-05d8f69ff1c1?auto=format&fit=crop&q=80",
    colors: 5,
    category: "running",
    gender: "women"
  },
  {
    name: "Adidas Cloudfoam",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&q=80",
    colors: 4,
    category: "casual",
    gender: "women"
  },
  {
    name: "Brooks Ghost",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
    colors: 3,
    category: "running",
    gender: "women"
  },
  {
    name: "Leather Pumps",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80",
    colors: 2,
    category: "formal",
    gender: "women"
  },
  {
    name: "Nike Free RN",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
    colors: 4,
    category: "athletic",
    gender: "women"
  },
  {
    name: "Puma Cali Sport",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1592317747646-0d9c29e39d64?auto=format&fit=crop&q=80",
    colors: 3,
    category: "casual",
    gender: "women"
  }
];

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CollectionPage gender="women" products={womenProducts} />
    </div>
  );
}