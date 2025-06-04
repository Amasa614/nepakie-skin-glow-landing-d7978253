import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    // Fallback reviews in case Google Sheets fails
    {
      name: 'Jeffery Amasa',
      rating: 5,
      text: 'Perfect for my sensitive skin. No irritation and leaves my skin feeling so soft and moisturized.',
      location: 'Accra, Ghana'
    },
    {
      name: 'Winston Sckey',
      rating: 5,
      text: 'Love the natural scent and how gentle it is. My whole family uses it now.',
      location: 'Kumasi, Ghana'
    },
    {
      name: 'Emmanuel Ebo',
      rating: 5,
      text: 'Great quality soap. You can really feel the difference with organic ingredients.',
      location: 'Tema, Ghana'
    }
  ]);

  const [loading, setLoading] = useState(true);

  // Replace 'YOUR_SHEET_ID' with your actual Google Sheet ID
  const SHEET_ID = '11tUTRnRJOIMrFq7OfNwxPUkYwNkyFu3hquWTp-1C1A8';
  const SHEET_NAME = 'Sheet1'; // or whatever you named your sheet tab
  const API_KEY = 'YOUR_GOOGLE_API_KEY'; // We'll set this up

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Using Google Sheets API v4
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        const rows = data.values;
        
        if (rows && rows.length > 1) {
          // Skip header row, map data to review objects
          const fetchedReviews = rows.slice(1).map((row: string[]) => ({
            name: row[0] || 'Anonymous',
            rating: parseInt(row[1]) || 5,
            text: row[2] || '',
            location: row[3] || ''
          })).filter(review => review.text); // Only include reviews with text
          
          if (fetchedReviews.length > 0) {
            setReviews(fetchedReviews);
          }
        }
      } catch (error) {
        console.log('Using fallback reviews');
        // Reviews will stay as default fallback
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have the required credentials
    if (SHEET_ID && API_KEY !== 'YOUR_GOOGLE_API_KEY') {
      fetchReviews();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-gray-600">Loading reviews...</div>
        </div>
      </section>
    );
  }

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
              <div className="text-2xl text-gray-800 font-light">{reviews.length * 167}+</div>
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
