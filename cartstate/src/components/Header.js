import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

export default function Header({cart}) {
  return (
    <div>
           <ul className='nav'>
               <li className='prod'>
               <Link to='/' className='prod1'>Products</Link>
               </li>
               <li className='prod'>
               <Link to='/cart'className='prod1'>Cart-<span>{cart.length}</span></Link>
               </li>
           </ul>
        </div>
  )
}
