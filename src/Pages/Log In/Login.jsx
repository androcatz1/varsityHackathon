import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
import { LoginContext, userContext } from "../../App";

const Login = () => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const {formData, setFormData} = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Logging in with:", { email, password });
  
    if (formData.email === email && formData.password === password) {
      console.log("Login successful!");
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate("/");
      }, 1000);
    } else {
      console.log("Invalid email or password.");
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
