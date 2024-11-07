import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    name: "Nike Air Max 270",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    colors: 4,
  },
  {
    name: "Adidas Ultraboost",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80",
    colors: 3,
  },
  {
    name: "Nike Air Force 1",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
    colors: 5,
  },
  {
    name: "New Balance 574",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
    colors: 2,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="mt-2 text-gray-600">
                Our most popular shoes this season
              </p>
            </div>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="rounded-2xl overflow-hidden">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&q=80"
                alt="Collection"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/20 flex items-center">
                <div className="max-w-xl ml-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    New Summer Collection
                  </h2>
                  <p className="text-gray-200 mb-6">
                    Light, breathable, and stylish. Perfect for the summer
                    season.
                  </p>
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                About Us
              </h3>
              <p className="text-sm">
                Premium footwear for every occasion. Quality, comfort, and style
                combined.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Collections
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Customer Service
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Newsletter
              </h3>
              <p className="text-sm mb-4">
                Subscribe to get special offers and updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 Nexa Shoes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
