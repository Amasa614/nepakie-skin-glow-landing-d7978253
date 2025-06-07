import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I use NEPAKIE Papaya Brightening Bath Gel?",
      answer: "For best results, use NEPAKIE during your shower or bath routine. Apply a generous amount to wet skin, gently massage in circular motions to create a rich lather, then rinse thoroughly with warm water. Use daily for optimal skin brightening benefits. Avoid contact with eyes."
    },
    {
      question: "What does brightening mean?",
      answer: "Brightening works by gently exfoliating dead skin cells and promoting natural cell turnover to reveal your skin's natural radiance - it enhances your existing skin tone. NEPAKIE uses natural papaya enzymes to brighten your skin safely without harsh bleaching chemicals."
    },
    {
      question: "How often should I use NEPAKIE?",
      answer: "NEPAKIE is gentle enough for daily use. For most people, using it once daily during your regular bathing routine will provide optimal results. If you have sensitive skin, start with every other day and gradually increase to daily use as your skin adjusts."
    },
    {
      question: "Is NEPAKIE safe for all skin types?",
      answer: "Yes, NEPAKIE is formulated with natural ingredients and is suitable for all skin types, including sensitive skin. The papaya enzymes are gentle yet effective. However, if you have known allergies to papaya or any listed ingredients, perform a patch test before full use."
    },
    {
      question: "Can I use NEPAKIE on my face?",
      answer: "Yes! NEPAKIE can be used on your face and all body parts. Our gentle papaya formula is safe for facial use and works effectively on all areas of your body to promote natural brightening and radiance. Always avoid the eye area when using any skincare products."
    },
    {
      question: "What makes NEPAKIE different from other brightening products?",
      answer: "NEPAKIE stands out because it uses natural papaya enzymes instead of harsh chemicals. Papaya contains natural alpha-hydroxy acids and vitamin C that gently exfoliate and brighten skin while providing nourishment. It's organic, eco-friendly, and works with your skin's natural processes rather than against them."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about using NEPAKIE for naturally radiant skin
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you achieve your best skin naturally.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:+233264814013" 
              className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              Call Us: +233-264814013
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 