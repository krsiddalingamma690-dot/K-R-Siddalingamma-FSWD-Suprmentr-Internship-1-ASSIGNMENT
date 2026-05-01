import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>
      <div style={styles.links}>
        {!token ? (
          <>
            <Link to="/signup" style={styles.link}>Signup</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </>
        ) : (
          <>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/admin" style={styles.link}>Admin</Link>
            <button onClick={logout} style={styles.btn}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#1a1a2e',
    color: 'white'
  },
  logo: { color: '#e94560', margin: 0 },
  links: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px'
  },
  btn: {
    backgroundColor: '#e94560',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};