import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { supabase, type Review, type ReviewInsert } from '@/lib/supabase';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: '',
    location: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Load reviews from Supabase on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setError('');
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews. Please try again later.');
        // Use fallback reviews
        setReviews([
          {
            id: '1',
      name: 'Jeffery Amasa',
      rating: 5,
      text: 'Perfect for my sensitive skin. No irritation and leaves my skin feeling so soft and moisturized.',
            location: 'Accra, Ghana',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            approved: true
    },
    {
            id: '2',
      name: 'Winston Sckey',
      rating: 5,
      text: 'Love the natural scent and how gentle it is. My whole family uses it now.',
            location: 'Kumasi, Ghana',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            approved: true
    },
    {
            id: '3',
      name: 'Emmanuel Ebo',
      rating: 5,
      text: 'Great quality soap. You can really feel the difference with organic ingredients.',
            location: 'Tema, Ghana',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            approved: true
          }
        ]);
      } else {
        setReviews(data || []);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Failed to load reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.text.trim()) {
      setError('Please fill in your name and review text.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const reviewData: ReviewInsert = {
        name: formData.name.trim(),
        rating: formData.rating,
        text: formData.text.trim(),
        location: formData.location.trim() || undefined,
      };

      const { error: insertError } = await supabase
        .from('reviews')
        .insert([reviewData]);

      if (insertError) {
        console.error('Error inserting review:', insertError);
        setError('Failed to submit review. Please try again.');
        return;
      }

      // Reset form
      setFormData({
        name: '',
        rating: 5,
        text: '',
        location: ''
      });

      setSuccessMessage('Thank you for your review! It has been submitted for approval and will appear once approved.');
      setShowForm(false);

      // Clear success message after 7 seconds
      setTimeout(() => setSuccessMessage(''), 7000);

    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            {successMessage}
          </div>
        )}

        {/* Add Review Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg"
          >
            {showForm ? 'Cancel' : 'Share Your Experience'}
          </Button>
        </div>

        {/* Add Review Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-center">Share Your Review</CardTitle>
              <p className="text-center text-sm text-gray-600">
                Your review will be reviewed and published once approved
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      disabled={submitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        disabled={submitting}
                        className={`text-2xl ${
                          star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors disabled:opacity-50`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review *
                  </label>
                  <Textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    placeholder="Tell us about your experience with NEPAKIE..."
                    rows={4}
                    required
                    disabled={submitting}
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg"
                  >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reviews Carousel */}
        {reviews.length > 0 ? (
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="ml-2 md:ml-4 gap-4 md:gap-6">
                {reviews.map((review) => (
                  <CarouselItem key={review.id} className="pl-0 basis-auto">
                    <div className="w-[85vw] sm:w-[70vw] md:w-[450px] lg:w-[380px] xl:w-[420px]">
                      <div className="bg-gray-50 p-6 md:p-8 rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
                        <p className="text-gray-700 mb-6 leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <p className="text-gray-800 font-medium">{review.name}</p>
                          {review.location && (
                <p className="text-gray-500 text-sm">{review.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <CarouselPrevious className="hidden md:flex left-0 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
              <CarouselNext className="hidden md:flex right-0 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg" />
            </Carousel>
            
            {/* Mobile swipe indicator */}
            <div className="flex md:hidden justify-center mt-6">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>←</span>
                <span>Swipe to see more reviews</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
        </div>
        )}

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl text-gray-800 font-light">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-800 font-light">{Math.max(reviews.length * 167, 500)}+</div>
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
