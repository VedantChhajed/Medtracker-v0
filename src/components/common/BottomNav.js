import React from 'react';
import { Home, Pill, Heart, Settings } from 'lucide-react';

function BottomNav({ currentPage, navigate }) {
  return (
    <nav className="bottom-nav">
      <button 
        className={currentPage === 'dashboard' ? 'active' : ''} 
        onClick={() => navigate('dashboard')}
      >
        <Home size={24} />
        <span>Home</span>
      </button>
      <button 
        className={currentPage === 'medications' ? 'active' : ''} 
        onClick={() => navigate('medications')}
      >
        <Pill size={24} />
        <span>Medications</span>
      </button>
      <button 
        className={currentPage === 'health' ? 'active' : ''} 
        onClick={() => navigate('health')}
      >
        <Heart size={24} />
        <span>Health</span>
      </button>
      <button 
        className={currentPage === 'settings' ? 'active' : ''} 
        onClick={() => navigate('settings')}
      >
        <Settings size={24} />
        <span>Settings</span>
      </button>
    </nav>
  );
}

export default BottomNav;