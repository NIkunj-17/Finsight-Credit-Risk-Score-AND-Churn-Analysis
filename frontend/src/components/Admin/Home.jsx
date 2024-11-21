import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api.js';
import '../styles/Home.scss'
import logo from '../assets/logo.png'
import Loader from './Loader.jsx';

function Home() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('employee');
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setAlert({ message: '', type: '' });
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ message: '', type: '' });
    setLoading(true);

    try {
      if (isRegister && role === 'admin') {
        await api.post('/api/auth/register', { username, email, password, role: 'admin' });
        setAlert({ message: 'Admin registered successfully. Please login.', type: 'success' });
        setIsRegister(false);
      } else {
        const response = await api.post('/api/auth/login', { email, password });
        const { token, role: userRole } = response.data;

        if (role !== userRole) {
          setAlert({ message: 'Role mismatch. Please select the correct role.', type: 'error' });
          return;
        }

        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);
        navigate(userRole === 'admin' ? '/admin-dashboard' : '/employee-dashboard');
      }
    } catch (error) {
      setAlert({ message: error.response?.data?.error || 'Failed to process request', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <div className="left-panel">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>Welcome to FinSight</h1>
        <p>Your trusted partner in credit analysis and risk management.</p>

        <div className="feature-highlights">
          <h3>Why Choose Us?</h3>
          <ul>
            <li><strong>Accurate Credit Scoring:</strong> Leveraging AI to ensure precise assessments.</li>
            <li><strong>Enhanced Security:</strong> Robust protocols for data privacy and protection.</li>
            <li><strong>24/7 Access:</strong> Real-time insights anytime, anywhere.</li>
          </ul>
          <p className="additional-info">
            Our cutting-edge analytics provide deep insights, helping you make informed financial decisions confidently.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="right-panel">
        <div className="form-container">
          <h1>{isRegister ? 'Admin Registration' : 'Login'}</h1>
          {alert.message && (
            <p className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {alert.message}
            </p>
          )}

          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit} className="form">
              {isRegister && (
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {!isRegister && (
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="role-select"
                >
                  <option value="employee">Employee Login</option>
                  <option value="admin">Admin Login</option>
                </select>
              )}

              <button type="submit" className="submit-button">
                {isRegister ? 'Register Admin' : 'Login'}
              </button>
            </form>
          )}

          {!isRegister && role === 'admin' && (
            <p className="toggle-text">
              New admin?{' '}
              <span onClick={toggleForm} className="toggle-link special-button">
                Register here
              </span>
            </p>
          )}
          {isRegister && (
            <p className="toggle-text">
              Already have an account?{' '}
              <span onClick={toggleForm} className="toggle-link special-button-alt">
                Login here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
