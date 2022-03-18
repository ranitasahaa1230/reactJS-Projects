import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
           <ul className='nav'>
               <li className='prod'>
               <Link to='/' className='prod1'>Products</Link>
               </li>
               <li className='prod'>
               <Link to='/cart'className='prod1'>Cart</Link>
               </li>
           </ul>
        </div>
  )
}
