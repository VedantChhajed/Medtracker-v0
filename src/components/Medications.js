import React from 'react';
import { ArrowLeft, Plus, Home, Pill, Heart, Settings } from 'lucide-react';

function Medications({ navigate }) {
  return (
    <div className="page medications">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate('dashboard')}>
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>Medications</h1>
          <p>Manage your medications and schedules</p>
        </div>
      </header>

      <div className="content-grid">
        <div className="card adherence-card">
          <h2>Medication Adherence</h2>
          <div className="adherence-stats">
            <div className="stat-row">
              <span>Monthly Adherence Rate</span>
              <span className="stat-value">0.0%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '0%' }}></div>
            </div>
            <div className="stat-row">
              <span>Last 7 Days</span>
              <span>Doses Taken</span>
            </div>
          </div>
        </div>

        <div className="card quick-actions-card">
          <h2>Quick Actions</h2>
          <button className="primary-button with-icon">
            <Plus size={20} /> Add Medication
          </button>
        </div>
      </div>

      <nav className="bottom-nav">
        <button onClick={() => navigate('dashboard')}>
          <Home size={24} />
          <span>Home</span>
        </button>
        <button className="active">
          <Pill size={24} />
          <span>Medications</span>
        </button>
        <button onClick={() => navigate('health')}>
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

export default Medications;