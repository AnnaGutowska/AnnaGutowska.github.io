import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import PizzaApp from './PizzaApp.png';
import BookApp from './bookshelf.png';
import Website from './website.png';

import styles from "./Projects.module.css";

import { CCard, CCardTitle, CCardImage, CCardBody, CCardText, CButton } from '@coreui/bootstrap-react'

function Projects() {
  return (
   <section className={styles.container} id="projects">
         <h2 className={styles.title}>Projects</h2>
         <div className={styles.content}>
   
      <CCard style={{ width: '25rem' }}>
         <CCardImage orientation="top" rounded src={PizzaApp} className={styles.images} />

         <CCardBody>
            <CCardTitle>RU Pizzeria </CCardTitle>
            <CCardText>
            An Android app using JavaFX to develop the GUIs for taking pizza orders, placing the orders, and cancelling an order.
            The app keeps track of all the store orders, allowing the store staff to browse the store orders and
            cancel an order. This includes displaying all store orders by the customers' phone numbers, the order
            total for each order, and the list of pizzas in each order.
            </CCardText>
            <CButton href="https://github.com/AnnaGutowska/Pizza-App-for-Android.git">Source Code</CButton>
         </CCardBody>
      </CCard>

      <CCard style={{ width: '25rem' }}>
         <CCardImage orientation="top" rounded src={BookApp} className={styles.images} />

         <CCardBody>
            <CCardTitle>Bookshelf </CCardTitle>
            <CCardText>
            An iOS app built using Swift in order to allow users to store the title, author, and genre of their favorite books. 
            The app uses SQLite as the means of implementing a database engine for storing, editing, adding, and deleting the data pertaining to each book.  
            The title and author are entered as text fields and the genre is determined from a menu-style selection.
            
            </CCardText>
            <CButton href="https://github.com/AnnaGutowska/Bookshelf.git">Source Code</CButton>
         </CCardBody>
      </CCard>

      <CCard style={{ width: '25rem' }}>
         <CCardImage orientation="top" rounded src={Website} className={styles.websiteImage} />

         <CCardBody>
            <CCardTitle>Portfolio Website </CCardTitle>
            <CCardText>
            This website is another example of the projects I devote myself to in my free time. 
            This site was built using JavaScript, React, Bootstrap, HTML, and CSS. I used this project
            as a way to exhibit the hard work I have put in to developing as a young professional. Through
            my wide range of commitments and projects, I have always aimed to challenge myself to learn something new. 
            
            </CCardText>
            <CButton href="https://github.com/AnnaGutowska/Bookshelf.git">Source Code</CButton>
         </CCardBody>
      </CCard>
      </div>
   </section>
  
   )
}

export default Projects;

