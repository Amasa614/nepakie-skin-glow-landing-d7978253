import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase, type Review } from '@/lib/supabase';

const AdminReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAllReviews();
  }, []);

  const fetchAllReviews = async () => {
    try {
      setError('');
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        setError(`Failed to load reviews: ${error.message}`);
      } else {
        setReviews(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      setError(`Failed to load reviews: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleApproval = async (reviewId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ approved: !currentStatus })
        .eq('id', reviewId);

      if (error) {
        console.error('Error updating review:', error);
        setError('Failed to update review status.');
      } else {
        // Refresh the list
        fetchAllReviews();
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update review status.');
    }
  };

  const deleteReview = async (reviewId: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);

      if (error) {
        console.error('Error deleting review:', error);
        setError('Failed to delete review.');
      } else {
        fetchAllReviews();
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to delete review.');
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center">Loading reviews...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Review Management</h1>
          <p className="text-gray-600">Manage and moderate customer reviews</p>
          <Button 
            onClick={fetchAllReviews} 
            variant="outline" 
            size="sm" 
            className="mt-2"
          >
            Refresh Reviews
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className={`${review.approved ? 'border-green-200 bg-green-50' : 'border-yellow-200 bg-yellow-50'}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <p className="text-sm text-gray-600">
                      {review.location} • {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      review.approved 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                    }`}>
                      {review.approved ? 'Approved' : 'Pending'}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => toggleApproval(review.id, review.approved)}
                    variant={review.approved ? "outline" : "default"}
                    size="sm"
                  >
                    {review.approved ? 'Unapprove' : 'Approve'}
                  </Button>
                  <Button
                    onClick={() => deleteReview(review.id)}
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {reviews.length === 0 && !loading && !error && (
          <div className="text-center py-12 text-gray-600">
            No reviews found.
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">How to Use:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• <strong>Pending reviews</strong> (yellow) are not visible to public</li>
            <li>• <strong>Approved reviews</strong> (green) are displayed on your website</li>
            <li>• Click "Approve" to make a review public</li>
            <li>• Click "Delete" to permanently remove a review</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Powered by{' '}
              <a 
                href="https://executiveaid.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline decoration-1 underline-offset-2 hover:decoration-2 transition-all duration-200"
              >
                Razorbill Technologies
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminReviews; 