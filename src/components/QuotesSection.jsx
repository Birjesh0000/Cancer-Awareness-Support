import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/QuotesSection.css';

const QuotesSection = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteCount, setQuoteCount] = useState(0);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random?tags=inspirational,motivational');
      setQuote({
        text: response.data.content,
        author: response.data.author.replace(', type.author', ''),
      });
      setQuoteCount((prev) => prev + 1);
    } catch (err) {
      setError('Failed to load quote. Please try again.');
      console.error('Error fetching quote:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    // Auto-refresh quote every 30 seconds
    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quotes-section">
      <div className="quotes-wrapper">
        <div className="quotes-container">
          <div className="quotes-header">
            <h2>Daily Inspiration</h2>
            <p className="quotes-tagline">Real-time quotes to keep you motivated</p>
          </div>

          <div className="quote-card">
            {loading && (
              <div className="quote-loader">
                <div className="spinner"></div>
                <p>Loading inspiring message...</p>
              </div>
            )}

            {error && !loading && (
              <div className="quote-error">
                <p>⚠️ {error}</p>
              </div>
            )}

            {quote && !loading && (
              <div className="quote-content">
                <div className="quote-icon">✨</div>
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">— {quote.author}</p>
                <div className="quote-meta">
                  <span className="quote-count">Quote #{quoteCount}</span>
                  <span className="quote-timestamp">
                    {new Date().toLocaleTimeString('en-US', { 
                      hour: 'numeric', 
                      minute: '2-digit',
                      period: 'short'
                    })}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="quote-actions">
            <button 
              onClick={fetchQuote} 
              disabled={loading} 
              className="refresh-btn"
            >
              <span className="refresh-icon">🔄</span>
              {loading ? 'Loading...' : 'Get Another Quote'}
            </button>
            <p className="auto-refresh-info">
              Auto-refreshes every 30 seconds
            </p>
          </div>

          <div className="quotes-benefits">
            <h3>Why Daily Inspiration Matters</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">🧠</span>
                <p>Mental Wellness</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">❤️</span>
                <p>Emotional Support</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🌟</span>
                <p>Hope & Motivation</p>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💭</span>
                <p>Daily Reflection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
