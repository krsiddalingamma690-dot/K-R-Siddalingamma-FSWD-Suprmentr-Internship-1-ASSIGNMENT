import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setData(res.data))
    .catch(() => setError('Unauthorized! Please login.'));
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>👤 My Profile</h2>
        {error && <p style={styles.error}>{error}</p>}
        {data && (
          <div style={styles.info}>
            <p>👋 <b>Message:</b> {data.message}</p>
            <p>🎭 <b>Role:</b> {data.user.role}</p>
            <p>🆔 <b>ID:</b> {data.user.id}</p>
          </div>
        )}
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
    width: '400px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  title: { color: '#1a1a2e', marginBottom: '20px' },
  info: { lineHeight: '2.5', fontSize: '16px' },
  error: { color: 'red' }
};