import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Product/>
    <Content/>
    <Testimonial/>
    <Contact/>
    </div>
  )
}

export default Home