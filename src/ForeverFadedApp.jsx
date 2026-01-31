import React, { useState } from 'react';
import { Calendar, Clock, User, DollarSign, MapPin, Menu, X, ChevronRight, 
         Settings, LogOut, Home, Users, Scissors, Package, CreditCard, BarChart3,
         Plus, Edit, Trash2, Search, Filter, Download } from 'lucide-react';

// Color scheme from logo
const colors = {
  black: '#0a0a0a',
  gold: '#d4af37',
  red: '#dc2626',
  blue: '#2563eb',
  white: '#ffffff',
  barberRed: '#ef4444',
  barberBlue: '#3b82f6',
  cream: '#faf8f3',
};

// API Configuration (to be implemented)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Simulated Stripe Integration
const processPayment = async (amount, paymentMethod) => {
  // In production, integrate with Stripe API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, transactionId: `txn_${Date.now()}` });
    }, 1500);
  });
};

// Main App Component
export default function ForeverFadedApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Simulated authentication
  const handleLogin = (email, password, role) => {
    // In production, call backend API
    setCurrentUser({
      id: '1',
      name: role === 'client' ? 'John Doe' : role === 'barber' ? 'Mike Johnson' : 'Sarah Williams',
      email,
      role, // 'client', 'barber', 'owner', 'admin'
      avatar: null,
      location: 'Main Street Location'
    });
    
    if (role === 'client') setCurrentView('client-booking');
    else if (role === 'barber') setCurrentView('barber-dashboard');
    else setCurrentView('owner-dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  return (
    <div className="app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          background: ${colors.black};
          color: ${colors.white};
          overflow-x: hidden;
        }
        
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, ${colors.black} 0%, #1a1a1a 100%);
        }

        /* Login Screen */
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .login-container::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, ${colors.gold}15 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .login-box {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 2px solid ${colors.gold};
          border-radius: 24px;
          padding: 3rem;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.2), 0 0 100px rgba(212, 175, 55, 0.1);
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        .logo-container {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .logo-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, ${colors.gold} 0%, ${colors.white} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .logo-subtitle {
          color: ${colors.gold};
          font-size: 0.875rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .role-selector {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .role-btn {
          padding: 1rem;
          border: 2px solid ${colors.gold}40;
          background: transparent;
          color: ${colors.white};
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .role-btn:hover {
          border-color: ${colors.gold};
          background: ${colors.gold}15;
          transform: translateY(-2px);
        }

        .role-btn.active {
          border-color: ${colors.gold};
          background: linear-gradient(135deg, ${colors.gold}30 0%, ${colors.gold}20 100%);
          box-shadow: 0 0 20px ${colors.gold}40;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .input-label {
          display: block;
          margin-bottom: 0.5rem;
          color: ${colors.gold};
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .input-field {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid ${colors.gold}40;
          border-radius: 12px;
          color: ${colors.white};
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: ${colors.gold};
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px ${colors.gold}20;
        }

        .input-field::placeholder {
          color: ${colors.white}60;
        }

        .login-btn {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, ${colors.gold} 0%, #c4a137 100%);
          border: none;
          border-radius: 12px;
          color: ${colors.black};
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 10px 30px ${colors.gold}40;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px ${colors.gold}60;
        }

        .login-btn:active {
          transform: translateY(0);
        }

        /* Main Layout */
        .main-layout {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 280px;
          background: linear-gradient(180deg, #1a1a1a 0%, ${colors.black} 100%);
          border-right: 1px solid ${colors.gold}30;
          padding: 2rem 0;
          transition: transform 0.3s ease;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          z-index: 100;
        }

        .sidebar.closed {
          transform: translateX(-100%);
        }

        .sidebar-header {
          padding: 0 1.5rem 2rem;
          border-bottom: 1px solid ${colors.gold}20;
          margin-bottom: 2rem;
        }

        .sidebar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, ${colors.gold} 0%, ${colors.white} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .sidebar-location {
          color: ${colors.gold};
          font-size: 0.75rem;
          margin-top: 0.5rem;
          opacity: 0.8;
        }

        .nav-menu {
          list-style: none;
          padding: 0 1rem;
        }

        .nav-item {
          margin-bottom: 0.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 1rem;
          color: ${colors.white};
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: 500;
        }

        .nav-link:hover {
          background: ${colors.gold}15;
          transform: translateX(4px);
        }

        .nav-link.active {
          background: linear-gradient(135deg, ${colors.gold}30 0%, ${colors.gold}20 100%);
          border-left: 3px solid ${colors.gold};
        }

        .nav-link svg {
          margin-right: 1rem;
          color: ${colors.gold};
        }

        .sidebar-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          border-top: 1px solid ${colors.gold}20;
        }

        .user-profile {
          display: flex;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          margin-bottom: 1rem;
        }

        .user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${colors.gold} 0%, ${colors.red} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-weight: 700;
          color: ${colors.white};
        }

        .user-info h4 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .user-info p {
          font-size: 0.75rem;
          color: ${colors.gold};
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .logout-btn {
          width: 100%;
          padding: 0.875rem;
          background: transparent;
          border: 1px solid ${colors.gold}40;
          border-radius: 12px;
          color: ${colors.white};
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logout-btn:hover {
          background: ${colors.red}20;
          border-color: ${colors.red};
        }

        .logout-btn svg {
          margin-right: 0.5rem;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          margin-left: 280px;
          padding: 2rem;
          transition: margin-left 0.3s ease;
        }

        .main-content.full-width {
          margin-left: 0;
        }

        .mobile-header {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: ${colors.black};
          border-bottom: 1px solid ${colors.gold}30;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .content-header {
          margin-bottom: 2rem;
        }

        .content-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, ${colors.gold} 0%, ${colors.white} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .content-subtitle {
          color: ${colors.white}80;
          font-size: 1rem;
        }

        /* Cards and Grid */
        .grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .grid-4 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }

        .card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid ${colors.gold}30;
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: ${colors.gold};
          transform: translateY(-4px);
          box-shadow: 0 10px 30px ${colors.gold}20;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: ${colors.gold};
        }

        .card-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, ${colors.gold}20 0%, ${colors.gold}10 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.gold};
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: ${colors.white};
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: ${colors.white}60;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Buttons */
        .btn {
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, ${colors.gold} 0%, #c4a137 100%);
          color: ${colors.black};
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px ${colors.gold}40;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid ${colors.gold};
          color: ${colors.gold};
        }

        .btn-secondary:hover {
          background: ${colors.gold}15;
        }

        .btn-danger {
          background: ${colors.red};
          color: ${colors.white};
        }

        .btn svg {
          margin-right: 0.5rem;
        }

        /* Booking System */
        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .step-indicator {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;
          position: relative;
        }

        .step-indicator::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 2px;
          background: ${colors.gold}20;
          z-index: -1;
        }

        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
        }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: ${colors.black};
          border: 2px solid ${colors.gold}40;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .step.active .step-number {
          background: ${colors.gold};
          color: ${colors.black};
          border-color: ${colors.gold};
          box-shadow: 0 0 20px ${colors.gold}60;
        }

        .step.completed .step-number {
          background: ${colors.gold}30;
          border-color: ${colors.gold};
        }

        .step-label {
          font-size: 0.75rem;
          color: ${colors.white}60;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .step.active .step-label {
          color: ${colors.gold};
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 2px solid ${colors.gold}30;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          border-color: ${colors.gold};
          transform: translateY(-4px);
          box-shadow: 0 10px 30px ${colors.gold}30;
        }

        .service-card.selected {
          border-color: ${colors.gold};
          background: linear-gradient(135deg, ${colors.gold}20 0%, ${colors.gold}10 100%);
          box-shadow: 0 0 30px ${colors.gold}40;
        }

        .service-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: ${colors.white};
        }

        .service-duration {
          color: ${colors.gold};
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .service-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${colors.gold};
        }

        .barber-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .barber-card {
          text-align: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 2px solid ${colors.gold}30;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .barber-card:hover {
          border-color: ${colors.gold};
          transform: translateY(-4px);
        }

        .barber-card.selected {
          border-color: ${colors.gold};
          background: linear-gradient(135deg, ${colors.gold}20 0%, ${colors.gold}10 100%);
        }

        .barber-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${colors.gold} 0%, ${colors.red} 100%);
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          border: 3px solid ${colors.gold}40;
        }

        .barber-name {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .barber-rating {
          color: ${colors.gold};
          font-size: 0.875rem;
        }

        .calendar-container {
          background: rgba(26, 26, 26, 0.95);
          border: 1px solid ${colors.gold}30;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .time-slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .time-slot {
          padding: 1rem;
          background: transparent;
          border: 1px solid ${colors.gold}40;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: ${colors.white};
          font-weight: 500;
        }

        .time-slot:hover {
          border-color: ${colors.gold};
          background: ${colors.gold}15;
        }

        .time-slot.selected {
          background: ${colors.gold};
          color: ${colors.black};
          border-color: ${colors.gold};
        }

        .time-slot.unavailable {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .booking-summary {
          background: rgba(26, 26, 26, 0.95);
          border: 1px solid ${colors.gold}30;
          border-radius: 16px;
          padding: 2rem;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid ${colors.gold}20;
        }

        .summary-item:last-child {
          border-bottom: none;
        }

        .summary-label {
          color: ${colors.white}80;
        }

        .summary-value {
          font-weight: 600;
          color: ${colors.gold};
        }

        .total-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${colors.gold};
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 2px solid ${colors.gold};
        }

        /* Payment Methods */
        .payment-methods {
          display: grid;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .payment-option {
          padding: 1.5rem;
          border: 2px solid ${colors.gold}30;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .payment-option:hover {
          border-color: ${colors.gold};
        }

        .payment-option.selected {
          border-color: ${colors.gold};
          background: ${colors.gold}15;
        }

        .payment-option svg {
          margin-right: 1rem;
          color: ${colors.gold};
        }

        /* Table Styles */
        .table-container {
          background: rgba(26, 26, 26, 0.95);
          border: 1px solid ${colors.gold}30;
          border-radius: 16px;
          overflow: hidden;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table thead {
          background: linear-gradient(135deg, ${colors.gold}20 0%, ${colors.gold}10 100%);
        }

        .table th {
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: ${colors.gold};
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
        }

        .table td {
          padding: 1rem;
          border-top: 1px solid ${colors.gold}20;
        }

        .table tbody tr {
          transition: all 0.3s ease;
        }

        .table tbody tr:hover {
          background: ${colors.gold}10;
        }

        .status-badge {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .status-confirmed {
          background: ${colors.gold}30;
          color: ${colors.gold};
        }

        .status-completed {
          background: #10b98140;
          color: #10b981;
        }

        .status-cancelled {
          background: ${colors.red}30;
          color: ${colors.red};
        }

        .status-pending {
          background: ${colors.blue}30;
          color: ${colors.blue};
        }

        /* Form Controls */
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .select-field {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid ${colors.gold}40;
          border-radius: 12px;
          color: ${colors.white};
          font-size: 1rem;
          cursor: pointer;
        }

        .select-field:focus {
          outline: none;
          border-color: ${colors.gold};
          background: rgba(255, 255, 255, 0.08);
        }

        .select-field option {
          background: ${colors.black};
          color: ${colors.white};
        }

        .search-bar {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .search-bar input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid ${colors.gold}40;
          border-radius: 12px;
          color: ${colors.white};
        }

        .search-bar svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: ${colors.gold};
        }

        /* Action Buttons */
        .action-btns {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: ${colors.gold};
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .icon-btn:hover {
          background: ${colors.gold}20;
        }

        .icon-btn.danger {
          color: ${colors.red};
        }

        .icon-btn.danger:hover {
          background: ${colors.red}20;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
          }

          .mobile-header {
            display: flex;
          }

          .grid-2, .grid-3, .grid-4 {
            grid-template-columns: 1fr;
          }

          .service-grid,
          .barber-grid {
            grid-template-columns: 1fr;
          }

          .time-slots {
            grid-template-columns: repeat(3, 1fr);
          }

          .login-box {
            padding: 2rem;
          }

          .role-selector {
            grid-template-columns: 1fr;
          }

          .content-title {
            font-size: 2rem;
          }
        }

        /* Animations */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slideIn 0.5s ease forwards;
        }

        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      {!currentUser ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <MainLayout
          user={currentUser}
          currentView={currentView}
          setCurrentView={setCurrentView}
          onLogout={handleLogout}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
    </div>
  );
}

// Login Screen Component
function LoginScreen({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, selectedRole);
  };

  return (
    <div className="login-container">
      <div className="login-box animate-in">
        <div className="logo-container">
          <h1 className="logo-title">Forever Faded</h1>
          <p className="logo-subtitle">For The Culture</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="role-selector">
            <button
              type="button"
              className={`role-btn ${selectedRole === 'client' ? 'active' : ''}`}
              onClick={() => setSelectedRole('client')}
            >
              Client
            </button>
            <button
              type="button"
              className={`role-btn ${selectedRole === 'barber' ? 'active' : ''}`}
              onClick={() => setSelectedRole('barber')}
            >
              Barber
            </button>
            <button
              type="button"
              className={`role-btn ${selectedRole === 'owner' ? 'active' : ''}`}
              onClick={() => setSelectedRole('owner')}
            >
              Owner
            </button>
          </div>

          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// Main Layout with Sidebar
function MainLayout({ user, currentView, setCurrentView, onLogout, sidebarOpen, setSidebarOpen }) {
  const getNavItems = () => {
    if (user.role === 'client') {
      return [
        { icon: Calendar, label: 'Book Appointment', view: 'client-booking' },
        { icon: Clock, label: 'My Appointments', view: 'client-appointments' },
        { icon: User, label: 'Profile', view: 'client-profile' },
      ];
    } else if (user.role === 'barber') {
      return [
        { icon: Home, label: 'Dashboard', view: 'barber-dashboard' },
        { icon: Calendar, label: 'Schedule', view: 'barber-schedule' },
        { icon: Users, label: 'Clients', view: 'barber-clients' },
        { icon: DollarSign, label: 'Earnings', view: 'barber-earnings' },
      ];
    } else {
      return [
        { icon: Home, label: 'Dashboard', view: 'owner-dashboard' },
        { icon: BarChart3, label: 'Analytics', view: 'owner-analytics' },
        { icon: Users, label: 'Staff', view: 'owner-staff' },
        { icon: Scissors, label: 'Services', view: 'owner-services' },
        { icon: MapPin, label: 'Locations', view: 'owner-locations' },
        { icon: Package, label: 'Inventory', view: 'owner-inventory' },
        { icon: DollarSign, label: 'Payroll', view: 'owner-payroll' },
        { icon: Settings, label: 'Settings', view: 'owner-settings' },
      ];
    }
  };

  return (
    <div className="main-layout">
      <div className="mobile-header">
        <button className="icon-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h2 className="sidebar-logo">Forever Faded</h2>
        <div style={{ width: 24 }} />
      </div>

      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">FOREVER FADED</h2>
          <p className="sidebar-location">
            <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
            {user.location}
          </p>
        </div>

        <nav>
          <ul className="nav-menu">
            {getNavItems().map((item) => (
              <li key={item.view} className="nav-item">
                <a
                  className={`nav-link ${currentView === item.view ? 'active' : ''}`}
                  onClick={() => setCurrentView(item.view)}
                >
                  <item.icon size={20} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>{user.role}</p>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className={`main-content ${sidebarOpen ? '' : 'full-width'}`}>
        {user.role === 'client' && <ClientViews currentView={currentView} />}
        {user.role === 'barber' && <BarberViews currentView={currentView} />}
        {user.role === 'owner' && <OwnerViews currentView={currentView} />}
      </main>
    </div>
  );
}

// Client Views
function ClientViews({ currentView }) {
  if (currentView === 'client-booking') return <ClientBooking />;
  if (currentView === 'client-appointments') return <ClientAppointments />;
  if (currentView === 'client-profile') return <ClientProfile />;
  return null;
}

// Client Booking Flow
function ClientBooking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const services = [
    { id: 1, name: 'Classic Cut', duration: '30 min', price: 35 },
    { id: 2, name: 'Fade & Lineup', duration: '45 min', price: 45 },
    { id: 3, name: 'Beard Trim', duration: '20 min', price: 25 },
    { id: 4, name: 'Hot Towel Shave', duration: '30 min', price: 40 },
    { id: 5, name: 'Full Service', duration: '60 min', price: 65 },
    { id: 6, name: 'Kids Cut', duration: '25 min', price: 28 },
  ];

  const barbers = [
    { id: 1, name: 'Mike Johnson', rating: '4.9', specialty: 'Fades' },
    { id: 2, name: 'Chris Davis', rating: '4.8', specialty: 'Classic Cuts' },
    { id: 3, name: 'Marcus Brown', rating: '4.9', specialty: 'Designs' },
    { id: 4, name: 'James Wilson', rating: '4.7', specialty: 'Beards' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  ];

  const handleBooking = async () => {
    if (paymentMethod === 'prepay') {
      const result = await processPayment(selectedService.price, 'stripe');
      if (result.success) {
        alert('Booking confirmed! Payment successful.');
        // Reset booking flow
        setCurrentStep(1);
        setSelectedService(null);
        setSelectedBarber(null);
        setSelectedDate(null);
        setSelectedTime(null);
      }
    } else {
      alert('Booking confirmed! Pay at the shop.');
      setCurrentStep(1);
      setSelectedService(null);
      setSelectedBarber(null);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  return (
    <div className="booking-container">
      <div className="content-header">
        <h1 className="content-title">Book Appointment</h1>
        <p className="content-subtitle">Choose your service and barber</p>
      </div>

      <div className="step-indicator">
        <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Service</div>
        </div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Barber</div>
        </div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">Date & Time</div>
        </div>
        <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
          <div className="step-number">4</div>
          <div className="step-label">Confirm</div>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="animate-in">
          <h3 style={{ marginBottom: '1.5rem', color: colors.gold }}>Select Service</h3>
          <div className="service-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-name">{service.name}</div>
                <div className="service-duration">
                  <Clock size={14} style={{ display: 'inline', marginRight: 4 }} />
                  {service.duration}
                </div>
                <div className="service-price">${service.price}</div>
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary"
            disabled={!selectedService}
            onClick={() => setCurrentStep(2)}
            style={{ opacity: !selectedService ? 0.5 : 1 }}
          >
            Continue
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="animate-in">
          <h3 style={{ marginBottom: '1.5rem', color: colors.gold }}>Choose Your Barber</h3>
          <div className="barber-grid">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className={`barber-card ${selectedBarber?.id === barber.id ? 'selected' : ''}`}
                onClick={() => setSelectedBarber(barber)}
              >
                <div className="barber-avatar">
                  {barber.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="barber-name">{barber.name}</div>
                <div className="barber-rating">★ {barber.rating}</div>
                <div style={{ fontSize: '0.75rem', color: colors.white + '80', marginTop: '0.5rem' }}>
                  {barber.specialty}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              disabled={!selectedBarber}
              onClick={() => setCurrentStep(3)}
              style={{ opacity: !selectedBarber ? 0.5 : 1 }}
            >
              Continue
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="animate-in">
          <h3 style={{ marginBottom: '1.5rem', color: colors.gold }}>Select Date & Time</h3>
          <div className="calendar-container">
            <input
              type="date"
              className="input-field"
              value={selectedDate || ''}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            
            {selectedDate && (
              <div className="time-slots">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(2)}>
              Back
            </button>
            <button
              className="btn btn-primary"
              disabled={!selectedDate || !selectedTime}
              onClick={() => setCurrentStep(4)}
              style={{ opacity: !selectedDate || !selectedTime ? 0.5 : 1 }}
            >
              Continue
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="animate-in">
          <h3 style={{ marginBottom: '1.5rem', color: colors.gold }}>Confirm Booking</h3>
          <div className="grid grid-2">
            <div className="booking-summary">
              <h4 style={{ color: colors.gold, marginBottom: '1rem' }}>Booking Details</h4>
              <div className="summary-item">
                <span className="summary-label">Service</span>
                <span className="summary-value">{selectedService?.name}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Barber</span>
                <span className="summary-value">{selectedBarber?.name}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Date</span>
                <span className="summary-value">{selectedDate}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Time</span>
                <span className="summary-value">{selectedTime}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Duration</span>
                <span className="summary-value">{selectedService?.duration}</span>
              </div>
              <div className="total-amount">
                Total: ${selectedService?.price}
              </div>
            </div>

            <div>
              <h4 style={{ color: colors.gold, marginBottom: '1rem' }}>Payment Method</h4>
              <div className="payment-methods">
                <div
                  className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard size={24} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Pay at Shop</div>
                    <div style={{ fontSize: '0.875rem', color: colors.white + '80' }}>
                      Cash or Card accepted
                    </div>
                  </div>
                </div>
                <div
                  className={`payment-option ${paymentMethod === 'prepay' ? 'selected' : ''}`}
                  onClick={() => setPaymentMethod('prepay')}
                >
                  <CreditCard size={24} />
                  <div>
                    <div style={{ fontWeight: 600 }}>Prepay Online</div>
                    <div style={{ fontSize: '0.875rem', color: colors.white + '80' }}>
                      Secure payment via Stripe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={() => setCurrentStep(3)}>
              Back
            </button>
            <button className="btn btn-primary" onClick={handleBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Client Appointments
function ClientAppointments() {
  const appointments = [
    {
      id: 1,
      service: 'Fade & Lineup',
      barber: 'Mike Johnson',
      date: '2026-02-05',
      time: '2:00 PM',
      status: 'confirmed',
      price: 45
    },
    {
      id: 2,
      service: 'Classic Cut',
      barber: 'Chris Davis',
      date: '2026-01-28',
      time: '11:00 AM',
      status: 'completed',
      price: 35
    },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">My Appointments</h1>
        <p className="content-subtitle">View and manage your bookings</p>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Barber</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt) => (
              <tr key={apt.id}>
                <td>{apt.service}</td>
                <td>{apt.barber}</td>
                <td>{apt.date}</td>
                <td>{apt.time}</td>
                <td>${apt.price}</td>
                <td>
                  <span className={`status-badge status-${apt.status}`}>
                    {apt.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    {apt.status === 'confirmed' && (
                      <>
                        <button className="icon-btn">
                          <Edit size={18} />
                        </button>
                        <button className="icon-btn danger">
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Client Profile
function ClientProfile() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">My Profile</h1>
        <p className="content-subtitle">Manage your account settings</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 className="card-title">Personal Information</h3>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input type="text" className="input-field" defaultValue="John Doe" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" className="input-field" defaultValue="john@email.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label className="input-label">Phone</label>
              <input type="tel" className="input-field" defaultValue="(555) 123-4567" />
            </div>
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>

        <div className="card">
          <h3 className="card-title">Preferences</h3>
          <div className="input-group">
            <label className="input-label">Preferred Location</label>
            <select className="select-field">
              <option>Main Street Location</option>
              <option>Downtown Location</option>
              <option>Westside Location</option>
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Preferred Barber</label>
            <select className="select-field">
              <option>No Preference</option>
              <option>Mike Johnson</option>
              <option>Chris Davis</option>
              <option>Marcus Brown</option>
            </select>
          </div>
          <button className="btn btn-primary">Update Preferences</button>
        </div>
      </div>
    </div>
  );
}

// Barber Views
function BarberViews({ currentView }) {
  if (currentView === 'barber-dashboard') return <BarberDashboard />;
  if (currentView === 'barber-schedule') return <BarberSchedule />;
  if (currentView === 'barber-clients') return <BarberClients />;
  if (currentView === 'barber-earnings') return <BarberEarnings />;
  return null;
}

// Barber Dashboard
function BarberDashboard() {
  const stats = [
    { label: 'Today\'s Appointments', value: '8', icon: Calendar },
    { label: 'This Week', value: '42', icon: Scissors },
    { label: 'This Month Earnings', value: '$3,240', icon: DollarSign },
    { label: 'Avg Rating', value: '4.9', icon: User },
  ];

  const todayAppointments = [
    { time: '9:00 AM', client: 'John Smith', service: 'Fade & Lineup', status: 'completed' },
    { time: '10:00 AM', client: 'Mike Wilson', service: 'Classic Cut', status: 'completed' },
    { time: '11:30 AM', client: 'David Brown', service: 'Beard Trim', status: 'confirmed' },
    { time: '2:00 PM', client: 'James Davis', service: 'Full Service', status: 'confirmed' },
    { time: '3:30 PM', client: 'Robert Johnson', service: 'Fade & Lineup', status: 'confirmed' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Dashboard</h1>
        <p className="content-subtitle">Welcome back, Mike!</p>
      </div>

      <div className="grid grid-4">
        {stats.map((stat, idx) => (
          <div key={idx} className={`card animate-in stagger-${idx + 1}`}>
            <div className="card-header">
              <div className="card-icon">
                <stat.icon size={24} />
              </div>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>Today's Schedule</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Client</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todayAppointments.map((apt, idx) => (
                <tr key={idx}>
                  <td>{apt.time}</td>
                  <td>{apt.client}</td>
                  <td>{apt.service}</td>
                  <td>
                    <span className={`status-badge status-${apt.status}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td>
                    {apt.status === 'confirmed' && (
                      <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                        Start Service
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Barber Schedule
function BarberSchedule() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">My Schedule</h1>
        <p className="content-subtitle">Manage your availability</p>
      </div>

      <div className="card">
        <h3 className="card-title">Weekly Schedule</h3>
        <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
          Schedule management interface would go here with day/time availability settings.
        </p>
      </div>
    </div>
  );
}

// Barber Clients
function BarberClients() {
  const clients = [
    { name: 'John Smith', visits: 12, lastVisit: '2026-01-25', favorite: 'Fade & Lineup' },
    { name: 'Mike Wilson', visits: 8, lastVisit: '2026-01-28', favorite: 'Classic Cut' },
    { name: 'David Brown', visits: 15, lastVisit: '2026-01-29', favorite: 'Full Service' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">My Clients</h1>
        <p className="content-subtitle">Client history and preferences</p>
      </div>

      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Search clients..." />
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Visits</th>
              <th>Last Visit</th>
              <th>Favorite Service</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr key={idx}>
                <td>{client.name}</td>
                <td>{client.visits}</td>
                <td>{client.lastVisit}</td>
                <td>{client.favorite}</td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Barber Earnings
function BarberEarnings() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Earnings</h1>
        <p className="content-subtitle">Track your income and commissions</p>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <div className="stat-value">$3,240</div>
          <div className="stat-label">This Month</div>
        </div>
        <div className="card">
          <div className="stat-value">$42,180</div>
          <div className="stat-label">Year to Date</div>
        </div>
        <div className="card">
          <div className="stat-value">65%</div>
          <div className="stat-label">Commission Rate</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="card-title">Recent Transactions</h3>
        <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
          Detailed earnings breakdown would be displayed here.
        </p>
      </div>
    </div>
  );
}

// Owner Views
function OwnerViews({ currentView }) {
  if (currentView === 'owner-dashboard') return <OwnerDashboard />;
  if (currentView === 'owner-analytics') return <OwnerAnalytics />;
  if (currentView === 'owner-staff') return <OwnerStaff />;
  if (currentView === 'owner-services') return <OwnerServices />;
  if (currentView === 'owner-locations') return <OwnerLocations />;
  if (currentView === 'owner-inventory') return <OwnerInventory />;
  if (currentView === 'owner-payroll') return <OwnerPayroll />;
  if (currentView === 'owner-settings') return <OwnerSettings />;
  return null;
}

// Owner Dashboard
function OwnerDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '$48,230', change: '+12.5%', icon: DollarSign },
    { label: 'Appointments Today', value: '127', change: '+8.2%', icon: Calendar },
    { label: 'Active Staff', value: '24', change: '+2', icon: Users },
    { label: 'Locations', value: '3', change: '0', icon: MapPin },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Business Dashboard</h1>
        <p className="content-subtitle">Overview of all locations</p>
      </div>

      <div className="grid grid-4">
        {stats.map((stat, idx) => (
          <div key={idx} className={`card animate-in stagger-${idx + 1}`}>
            <div className="card-header">
              <div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
              <div className="card-icon">
                <stat.icon size={24} />
              </div>
            </div>
            <div style={{ 
              color: stat.change.startsWith('+') ? '#10b981' : colors.red,
              fontSize: '0.875rem',
              fontWeight: 600,
              marginTop: '0.5rem'
            }}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginTop: '2rem' }}>
        <div className="card">
          <h3 className="card-title">Recent Bookings</h3>
          <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
            Real-time booking feed across all locations
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">Top Performing Staff</h3>
          <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
            Leaderboard based on revenue and customer ratings
          </p>
        </div>
      </div>
    </div>
  );
}

// Owner Analytics
function OwnerAnalytics() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Analytics</h1>
        <p className="content-subtitle">Business insights and reports</p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Revenue Analytics</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-secondary">
              <Download size={18} />
              Export Report
            </button>
            <button className="btn btn-secondary">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>
        <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
          Interactive charts showing revenue trends, popular services, peak hours, etc.
        </p>
      </div>
    </div>
  );
}

// Owner Staff Management
function OwnerStaff() {
  const staff = [
    { name: 'Mike Johnson', role: 'Barber', location: 'Main Street', status: 'active', rating: 4.9 },
    { name: 'Chris Davis', role: 'Barber', location: 'Downtown', status: 'active', rating: 4.8 },
    { name: 'Marcus Brown', role: 'Barber', location: 'Westside', status: 'active', rating: 4.9 },
    { name: 'Sarah Williams', role: 'Manager', location: 'Main Street', status: 'active', rating: 5.0 },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Staff Management</h1>
        <p className="content-subtitle">Manage your team</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add Staff Member
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member, idx) => (
              <tr key={idx}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.location}</td>
                <td>★ {member.rating}</td>
                <td>
                  <span className="status-badge status-confirmed">
                    {member.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn">
                      <Edit size={18} />
                    </button>
                    <button className="icon-btn">
                      <Settings size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Owner Services
function OwnerServices() {
  const services = [
    { name: 'Classic Cut', price: 35, duration: '30 min', active: true },
    { name: 'Fade & Lineup', price: 45, duration: '45 min', active: true },
    { name: 'Beard Trim', price: 25, duration: '20 min', active: true },
    { name: 'Hot Towel Shave', price: 40, duration: '30 min', active: true },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Services</h1>
        <p className="content-subtitle">Manage your service catalog</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx}>
                <td>{service.name}</td>
                <td>${service.price}</td>
                <td>{service.duration}</td>
                <td>
                  <span className="status-badge status-confirmed">
                    {service.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn">
                      <Edit size={18} />
                    </button>
                    <button className="icon-btn danger">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Owner Locations
function OwnerLocations() {
  const locations = [
    { name: 'Main Street', address: '123 Main St', staff: 8, status: 'active' },
    { name: 'Downtown', address: '456 Downtown Ave', staff: 10, status: 'active' },
    { name: 'Westside', address: '789 West Blvd', staff: 6, status: 'active' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Locations</h1>
        <p className="content-subtitle">Manage your barbershop locations</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add New Location
        </button>
      </div>

      <div className="grid grid-3">
        {locations.map((location, idx) => (
          <div key={idx} className="card">
            <div className="card-header">
              <MapPin size={24} color={colors.gold} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{location.name}</h3>
            <p style={{ color: colors.white + '80', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {location.address}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', color: colors.gold }}>
                {location.staff} Staff Members
              </span>
              <span className="status-badge status-confirmed">
                {location.status}
              </span>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
                <Edit size={16} />
                Edit
              </button>
              <button className="btn btn-secondary" style={{ flex: 1, padding: '0.5rem' }}>
                <Settings size={16} />
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Owner Inventory
function OwnerInventory() {
  const inventory = [
    { item: 'Clipper Oil', quantity: 24, reorderPoint: 10, status: 'in-stock' },
    { item: 'Shaving Cream', quantity: 8, reorderPoint: 15, status: 'low-stock' },
    { item: 'Hair Gel', quantity: 45, reorderPoint: 20, status: 'in-stock' },
    { item: 'Straight Razors', quantity: 12, reorderPoint: 8, status: 'in-stock' },
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Inventory</h1>
        <p className="content-subtitle">Track supplies and products</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add Item
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Reorder Point</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, idx) => (
              <tr key={idx}>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.reorderPoint}</td>
                <td>
                  <span className={`status-badge ${
                    item.status === 'in-stock' ? 'status-confirmed' : 
                    item.status === 'low-stock' ? 'status-pending' : 'status-cancelled'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="icon-btn">
                      <Edit size={18} />
                    </button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                      Reorder
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Owner Payroll
function OwnerPayroll() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Payroll & Commissions</h1>
        <p className="content-subtitle">Manage staff compensation</p>
      </div>

      <div className="grid grid-3">
        <div className="card">
          <div className="stat-value">$18,450</div>
          <div className="stat-label">Total Payroll This Month</div>
        </div>
        <div className="card">
          <div className="stat-value">$12,230</div>
          <div className="stat-label">Commissions Paid</div>
        </div>
        <div className="card">
          <div className="stat-value">65%</div>
          <div className="stat-label">Avg Commission Rate</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="card-title">Staff Payroll Summary</h3>
        <p style={{ color: colors.white + '80', marginTop: '1rem' }}>
          Detailed payroll breakdown by staff member with commission splits and payment history.
        </p>
      </div>
    </div>
  );
}

// Owner Settings
function OwnerSettings() {
  return (
    <div>
      <div className="content-header">
        <h1 className="content-title">Settings</h1>
        <p className="content-subtitle">Configure your business</p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 className="card-title">Business Information</h3>
          <div className="input-group">
            <label className="input-label">Business Name</label>
            <input type="text" className="input-field" defaultValue="Forever Faded" />
          </div>
          <div className="input-group">
            <label className="input-label">Contact Email</label>
            <input type="email" className="input-field" defaultValue="info@foreverfaded.com" />
          </div>
          <button className="btn btn-primary">Save Changes</button>
        </div>

        <div className="card">
          <h3 className="card-title">Payment Settings</h3>
          <div className="input-group">
            <label className="input-label">Stripe API Key</label>
            <input type="password" className="input-field" placeholder="sk_test_..." />
          </div>
          <div className="input-group">
            <label className="input-label">Default Commission Rate</label>
            <input type="number" className="input-field" defaultValue="65" />
          </div>
          <button className="btn btn-primary">Update Settings</button>
        </div>

        <div className="card">
          <h3 className="card-title">User Permissions</h3>
          <p style={{ color: colors.white + '80', marginBottom: '1rem' }}>
            Manage role-based access control (RBAC)
          </p>
          <button className="btn btn-secondary">Configure Roles</button>
        </div>

        <div className="card">
          <h3 className="card-title">Notifications</h3>
          <p style={{ color: colors.white + '80', marginBottom: '1rem' }}>
            Email and SMS notification preferences
          </p>
          <button className="btn btn-secondary">Configure Alerts</button>
        </div>
      </div>
    </div>
  );
}
