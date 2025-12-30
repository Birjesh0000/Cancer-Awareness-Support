import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import QuotesSection from './components/QuotesSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ContactForm />
      <QuotesSection />
      <Footer />
    </div>
  );
}

export default App;
