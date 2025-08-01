import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === form.email && user.password === form.password) {
      console.log("Login successful:", user);
      navigate("/");
    } else {
      console.error("Invalid email or password");
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <h2 style={{color:'black'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        </div>
        <br />
        <div className={styles.inputBox}>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        </div>
        
        <div className={styles.buttonContainer}>
        <button className={styles.inputButton} type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account?
        <span
          style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}
