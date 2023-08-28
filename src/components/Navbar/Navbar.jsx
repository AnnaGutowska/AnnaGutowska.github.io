import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <li className={styles.menuItems}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </li>
      </div>
    </nav>
  );
};
export default Navbar;


