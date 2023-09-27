import React from "react";

import styles from "./About.module.css";

const About = () => {
    return(
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <li className={styles.aboutItem}> 
                    I'm a 2023 graduate of the Rutgers University Honors College and my passion is technology. 
                    My degree being Computer Science as well as Cognitive Science was the perfect way for me to explore the parallels between our human minds and the processing power of computers.
                    My interests include data science and analysis, human-computer interaction, artificial intelligence, and bioinformatics.           
            </li>
        </div>
    </section> 
        
    );
};

export default About;
