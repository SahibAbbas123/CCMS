import React, { useState } from "react";

// Dummy user data
const users = [
  { email: "alice@example.com", password: "password123" },
  { email: "bob@example.com", password: "secret456" },
  { email: "charlie@example.com", password: "qwerty789" },
  // Add more users as needed
];

// Function to check if a user exists
function isUserValid(email: string, password: string): boolean {
  return users.some(
    (user) => user.email === email && user.password === password
  );
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUserValid(email, password)) {
      // Successful login logic (e.g., redirect to dashboard)
      console.log("Login successful!");
      setLoginError(false);
    } else {
      // Display error message
      setLoginError(true);
    }
  };

  return (
    <div
      className="container"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
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
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {loginError && (
          <p className="text-danger mt-2">
            Invalid credentials. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
