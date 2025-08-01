
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { CiUser, CiMail,CiLock } from "react-icons/ci";


export default function Register() {
  const [form, setForm] = useState({
    name: "",
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
    localStorage.setItem("user", JSON.stringify(form));
    console.log("Form submitted", form);
    navigate("/login");
  };

  return (
   
    <div className={styles.container}>
        <h2 className={styles.heading}>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <CiUser className={styles.icon} />
            <input
              className={styles.modernInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>

          <div className={styles.inputBox}>
            <CiMail className={styles.icon} />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className={styles.inputBox}>
            <CiLock className={styles.icon} />
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
          <button className={styles.inputButton} type="submit">
            Register
          </button>
          </div>
        </form>
    </div>
  );
}
