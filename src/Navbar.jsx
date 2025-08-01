import { useEffect, useRef, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { IoCloseSharp, IoLogoReact, IoCart } from "react-icons/io5";
import {
  MdMenu,
  MdOutlineAccountCircle,
  MdOutlineSearch,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircleOutline, IoMdLogIn } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ search, setSearch, cart }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <nav className={styles.reactContainer}>
        <Link to="/">
          <span className={styles.react}>
            <IoLogoReact
              style={{ fontSize: "30px", width: "50px", fontWeight: "bold" }}
            />
            <span>React Ecommerce</span>
          </span>
        </Link>

        <div className={styles.navContainer}>
          <Link to="/">
            <span className={styles.navs}>Home</span>
          </Link>

          <Link to="/about">
            <span className={styles.navs}>About</span>
          </Link>

          <Link to="/contact">
            <span className={styles.navs}>Contact</span>
          </Link>

          <div className={styles.searchContainer}>
            <input
              type="text"
              value={search}
              placeholder="Search for products"
              onChange={(e) => setSearch(e.target.value)}
              className={styles.inputBox}
            />
            <span
              style={{
                position: "absolute",
                right: "15px",
                padding: "5px",
                fontSize: "1.2em",
              }}
            >
              <MdOutlineSearch />
            </span>
          </div>

          <Link to="/cart">
            <span
              style={{
                color: "#ffff",
                fontSize: "18px",
                marginLeft: "10px",
                position: "relative",
                padding: "10px",
                borderRadius: "2px",
              }}
            >
              <BsCartCheckFill />
              <span style={{ position: "absolute", top: "0", right: "0" }}>
                {cart?.length || 0}
              </span>
            </span>
          </Link>

          <Link to="login">
            <span className={styles.navs}>
              <MdOutlineAccountCircle style={{ fontSize: "20px" }} />
            </span>
          </Link>
        </div>

        <div className={styles.menuIcon} onClick={() => setIsSidebarOpen(true)}>
          <MdMenu size={24} />
        </div>
      </nav>

      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        ref={sidebarRef}
      >
        <div
          className={styles.closeIcon}
          onClick={() => setIsSidebarOpen(false)}
        >
          <IoCloseSharp size={24} />
        </div>

        <div className={styles.sidebarSearchContainer}>
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className={styles.sidebarInput}
          />
          <span className={styles.sidebarSearchIcon}>
            <MdOutlineSearch />
          </span>
        </div>

        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
          <FaHome />  Home
        </Link>
        <Link to="/about" onClick={() => setIsSidebarOpen(false)}>
          <IoIosInformationCircleOutline />  About
        </Link>
        <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>
         <BiSolidPhoneCall />  Contact
        </Link>
        <Link to="/cart" onClick={() => setIsSidebarOpen(false)}>
          <IoCart />  Cart ({cart?.length || 0})
        </Link>
        <Link to="/login" onClick={() => setIsSidebarOpen(false)}>
          <IoMdLogIn />  Login
        </Link>
      </div>
    </div>
  );
}
