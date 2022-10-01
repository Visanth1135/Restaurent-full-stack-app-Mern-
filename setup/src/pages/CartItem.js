import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem} from "../redux/CartRedux";

const CartItem = () => {
  const dispatch = useDispatch();
  const {products, total} = useSelector((store)=>store.cartReducer)
  console.log(products)
  return (
    <div>
    
    <ul className="food-menu-list">
    {products.map((p)=>{
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(p.img.data.data))
      );
      const imageData = `data:image/png;base64,${base64String}`
      return(
        <li>
        <div className="food-menu-card">
        
        <div className="card-banner">
        
        <img src={imageData} width="300" height="300"
        alt="Wendy's Chicken" className="w-100"></img>
        
        <div className="badge">-15%</div>
        
        <button className="btn food-menu-btn" onClick={() => dispatch(removeItem(p.title))}>Remove</button>
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
        
        <h3 className="h3 card-title">{p.title}</h3>
        
        <div className="price-wrapper">
        
        <p className="price-text">Price:</p>
        
        <data className="price" value="49.00">$49.00</data>
        
        <del className="del">$69.00</del>
        
        </div>
        
        </div>
        </li>

      )
    })}
    </ul>
    <button className="cart-btn"> Proceed to Chechout</button>
    </div>
  );
};

export default CartItem;