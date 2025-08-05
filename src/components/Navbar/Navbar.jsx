import React from "react";
// import Resume from './Resume-Anna Gutowska.pdf';

import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <li className={styles.menuItems}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          {/* <a href={Resume} target="_blank">Resume</a> */}

        </li>
      </div>
    </nav>
  );
};
export default Navbar;


