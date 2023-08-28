import React from "react";

import styles from "./Intro.module.css";
import headshot from './headshot.png';

const Intro = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Anna</h1>
          <p className={styles.description}>
            I'm a full-stack developer with 5 years of experience using React and
            NodeJS. Reach out if you'd like to learn more!
          </p>
          <li className={styles.buttons}>
                <a href="mailto:annagutowskaaa@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
                <a href="https://www.linkedin.com/in/anna-gutowska/" className={styles.contactBtn}>
                    Connect on LinkedIn
                </a>
            </li>
        </div>
        <img
            src={headshot}
            alt="My Headshot"
            className={styles.introImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      </section>
    );
};

export default Intro;