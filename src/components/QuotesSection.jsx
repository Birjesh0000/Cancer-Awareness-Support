import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/QuotesSection.css';

const QuotesSection = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteCount, setQuoteCount] = useState(0);

  const fallbackQuotes = [
    { text: "The only way out is through.", author: "Robert Frost" },
    { text: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
    { text: "Strength doesn't come from what you can do. It comes from overcoming things you once thought you couldn't.", author: "Rikki Rogers" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "Every new day is another chance to fight. Another chance to succeed.", author: "Unknown" },
    { text: "The human spirit is stronger than anything that can happen to it.", author: "C.C. Scott" },
    { text: "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.", author: "Thema Bryant-Davis" },
    { text: "You don't have to be perfect to be worthy of love and support.", author: "Unknown" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" }
  ];

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random', {
        timeout: 5000,
        headers: { 'Accept': 'application/json' }
      });
      
      const quoteText = response.data.content || response.data.text || '';
      const authorName = response.data.author || 'Unknown';
      
      if (quoteText) {
        setQuote({
          text: quoteText,
          author: authorName.split(',')[0]
        });
      } else {
        throw new Error('Invalid response format');
      }
      setQuoteCount((prev) => prev + 1);
    } catch (err) {
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      setQuote(fallbackQuotes[randomIndex]);
      setQuoteCount((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="quotes" className="quotes-section">
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
