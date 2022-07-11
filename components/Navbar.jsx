import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'

import { useStateContextVar } from '../context/StateContext'



const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContextVar();
  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">DS Headphones</Link>
      </p>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar