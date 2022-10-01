import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { addProduct } from "../redux/CartRedux";
import { useDispatch } from "react-redux";

const Card = ({ data, imageData}) => {
    const {title, desc} =data;
    console.log(title,desc)
    const [product, setProduct]=useState(data)
    const dispatch = useDispatch();
  const handler = () => {
    
    dispatch(
      addProduct({ ...product})
    );
  };




  return (
    <li>
    <div className="food-menu-card">
    
    <div className="card-banner">
    <img src={imageData} width="300" height="300"
    alt="Wendy's Chicken" className="w-100"></img>
    
    <div className="badge">-15%</div>
    
    <button className="btn food-menu-btn" onClick={handler}>Order Now</button>
    </div>
    
    <div>
    
    <div className="rating-wrapper">
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    </div>
    </div>
    
    <h3 className="h3 card-title">{title}</h3>
    
    <div className="price-wrapper">
    
    <p className="price-text">Price:</p>
    
    <data className="price" value="49.00">$49.00</data>
    
    <del className="del">$69.00</del>
    
    </div>
    
    </div>
    </li>


          


  )
}

export default Card