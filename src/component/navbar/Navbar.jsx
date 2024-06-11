import React, { useContext, useState } from 'react'
import carts from '../myimg/cart_icon.png'
import shoplogo from '../myimg/logo.png'
import {Link} from "react-router-dom";
import { ShopContext } from "../mycontext/ShopContext";
import './Navbar.css'
function Navbar() {
  const [menu, setmenu] = useState('shop');
  const {getNumberOfItems} = useContext(ShopContext)
  return (
      <nav className='navbar'>
        <ul className='navleft'>
          <img src={shoplogo} alt="Loading.." />
          <li><Link style={{textDecoration:'none'}} to='/'>Prabhat<span>Center</span></Link></li>
        </ul>
        <ul className="navcenter">
          <li onClick={()=>{setmenu('shop')}}><Link style={{textDecoration:'none'}} active="true" to='/'>shop{menu==='shop'?<hr/>:''}</Link></li>
          <li onClick={()=>{setmenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>mens{menu==='mens'?<hr/>:''}</Link></li>
          <li onClick={()=>{setmenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>womens{menu==='womens'?<hr/>:''}</Link></li>
          <li onClick={()=>{setmenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>kids{menu==='kids'?<hr/>:''}</Link></li>
        </ul>
        <ul className='navright'>
          <Link onClick={()=>{setmenu('carts')}} to='/carts'><img src={carts} alt="Loadding.." /></Link>
          <li><p>{getNumberOfItems()}</p></li>
          <Link onClick={()=>{setmenu('login')}} to='/login' style={{textDecoration:'none'}}><button>Log In</button></Link>
        </ul>
      </nav>
  )
}

export default Navbar
