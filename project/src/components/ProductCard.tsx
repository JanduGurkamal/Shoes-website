import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  colors: number;
  category?: string;
}

export default function ProductCard({ name, price, image, colors }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-lg font-medium text-gray-900">${price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">{colors} colors</p>
        </div>
      </div>
    </div>
  );
}