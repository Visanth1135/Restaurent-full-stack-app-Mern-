import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import p1 from '../images/about-banner.png'
import p2 from '../images/sale-shape-red.png'
import { useEffect } from 'react';
import { duration } from '@material-ui/core';
const About = () => {
  useEffect(()=>{
    AOS.init({duration:500,offset:200});
  },[])
  return (
    <section className ="section section-divider gray about" id="about">
        <div className ="container">
        
        <div className ="about-banner" data-aos='fade-right'>
        <img src={p1} width="509" height="459" loading="lazy" alt="Burger with Drinks"
        className ="w-100 about-img"></img>
        
        <img src={p2} width="216" height="226" alt="get up to 50% off now"
        className ="abs-img scale-up-anim"></img>
        </div>

          <div className ="about-content">

            <h2 className ="h2 section-title" data-aos='fade-down'>
              Caferio, Burgers, and Best Pizzas
              <span className ="span">in Town!</span>
            </h2>

            <p className ="section-text" data-aos='fade-left'>
              The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
              the Jurchen
              invasion of the 1120s, while it is also known that many restaurants were run by families.
            </p>

            <ul className ="about-list" data-aos='fade-right'>

              <li className ="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className ="span">Delicious & Healthy Foods</span>
              </li>

              <li className ="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className ="span">Spacific Family And Kids Zone</span>
              </li>

              <li className ="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className ="span">Music & Other Facilities</span>
              </li>

              <li className ="about-item">
                <ion-icon name="checkmark-outline"></ion-icon>

                <span className ="span">Fastest Food Home Delivery</span>
              </li>

            </ul>

            <button className ="btn btn-hover" data-aos='fade-left'>Order Now</button>

          </div>

        </div>
      </section>
  )
}

export default About