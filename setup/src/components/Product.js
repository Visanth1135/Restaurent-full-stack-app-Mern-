import React from 'react'
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import Card from './Card';

const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('')
  const [products,setProducts] = useState([])
  useEffect(()=>{
    AOS.init({duration:500});
  },[])
  useEffect(()=>{
    axios.get("http://localhost:3002/api/products").then((res)=>{
      setProducts(res.data)
      setData(res.data)})
      .catch((err) => console.log(err, "it has an error"));
    
  },[])
  console.log(filter)
  useEffect(()=>{
let newproducts=data.filter((p)=>{
  if(filter==='All'){return p}
  else {return p.category===filter}
})
setProducts(newproducts)
  },[filter])
  
  console.log(products)
  return (
    <section className="section food-menu" id="food-menu">
        <div className="food-container">

          <p className="section-subtitle" data-aos='fade-up'>Popular Dishes</p>

          <h2 className="h2 section-title" data-aos='fade-up'>
            Our Favorite <span className="span">Cuisines</span>
          </h2>

          <ul className="fiter-list" data-aos='fade-up'>

            <li>
              <button onClick={()=>setFilter('All')} className="hover-underline-animation">All</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Pizza')} className="hover-underline-animation">Pizza</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Burger')} className="hover-underline-animation">Burger</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Drinks')} className="hover-underline-animation">Drinks</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Sandwich')} className="hover-underline-animation">Sandwich</button>
            </li>
            <li>
              <button onClick={()=>setFilter('Chinese')} className="hover-underline-animation  active">Chinese</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Arabic')} className="hover-underline-animation">Arabic</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Indian')} className="hover-underline-animation">Indian</button>
            </li>

            <li>
              <button onClick={()=>setFilter('juices')} className="hover-underline-animation">Juices</button>
            </li>

            <li>
              <button onClick={()=>setFilter('Snacks')} className="hover-underline-animation">Snacks</button>
            </li>

          </ul>
          </div>
          <ul className="food-menu-list" data-aos='fade-up'>
          {products.map((singleData) => {
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(singleData.img.data.data))
            );
            const imageData = `data:image/png;base64,${base64String}`
            return <Card key = {singleData.id} data={singleData} imageData={imageData} />
          })}
          </ul>
          </section>
  )
}

export default Product