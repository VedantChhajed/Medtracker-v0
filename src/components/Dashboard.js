import React from 'react';
import { Home, Pill, Heart, Settings, Calendar, Clock, MapPin } from 'lucide-react';
import BottomNav from './common/BottomNav';
import '../styles/dashboard.css';

function Dashboard({ navigate }) {
  const appointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "15/03/2024",
      time: "10:00 AM",
      location: "Heart Care Center"
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "General Physician",
      date: "20/03/2024",
      time: "2:30 PM",
      location: "Medical Plaza"
    }
  ];

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome Back!</h1>
        <p>Thursday, December 5, 2024</p>
      </header>

      <div className="dashboard-grid">
        <div className="wellness-card">
          <h2><Heart size={24} /> Wellness Score</h2>
          <div className="wellness-score">85%</div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
          <p>Your health metrics are looking great! Keep up the excellent work.</p>
        </div>

        <div className="metrics-card">
          <h2>Health Metrics Overview</h2>
          <div className="metrics-tabs">
            <button className="active">All Metrics</button>
            <button>Blood Pressure</button>
            <button>Glucose</button>
          </div>
          <div className="graph-area">Graph will be displayed here</div>
          <div className="metrics-legend">
            <span>BP</span>
            <span>Glucose</span>
            <span>Weight</span>
            <span>Temp</span>
          </div>
        </div>

        <div className="appointments-section">
          <div className="appointments-header">
            <h2>Upcoming Appointments</h2>
            <button className="add-appointment">+</button>
          </div>
          <div className="appointments-grid">
            {appointments.map((apt, index) => (
              <div key={index} className="appointment-card">
                <h3>{apt.doctor}</h3>
                <p className="specialty">{apt.specialty}</p>
                <p className="appointment-detail">
                  <Calendar size={16} /> {apt.date}
                </p>
                <p className="appointment-detail">
                  <Clock size={16} /> {apt.time}
                </p>
                <p className="appointment-detail">
                  <MapPin size={16} /> {apt.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav currentPage="dashboard" navigate={navigate} />
    </div>
  );
}

export default Dashboard;