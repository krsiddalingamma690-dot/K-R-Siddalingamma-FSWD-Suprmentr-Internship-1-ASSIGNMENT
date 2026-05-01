import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/signup',
        form
      );
      setMsg(res.data.message);
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMsg(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create Account</h2>

        <input
          style={styles.input}
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
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
        <select
          style={styles.input}
          name="role"
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button style={styles.btn} onClick={handleSubmit}>
          Sign Up
        </button>

        {msg && <p style={styles.msg}>{msg}</p>}

        <p style={styles.switch}>
          Already have account?{' '}
          <span
            style={styles.switchLink}
            onClick={() => navigate('/login')}
          >
            Login
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
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  msg: { textAlign: 'center', color: 'green' },
  switch: { textAlign: 'center', color: '#666' },
  switchLink: { color: '#e94560', cursor: 'pointer' }
};