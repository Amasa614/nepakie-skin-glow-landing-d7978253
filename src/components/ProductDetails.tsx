
import React from 'react';
import { Leaf } from 'lucide-react';

const ProductDetails = () => {
  const ingredients = [
    'Organic Coconut Oil',
    'Shea Butter',
    'Olive Oil',
    'Essential Lavender Oil',
    'Chamomile Extract',
    'Vitamin E',
    'Sea Salt'
  ];

  const benefits = [
    'Gentle cleansing for sensitive skin',
    'Deep moisturizing properties',
    'Natural antibacterial protection',
    'Soothing and calming effect',
    'Long-lasting freshness'
  ];

  const sustainabilityFeatures = [
    { icon: '🌱', label: 'Eco-Friendly' },
    { icon: '🐰', label: 'Cruelty-Free' },
    { icon: '♻️', label: 'Recyclable Packaging' },
    { icon: '🌿', label: 'Organic Certified' }
  ];

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero section with soap image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl text-gray-800 mb-6">Pure Ingredients, Gentle Care</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Every ingredient is carefully selected and sourced ethically to provide the best care for your skin and the environment. Our handcrafted process ensures quality and purity in every bar.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-100 text-green-800 px-6 py-3 rounded-full hover:bg-green-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1556228894-56f71f3c824d?auto=format&fit=crop&w=500&h=500" 
              alt="Artisan soap making process"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl text-gray-800 mb-6 flex items-center gap-3">
              <Leaf className="text-green-600" size={24} />
              Natural Ingredients
            </h3>
            <ul className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl text-gray-800 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl text-gray-800 mb-6">Sustainability</h3>
            <div className="space-y-4">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-600">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="text-xl text-gray-800 mb-6">How to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">1</span>
              </div>
              <p className="text-gray-600">Wet your skin with warm water</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">2</span>
              </div>
              <p className="text-gray-600">Apply gently in circular motions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">3</span>
              </div>
              <p className="text-gray-600">Rinse thoroughly and enjoy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
