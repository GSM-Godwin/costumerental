"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Sample costume data - this would come from a database in the real implementation
const costumes = [
  {
    id: 1,
    name: "Medieval Knight",
    theme: "Medieval",
    image: "/costumes/knight.jpg",
    description: "Authentic medieval knight armor with helmet and sword",
    price: "$50/day"
  },
  {
    id: 2,
    name: "Renaissance Noble",
    theme: "Renaissance",
    image: "/costumes/noble.jpg",
    description: "Elegant renaissance noble attire with detailed embroidery",
    price: "$45/day"
  },
  {
    id: 3,
    name: "Victorian Lady",
    theme: "Victorian",
    image: "/costumes/victorian.jpg",
    description: "Classic Victorian era dress with corset and accessories",
    price: "$55/day"
  },
  {
    id: 4,
    name: "Pirate Captain",
    theme: "Pirate",
    image: "/costumes/pirate.jpg",
    description: "Complete pirate captain outfit with hat and accessories",
    price: "$40/day"
  }
];

const themes = ["All", "Medieval", "Renaissance", "Victorian", "Pirate"];

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState("All");

  const filteredCostumes = selectedTheme === "All" 
    ? costumes 
    : costumes.filter(costume => costume.theme === selectedTheme);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-4">Costume Dreams Come True</h1>
          <p className="text-xl mb-8">Rent the perfect costume for your special occasion</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Browse Collection
          </button>
        </div>
      </div>

      {/* Theme Filter */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow whitespace-nowrap ${
                selectedTheme === theme 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* Costume Gallery */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCostumes.map((costume) => (
            <div key={costume.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={costume.image}
                  alt={costume.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={costume.id <= 4}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{costume.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{costume.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">{costume.price}</span>
                  <Link 
                    href={`/costumes/${costume.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Need a Custom Costume?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">We offer bespoke costume design and professional consultancy</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 dark:hover:bg-purple-500 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
