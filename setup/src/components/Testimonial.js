import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useInView } from "react-intersection-observer";
import p1 from '../images/avatar-1.jpg'
import p2 from '../images/avatar-2.jpg'
import p3 from '../images/avatar-3.jpg'
import { useEffect } from 'react';


const Testimonial = () => {
  const [ref, inView] = useInView();
  
  useEffect(()=>{
    AOS.init({duration:1000,delay:500});
  },[inView])
  return (
    <section ref={ref} className="section section-divider white testi" id='testi'>
        <div className="container">

          <p className="section-subtitle" data-aos='fade-up'>Testimonials</p>

          <h2 className="h2 section-title" data-aos='fade-up'>
            Our Customers <span className="span">Reviews</span>
          </h2>

          <p className="section-text" data-aos='fade-up'>
            Food is any substance consumed to provide nutritional
            support for an organism.
          </p>

          <ul className="testi-list has-scrollbar" data-aos='fade-up'>

            <li className="testi-item">
              <div className="testi-card">

                <div className="profile-wrapper">

                  <figure className="avatar">
                    <img src={p1} width="80" height="80" loading="lazy" alt="Robert William"></img>
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Robert William</h3>

                    <p className="testi-title">CEO Kingfisher</p>
                  </div>

                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to personally thank you for your outstanding
                  product."
                </blockquote>

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>
            </li>

            <li className="testi-item">
              <div className="testi-card">

                <div className="profile-wrapper">

                  <figure className="avatar">
                    <img src={p2} width="80" height="80" loading="lazy" alt="Thomas Josef"></img>
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Thomas Josef</h3>

                    <p className="testi-title">CEO Getforce</p>
                  </div>

                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to personally thank you for your outstanding
                  product."
                </blockquote>

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>
            </li>

            <li className="testi-item">
              <div className="testi-card">

                <div className="profile-wrapper">

                  <figure className="avatar">
                    <img src={p3} width="80" height="80" loading="lazy" alt="Charles Richard"></img>
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Charles Richard</h3>

                    <p className="testi-title">CEO Angela</p>
                  </div>

                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to personally thank you for your outstanding
                  product."
                </blockquote>

                <div className="rating-wrapper">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Testimonial