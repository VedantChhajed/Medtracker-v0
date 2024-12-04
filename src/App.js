import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Medications from './components/Medications';
import Health from './components/Health';
import Settings from './components/Settings';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      {currentPage === 'landing' && <LandingPage onGetStarted={() => navigate('dashboard')} />}
      {currentPage === 'dashboard' && <Dashboard navigate={navigate} />}
      {currentPage === 'medications' && <Medications navigate={navigate} />}
      {currentPage === 'health' && <Health navigate={navigate} />}
      {currentPage === 'settings' && <Settings navigate={navigate} />}
    </div>
  );
}

export default App;

