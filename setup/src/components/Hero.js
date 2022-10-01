import React from 'react'
import myImage from '../images/hero-banner-sg.jpg'
import p1 from '../images/hero-vg.png'
import p2 from '../images/hero-banner-bg.png'
import p3 from '../images/hero-pan.png'
import p4 from '../images/tikkakarahi.png'
import { motion, useAnimation, useScroll } from "framer-motion/dist/framer-motion";
import { inView, useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const boxVariant = {
  // visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  first: { display:'block' },
  exit: { rotate: 270, transition: { duration: 1 } }
};

const Hero = () => {
  const scrollRef = useRef(null);
  const control = useAnimation();
  const { scrollY } = useScroll();
  const [ref, inView] = useInView({ threshold: 0.2 });
  console.log(inView);
  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  // }, [control, inView]);
  useEffect(() => {
    return scrollY.onChange((e) => {
       if (e > 50) control.start("exit");
      console.log("Page scroll: ", e);
    });
  }, []);
  return (
    <section className="hero" style={{ backgroundImage: `url(${myImage})` }} id='hero'>
    <div className="container">

      <div className="hero-content">

        <p className="hero-subtitle">Eat Sleep And</p>

        <h2 className="h1 hero-title">Supper delicious Burger in town!</h2>

        <p className="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>

        <button className="btn">Book A Table</button>

      </div>

      <figure className="hero-banner">
        <img src={p1}  alt="" aria-hidden="true"
          className="hero-img-bg"></img>

        <img src={p2} alt="Burger"
          className="hero-img"></img>
         

          <motion.img 
          ref={ref} 
          initial="first"
          animate={control}
          variants={boxVariant}
          src={p4} alt="Burger"
          className="hero-pan"></motion.img>
      </figure>

    </div>
  </section>
  )
}

export default Hero