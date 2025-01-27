import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { HiMiniShoppingBag } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  return (
    <nav>
      <h2>Shop Here. <HiMiniShoppingBag  style={{color:"purple", filter:"grey", cursor:"pointer" }}/></h2>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
        <FiShoppingBag/>
        <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header
