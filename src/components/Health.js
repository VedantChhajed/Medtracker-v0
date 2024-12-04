import React, { useState } from 'react';
import { ArrowLeft, Home, Pill, Heart, Settings, Scale, Download, Plus } from 'lucide-react';

function Health({ navigate }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleCalculateBMI = (e) => {
    e.preventDefault();
    // BMI calculation logic would go here
  };

  return (
    <div className="page health">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate('dashboard')}>
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>Health Tracker</h1>
          <p>Monitor your health metrics</p>
        </div>
      </header>

      <div className="content-grid">
        <div className="card bmi-card">
          <div className="card-header">
            <Scale size={24} className="text-primary" />
            <h2>BMI Calculator</h2>
          </div>
          <form onSubmit={handleCalculateBMI}>
            <div className="input-group">
              <label>Height (cm)</label>
              <input
                type="number"
                placeholder="Enter height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                placeholder="Enter weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="input-field"
              />
            </div>
            <button type="submit" className="primary-button">
              Calculate BMI
            </button>
          </form>
        </div>

        <div className="card quick-actions-card">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="primary-button with-icon">
              <Plus size={20} /> Add Log
            </button>
            <button className="secondary-button with-icon">
              <Download size={20} /> Export Report
            </button>
          </div>
        </div>
      </div>

      <nav className="bottom-nav">
        <button onClick={() => navigate('dashboard')}>
          <Home size={24} />
          <span>Home</span>
        </button>
        <button onClick={() => navigate('medications')}>
          <Pill size={24} />
          <span>Medications</span>
        </button>
        <button className="active">
          <Heart size={24} />
          <span>Health</span>
        </button>
        <button onClick={() => navigate('settings')}>
          <Settings size={24} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default Health;