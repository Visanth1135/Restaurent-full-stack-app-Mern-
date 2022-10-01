import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '../images/dashboard.PNG'

const Admin = () => {
  return (
    <div className='admin-container'>
    <img src={myImage} alt=''/>
    <Link to = "/addproduct">
    <button>Add Product</button>
    </Link>
    </div>
  )
}

export default Admin