import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Addproduct from './pages/Addproduct'
import Admin from './pages/Admin'
import CartItem from './pages/CartItem'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/addproduct" element={<Addproduct/>} />
    <Route exact path="/cart" element={<CartItem/>} />
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/admin" element={<Admin />}/>
    </Routes>
    </Router>
    
  )
}

export default App