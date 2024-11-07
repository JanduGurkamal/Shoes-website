import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Step into Style with Confidence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our latest collection of premium footwear for every occasion
            </p>
            <div className="flex space-x-4">
              <Link
                to="/men"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Shop Men
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/women"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}