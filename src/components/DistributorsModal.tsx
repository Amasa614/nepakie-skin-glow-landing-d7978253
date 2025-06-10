import React from 'react';
import { X, Phone, MapPin, ExternalLink } from 'lucide-react';

interface DistributorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DistributorsModal: React.FC<DistributorsModalProps> = ({ isOpen, onClose }) => {
  const distributors = [
    {
      name: "Aseda Wholesale & Retail",
      location: "Spintex Road, Accra",
      phone: "+233 257 630 001",
      mapLink: "https://maps.google.com/?q=Aseda+Wholesale+Retail+Spintex+Road+Accra+Ghana"
    },
    {
      name: "First Choice Hair & Beauty",
      location: "Spintex Road, Adjacent Zenith Bank, Accra",
      phone: "+233 244 374 894",
      mapLink: "https://maps.google.com/?q=First+Choice+Hair+Beauty+Spintex+Road+Adjacent+Zenith+Bank+Accra+Ghana"
    },
    {
      name: "NN Ventures",
      location: "Farm Vivian Junction, Ashaiman Road",
      phone: "+233 245 261 620",
      mapLink: "https://maps.google.com/?q=NN+Ventures+Farm+Vivian+Junction+Ashaiman+Road+Ghana"
    },
    {
      name: "Rossy Shop",
      location: "Dansoman, Accra",
      phone: "+233 243 251 953",
      mapLink: "https://maps.google.com/?q=Rossy+Shop+Dansoman+Accra+Ghana"
    },
    {
      name: "Madam Akua",
      location: "Koforidua, Eastern Region",
      phone: "+233 243 162 780",
      mapLink: "https://maps.google.com/?q=Madam+Akua+Koforidua+Eastern+Region+Ghana"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">NEPAKIE Distributors</h2>
              <p className="text-gray-600 mt-1">Find NEPAKIE products at these authorized retailers across Ghana</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {distributors.map((distributor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{distributor.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-orange-600 flex-shrink-0" />
                    <span className="text-gray-600">{distributor.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-green-600 flex-shrink-0" />
                    <a 
                      href={`tel:${distributor.phone}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      {distributor.phone}
                    </a>
                  </div>
                  
                  <div className="pt-3">
                    <a
                      href={distributor.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                    >
                      <MapPin size={16} />
                      View on Google Maps
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-orange-50 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Can't find a distributor near you?</h3>
            <p className="text-gray-600 mb-4">Contact us directly and we'll help you get NEPAKIE delivered to your location.</p>
            <div className="flex justify-center gap-4">
              <a 
                href="tel:+233264814013"
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={16} />
                +233-264814013
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorsModal; 