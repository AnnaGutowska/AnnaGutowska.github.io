import React from "react";

import styles from "./About.module.css";

const About = () => {
    return(
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <li className={styles.aboutItem}> 
            Anna is a Data Scientist and technical content writer with a strong focus on artificial intelligence, data science, and education. With a background in Computer Science and Cognitive Science, she is particularly interested in the intriguing parallels between AI agents and human cognition and decision-making. Anna’s work is dedicated to empowering developers to effectively leverage advanced AI technologies in a user-friendly manner that enhances efficiency. Driven by her curiosity and commitment to innovation, she has concentrated much of her efforts on developing AI agents. Anna believes that these agentic systems can be utilized to free human resources for more complex and impactful tasks, rather than routine activities. Passionate about both sharing her expertise and learning from others, she holds the conviction that the best educators are those who continually seek knowledge.            
            </li>
        </div>

    </section> 
        
    );
};

export default About;
