import React from 'react';
import styles from "./Experience.module.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return(
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
        
            <VerticalTimeline
                lineColor = '#f7eef7'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f7eef7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    
                    date="Sep 2021 - present"
                    iconStyle={{ background: 'rgb(207, 132, 201)', color: '#ffffff' }}
                   
                >
                    <h3 className="vertical-timeline-element-title">Data Science Research Assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">New Brunswick, NJ</h4>
                    <p>
                    ➤ Developed Python and R scripts to analyze trends in CDC-related and other COVID-19-related posts.
                    <br></br>
                    ➤ Produced co-occurrence networks, sentiment analysis, data visualization, BERTopic modeling, qualitative coding, etc.
                    <br></br>
                    ➤ Collected Twitter and Reddit data from throughout the COVID pandemic using various APIs.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f7eef7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    date="Mar 2021 - present"
                    iconStyle={{ background: 'rgb(207, 132, 201)', color: '#ffffff' }}
                   
                >
                    <h3 className="vertical-timeline-element-title">Data Engineer</h3>
                    <h3 className="vertical-timeline-element-title">The Percentage Project</h3>
                    <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
                    <p>
                    ➤ Collected, analyzed, cleaned, and visualized data through campus-wide surveys of 1,300+ students in tech fields. 
                    <br></br>
                    ➤ Executed year-by-year comparative inter-school analysis of the survey results using Python and R.
                    <br></br>
                    ➤ Maintained the organization's AWS cloud database management system.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f7eef7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    date="Jun 2022 - Aug 2022"
                    iconStyle={{ background: 'rgb(207, 132, 201)', color: '#ffffff' }}
                   
                >
                    <h3 className="vertical-timeline-element-title">Full-Stack Developer Intern</h3>
                    <h3 className="vertical-timeline-element-title">Rutgers University Computer Science Department </h3>
                    <h4 className="vertical-timeline-element-subtitle">New Brunswick, NJ</h4>
                    <p>
                    ➤ Designed and developed wireframes of a new grading platform, CodeBench using JavaScript and React.
                    <br></br>
                    ➤ Collaborated with You.com to integrate its search engine within the platform now used by 300+ Rutgers students. 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f7eef7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="Jun 2021 - Aug 2021"
                    iconStyle={{ background: 'rgb(207, 132, 201)', color: '#ffffff' }}
                   
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                    <h3 className="vertical-timeline-element-title">Adventure Networks</h3>
                    <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
                    <p>
                    ➤ Engineered front-end features in the interactive chatroom platform, trychats, using JavaScript, CSS, and HTML.
                    <br></br>
                    ➤ Researched NFTs, gpt-3, decentralized networks, blockchain technology, and artificial intelligence. 
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <br></br>
            <br></br>

       
                <h2 className={styles.otherExperience}>Other Notable Involvements</h2>
                    <ul>
                        <li className={styles.experienceItem}>Chief Technology Officer of the Polish Youth Association <br></br> (March 2021 - Present)</li>
                        <li className={styles.experienceItem}>Computer Science Peer Tutor   (Jan 2023 - May 2023)</li>
                        <li className={styles.experienceItem}>Rutgers Polish Club President   (Sep 2020 - May 2023)</li>
                    </ul>
            </section> 
    );
};

export default Experience;
