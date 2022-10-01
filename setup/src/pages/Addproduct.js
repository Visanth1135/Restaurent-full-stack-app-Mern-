import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './forms.css'
const Addproduct = () => {
  const [title, setTitle]=useState('')
  const [desc, setDesc]=useState('')
  const [category, setCategory]=useState('')
  const [img, setImg]=useState([])
  const [rating, setRating]=useState('')
  const [dprice, setDprice]=useState('')
  const [price, setPrice]=useState('')
  const [response, setResponse]=useState('')
  
console.log(img)
const fileuploadhandler=(e)=>{
e.preventDefault();
  const fd = new FormData();
  fd.append('title', title)
  fd.append('desc', desc)
  fd.append('category', category)
  fd.append('testImage', img)
  fd.append('rating', rating)
  fd.append('dprice', dprice)
  fd.append('price', price)
  const config ={
    headers:{
      'content-type':'multipart/form-data',
    },
  }
  
  console.log(fd)
 axios.post('http://localhost:3002/api/products',
  fd, config
 ).then((res)=>setResponse(res.data)
 )
 
}

  return (
    <div className="wrapper">
        <div className="title">
          Add Product
         </div>
        <form className="form" onSubmit={fileuploadhandler}>
        <div className="inputfield">
        <label>Title</label>
        <input  onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
        <label>Description</label>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
        <label>Category</label>
        <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
         <label>Image</label>
         <input type="file" onChange={(e)=>setImg(e.target.files[0])} className="input"/>
         </div> 
         <div className="inputfield">
         <label>Rating</label>
         <input onChange={(e)=>setRating(e.target.value)} value={rating} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
         <label>Discount Price</label>
         <input onChange={(e)=>setDprice(e.target.value)} value={dprice} type="text" className="input"></input>
         </div> 
         <div className="inputfield">
         <label>Price</label>
         <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" className="input"></input>
         </div> 
         <button className='btn-btn'>Submit</button>
         <p>{response}</p>
         </form>
    </div>	
  )
}

export default Addproduct