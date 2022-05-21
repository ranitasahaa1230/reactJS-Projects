import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView=() => {
    const numOfCakes=useSelector(state=>state.cakes.numOfCakes)
    const dispatch=useDispatch()
  return (
    <>
    <div>No. of cakes- {numOfCakes}</div>
    <button onClick={()=>dispatch(ordered())}>Order cakes</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock cakes</button>
    </>
  )
}
