import React, { useState } from 'react';

// Dummy user data (replace with your actual user data)
const users = [
  { email: 'alice@example.com', password: 'password123' },
  { email: 'bob@example.com', password: 'secret456' },
  { email: 'charlie@example.com', password: 'qwerty789' },
  // Add more users as needed
];

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userExists = users.some((user) => user.email === email && user.password === password);
    if (userExists) {
      // Successful login logic (e.g., redirect to dashboard)
      console.log('User logged in successfully!');
      setLoginError(false); // Clear the login error
    } else {
      // Display error message
      setLoginError(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('../../public/mymind-XUlsF9LYeVk-unsplash.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '300px',
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {loginError && <p className="text-danger mt-2">Invalid credentials. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
