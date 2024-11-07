import React from 'react';
import Navbar from '../components/Navbar';
import CollectionPage from '../components/CollectionPage';

const menProducts = [
  {
    name: "Nike Air Max 90",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
    colors: 4,
    category: "running",
    gender: "men"
  },
  {
    name: "Adidas Originals",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80",
    colors: 3,
    category: "casual",
    gender: "men"
  },
  {
    name: "Nike Zoom Fly",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    colors: 2,
    category: "running",
    gender: "men"
  },
  {
    name: "Oxford Dress Shoes",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80",
    colors: 2,
    category: "formal",
    gender: "men"
  },
  {
    name: "Under Armour Charged",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
    colors: 3,
    category: "athletic",
    gender: "men"
  },
  {
    name: "Puma RS-X",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
    colors: 4,
    category: "casual",
    gender: "men"
  }
];

export default function MenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CollectionPage gender="men" products={menProducts} />
    </div>
  );
}