import React from 'react';
import { Heart, Pill, Brain, Thermometer } from 'lucide-react';
import '../styles/landing.css';

function LandingPage({ onGetStarted }) {
  return (
    <div className="landing-page">
      <div className="heart-icon">
        <Heart size={64} />
      </div>
      
      <h1>Your Health Journey Starts Here</h1>
      
      <p className="subtitle">
        Track medications, monitor health metrics, and take control of your well-being with
        our comprehensive health management platform.
      </p>
      
      <button className="get-started-btn" onClick={onGetStarted}>
        Get Started <span>→</span>
      </button>
      
      <div className="features">
        <div className="feature-card">
          <div className="icon">
            <Pill size={32} />
          </div>
          <h3>Medication Management</h3>
          <p>Never miss a dose with smart reminders and tracking</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">
            <Brain size={32} />
          </div>
          <h3>Health Analytics</h3>
          <p>Visualize your health trends with detailed analytics</p>
        </div>
        
        <div className="feature-card">
          <div className="icon">
            <Thermometer size={32} />
          </div>
          <h3>Vital Monitoring</h3>
          <p>Track and analyze your vital signs over time</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;