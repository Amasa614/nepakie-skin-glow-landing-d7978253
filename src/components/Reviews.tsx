import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Perfect for my sensitive skin. No irritation and leaves my skin feeling so soft and moisturized.',
      location: 'New York'
    },
    {
      name: 'Emma L.',
      rating: 5,
      text: 'Love the natural scent and how gentle it is. My whole family uses it now.',
      location: 'California'
    },
    {
      name: 'Michael R.',
      rating: 5,
      text: 'Great quality soap. You can really feel the difference with organic ingredients.',
      location: 'Texas'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Real experiences from people who love NEPAKIE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-gray-800 font-medium">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl text-gray-800 font-light">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-800 font-light">500+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-800 font-light">98%</div>
              <div className="text-gray-600 text-sm">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
