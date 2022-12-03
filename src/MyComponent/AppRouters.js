import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Register from './Register'

function AppRouters() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-info bg-container">
  <div className="container-fluid">
      <NavLink className="navbar-brand" to="/home"><b>AUCTION PORTAL</b></NavLink>
      <NavLink className="navbar-brand" to="/add"><b>PRODUCTS</b></NavLink>
      <NavLink className="navbar-brand" to="/login"><b>LOG IN</b></NavLink>
        
      
      <NavLink className="navbar-brand" to="/register"><b>REGISTER</b></NavLink>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/add' element={<Products/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
</Routes>


    </>


  )
}

export default AppRouters