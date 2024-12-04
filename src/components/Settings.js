import React, { useState } from 'react';
import { ArrowLeft, Home, Pill, Heart, Settings as SettingsIcon, Sun, Bell, Vibrate } from 'lucide-react';

function Settings({ navigate }) {
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <div className="page settings">
      <header className="page-header">
        <button className="back-btn" onClick={() => navigate('dashboard')}>
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1>Settings</h1>
          <p>Customize your experience</p>
        </div>
      </header>

      <div className="settings-grid">
        <div className="card settings-card">
          <h2>Appearance</h2>
          <div className="setting-item">
            <div className="setting-label">
              <Sun size={20} />
              <span>Dark Mode</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="card settings-card">
          <h2>Notifications</h2>
          <div className="setting-item">
            <div className="setting-label">
              <Bell size={20} />
              <span>Sound</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={sound}
                onChange={() => setSound(!sound)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <div className="setting-label">
              <Vibrate size={20} />
              <span>Vibration</span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={vibration}
                onChange={() => setVibration(!vibration)}
              />
              <span className="slider"></span>
            </label>
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
        <button onClick={() => navigate('health')}>
          <Heart size={24} />
          <span>Health</span>
        </button>
        <button className="active">
          <SettingsIcon size={24} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}

export default Settings;