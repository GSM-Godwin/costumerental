"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Costume = {
  id: number;
  name: string;
  theme: string;
  image: string;
  description: string;
  price: string;
  quantity: number;
  sizes: string[];
  accessories: string[];
  themes: string[];
  colors: string[];
  details: string;
};

export default function CostumeDetails({ costume }: { costume: Costume }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full">
                <Image
                  src={costume.image}
                  alt={costume.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{costume.name}</h1>
              <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-6">{costume.price}</p>
              
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">{costume.details}</p>
                </div>

                {/* Available Quantity */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Available Quantity</h2>
                  <p className="text-gray-600 dark:text-gray-300">{costume.quantity} units available</p>
                </div>

                {/* Sizes */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Available Sizes</h2>
                  <div className="flex gap-2">
                    {costume.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeClick(size)}
                        className={`px-4 py-2 rounded-full transition-all duration-200 ${
                          selectedSize === size
                            ? 'bg-purple-600 text-white shadow-md scale-105'
                            : selectedSize
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 opacity-50'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accessories */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Included Accessories</h2>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {costume.accessories.map((accessory) => (
                      <li key={accessory}>{accessory}</li>
                    ))}
                  </ul>
                </div>

                {/* Themes */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Themes</h2>
                  <div className="flex flex-wrap gap-2">
                    {costume.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Colors</h2>
                  <div className="flex gap-2">
                    {costume.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorClick(color)}
                        className={`px-4 py-2 rounded-full transition-all duration-200 ${
                          selectedColor === color
                            ? 'bg-purple-600 text-white shadow-md scale-105'
                            : selectedColor
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 opacity-50'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedSize && selectedColor
                      ? 'bg-purple-600 text-white hover:bg-purple-700 dark:hover:bg-purple-500'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!selectedSize || !selectedColor}
                >
                  {selectedSize && selectedColor 
                    ? `Book Now - ${selectedSize}, ${selectedColor}`
                    : 'Select Size and Color to Book'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 