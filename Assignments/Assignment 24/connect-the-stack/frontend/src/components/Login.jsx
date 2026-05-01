import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        form
      );
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      localStorage.setItem('name', res.data.name);
      navigate('/profile');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Welcome Back!</h2>

        <input
          style={styles.input}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button style={styles.btn} onClick={handleSubmit}>
          Login
        </button>

        {msg && <p style={styles.error}>{msg}</p>}

        <p style={styles.switch}>
          No account?{' '}
          <span
            style={styles.switchLink}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#f0f2f5'
  },
  box: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    width: '350px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  title: { textAlign: 'center', color: '#1a1a2e' },
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px'
  },
  btn: {
    padding: '12px',
    backgroundColor: '#1a1a2e',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  error: { textAlign: 'center', color: 'red' },
  switch: { textAlign: 'center', color: '#666' },
  switchLink: { color: '#e94560', cursor: 'pointer' }
};