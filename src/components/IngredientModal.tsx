import React from 'react';
import { X } from 'lucide-react';

interface IngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IngredientModal: React.FC<IngredientModalProps> = ({ isOpen, onClose }) => {
  const ingredients = [
    {
      name: "Water",
      purpose: "Base Solvent",
      description: "The foundation of the formula that dissolves other ingredients and provides hydration to the skin."
    },
    {
      name: "Sodium Laureth Sulfate",
      purpose: "Primary Cleanser",
      description: "A gentle surfactant that creates foam and helps remove dirt, oil, and impurities from the skin without over-drying."
    },
    {
      name: "C14-16 Olefin Sodium Sulfonate",
      purpose: "Co-Surfactant",
      description: "Works alongside the primary cleanser to enhance foaming properties and improve cleaning effectiveness."
    },
    {
      name: "Cocamide-MEA",
      purpose: "Foam Booster & Thickener",
      description: "Derived from coconut oil, it enhances foam quality and adds viscosity to the formula for better application."
    },
    {
      name: "Cocamidopropyl Betaine",
      purpose: "Gentle Cleanser",
      description: "A mild surfactant from coconut oil that provides gentle cleansing while being less irritating than traditional sulfates."
    },
    {
      name: "Sodium Chloride",
      purpose: "Thickening Agent",
      description: "Common salt that helps adjust the product's consistency and thickness for optimal application."
    },
    {
      name: "Glycol Distearate",
      purpose: "Pearlizing Agent",
      description: "Creates the pearlescent, creamy appearance of the product while adding moisturizing properties."
    },
    {
      name: "Citric Acid",
      purpose: "pH Adjuster",
      description: "Natural fruit acid that balances the product's pH level and provides gentle exfoliation benefits."
    },
    {
      name: "Papaya Extract (Phenomelides Sinensis)",
      purpose: "Active Brightening Agent",
      description: "Rich in papain enzyme and papaya acid. Gently exfoliates dead skin cells, brightens skin tone, reduces dark spots, and promotes smooth, radiant skin. Contains vitamins A and C for antioxidant protection."
    },
    {
      name: "DMDM Hydantoin",
      purpose: "Preservative",
      description: "Antimicrobial preservative that prevents bacterial and fungal growth, extending product shelf life and ensuring safety during use."
    },
    {
      name: "Natural Milk Essence",
      purpose: "Moisturizing Agent",
      description: "Provides deep nourishment and hydration to the skin, helping to improve dryness, roughness, and restore skin's silky texture."
    },
    {
      name: "Magnesium Compounds",
      purpose: "Skin Conditioning",
      description: "Mineral compounds that help maintain skin health, support cellular functions, and contribute to overall skin wellness."
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-orange-100 p-6 border-b border-orange-200 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            NEPAKIE Ingredient Guide
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-200 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-gray-600 mb-6 text-center">
            Learn about each ingredient in your NEPAKIE Papaya Brightening Bath Gel and how they work together to brighten and nourish your skin.
          </p>

          <div className="grid gap-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-1/3">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      {ingredient.name}
                    </h3>
                    <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                      {ingredient.purpose}
                    </span>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="text-gray-700 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h3 className="font-semibold text-gray-800 mb-2">Why These Ingredients Work Together</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Each ingredient in NEPAKIE is carefully selected to work synergistically. The gentle cleansers remove impurities without stripping natural oils, while papaya extract provides active brightening benefits. Natural milk essence and other conditioning agents ensure your skin stays hydrated and healthy throughout the cleansing process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal; 