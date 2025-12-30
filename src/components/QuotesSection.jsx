import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/QuotesSection.css';

const QuotesSection = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random?tags=inspirational,motivational');
      setQuote({
        text: response.data.content,
        author: response.data.author,
      });
    } catch (err) {
      setError('Failed to load quote. Please try again.');
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <h2>Daily Inspiration</h2>
        
        <div className="quote-card">
          {loading && <p className="quote-text">Loading inspiring message...</p>}
          
          {error && <p className="quote-error">{error}</p>}
          
          {quote && !loading && (
            <>
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-author">— {quote.author}</p>
            </>
          )}
        </div>

        <button onClick={fetchQuote} disabled={loading} className="refresh-btn">
          {loading ? 'Loading...' : 'Get Another Quote'}
        </button>
      </div>
    </section>
  );
};

export default QuotesSection;
