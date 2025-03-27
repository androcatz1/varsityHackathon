import React from 'react';
import './LandingPage.css';
import health from '../../assets/healthcare.jpg';
import ai from "../../assets/ai.jpg";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="First">
        <img src={health} alt="Medical AI" className="banner-img" />
        <div className="overlay">
          <h1>Welcome to Asclepius AI</h1>
          <p>Revolutionizing Healthcare with Artificial Intelligence</p>
          <a className="cta-button">Get Started</a>
        </div>
      </header>

      <section className="features">
        <h2>Transforming Healthcare with AI</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>⚡ Real-Time AI Diagnosis</h3>
            <p>Analyze symptoms instantly with AI-driven precision.</p>
          </div>
          <div className="feature-item">
            <h3>🤖 Smart Virtual Assistant</h3>
            <p>AI chatbot provides medical insights, anytime, anywhere.</p>
          </div>
          <div className="feature-item">
            <h3>📈 Predictive Health Insights</h3>
            <p>Track trends and detect potential health risks early.</p>
          </div>
        </div>
      </section>

      <section className="ai-revolution">
        <div className="ai-content">
          <h2>The Future of AI-Powered Healthcare</h2>
          <p>
            Asclepius AI leverages cutting-edge machine learning to 
            enhance medical diagnostics, improve patient care, and revolutionize 
            the way we approach health monitoring.
          </p>
        </div>
      </section>

      <section className="ai-technology">
        <img src={ai} alt="AI Technology" className="ai-img" /><br/>
        <h2>Advanced AI for Smarter Healthcare</h2>
        <p>Harnessing deep learning and real-time analytics for better health outcomes.</p>
      </section>

      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>🔹 How accurate is the AI diagnosis?</h3>
          <p>Our AI model is trained on vast medical datasets, providing reliable insights. However, it should not replace professional medical advice.</p>
        </div>
        <div className="faq">
          <h3>🔹 Is my data secure?</h3>
          <p>Yes! We use advanced encryption and comply with HIPAA standards to protect your medical data.</p>
        </div>
        <div className="faq">
          <h3>🔹 Can AI replace doctors?</h3>
          <p>No, AI assists doctors by providing faster insights and data-driven analysis, but medical professionals remain essential.</p>
        </div>
      </section>

      <section className="security">
        <h2>Your Data is Safe with Us</h2>
        <p>We prioritize patient privacy and comply with industry standards for secure data handling.</p>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>“Asclepius AI gave me quick and reliable insights into my symptoms. A real game-changer!”</p>
          <h4>- Sarah M.</h4>
        </div>
        <div className="testimonial">
          <p>“I love how easy it is to use. AI-powered diagnostics make health monitoring effortless.”</p>
          <h4>- James K.</h4>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Asclepius AI. Smarter Health, Smarter You.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
