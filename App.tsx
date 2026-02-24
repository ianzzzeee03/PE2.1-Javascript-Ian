import React, { useState } from 'react';
import './App.css';
// ✅ Import your logo - place ogos_logo.png in src/assets/
import ogosLogo from './assets/ogos_logo.png';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'getting-started' | 'dashboard'>('getting-started');

  const handleGetStarted = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('getting-started');
  };

  if (currentPage === 'dashboard') {
    return <Dashboard onLogout={handleLogout} logo={ogosLogo} />;
  }

  return (
    <div className="getting-started-container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-box">
          <img 
            src={ogosLogo} 
            alt="OGOS Hotel Logo" 
            className="logo-image"
          />
        </div>
      </div>

      {/* Welcome Text */}
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to OGOS Hotel</h1>
        <p className="welcome-subtitle">Experience Royal Hospitality & Luxury</p>
      </div>

      {/* Feature Badges */}
      <div className="features-section">
        <div className="feature-badge">
          <span className="badge-icon">👑</span>
          <span className="badge-text">Premium Service</span>
        </div>
        <div className="feature-badge">
          <span className="badge-icon">🏨</span>
          <span className="badge-text">Luxurious Rooms</span>
        </div>
        <div className="feature-badge">
          <span className="badge-icon">📍</span>
          <span className="badge-text">Prime Location</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons-section">
        <button className="btn-primary" onClick={handleGetStarted}>
          Get Started
          <span className="arrow">→</span>
        </button>
        <button className="btn-secondary">
          Learn More
        </button>
      </div>

      {/* Footer Text */}
      <p className="footer-text">Your journey to extraordinary comfort begins here</p>
    </div>
  );
};

// Dashboard Component
const Dashboard: React.FC<{ onLogout: () => void; logo: string }> = ({ onLogout, logo }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'profile'>('overview');

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="OGOS Hotel" className="sidebar-logo-image" />
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <span className="nav-icon">📅</span>
            Bookings
          </button>
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span className="nav-icon">👤</span>
            Profile
          </button>
        </nav>

        <button className="logout-btn" onClick={onLogout}>
          <span className="nav-icon">🚪</span>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <h2 className="dashboard-title">
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'bookings' && 'My Bookings'}
            {activeTab === 'profile' && 'My Profile'}
          </h2>
          <div className="user-info">
            <span className="welcome-user">Welcome, Guest</span>
            <div className="user-avatar">👤</div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="overview-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">🏨</div>
                  <div className="stat-info">
                    <h3>Active Bookings</h3>
                    <p className="stat-number">2</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-info">
                    <h3>Loyalty Points</h3>
                    <p className="stat-number">1,250</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🎁</div>
                  <div className="stat-info">
                    <h3>Available Offers</h3>
                    <p className="stat-number">3</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🔔</div>
                  <div className="stat-info">
                    <h3>Notifications</h3>
                    <p className="stat-number">5</p>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h3 className="section-title">Quick Actions</h3>
                <div className="action-buttons">
                  <button className="action-btn">
                    <span className="action-icon">📅</span>
                    New Booking
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">🔍</span>
                    Check Availability
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">💳</span>
                    Payment History
                  </button>
                  <button className="action-btn">
                    <span className="action-icon">💬</span>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="bookings-content">
              <div className="booking-card">
                <div className="booking-header">
                  <h4>Deluxe Suite</h4>
                  <span className="booking-status confirmed">Confirmed</span>
                </div>
                <div className="booking-details">
                  <p><strong>Check-in:</strong> March 15, 2026</p>
                  <p><strong>Check-out:</strong> March 18, 2026</p>
                  <p><strong>Guests:</strong> 2 Adults</p>
                  <p><strong>Room Number:</strong> 305</p>
                </div>
                <div className="booking-actions">
                  <button className="btn-small">View Details</button>
                  <button className="btn-small btn-outline">Cancel</button>
                </div>
              </div>

              <div className="booking-card">
                <div className="booking-header">
                  <h4>Executive Room</h4>
                  <span className="booking-status upcoming">Upcoming</span>
                </div>
                <div className="booking-details">
                  <p><strong>Check-in:</strong> April 1, 2026</p>
                  <p><strong>Check-out:</strong> April 5, 2026</p>
                  <p><strong>Guests:</strong> 1 Adult</p>
                  <p><strong>Room Number:</strong> TBA</p>
                </div>
                <div className="booking-actions">
                  <button className="btn-small">View Details</button>
                  <button className="btn-small btn-outline">Modify</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="profile-content">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar-large">👤</div>
                  <h3>Guest User</h3>
                  <p>guest@ogoshotel.com</p>
                </div>
                <div className="profile-section">
                  <h4>Personal Information</h4>
                  <div className="profile-field">
                    <label>Full Name</label>
                    <input type="text" defaultValue="Guest User" />
                  </div>
                  <div className="profile-field">
                    <label>Email</label>
                    <input type="email" defaultValue="guest@ogoshotel.com" />
                  </div>
                  <div className="profile-field">
                    <label>Phone</label>
                    <input type="tel" defaultValue="+1 234 567 8900" />
                  </div>
                  <button className="btn-save">Save Changes</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;