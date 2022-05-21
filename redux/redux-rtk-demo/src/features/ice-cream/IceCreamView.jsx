import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IceCreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecream=useSelector(state=>state.icecream.numOfIcecream)//accepts fuunc as its paramt
    const dispatch=useDispatch()
  return (
<>
    <div>No. of icecream-{numOfIcecream}</div>
    <button onClick={()=>dispatch(ordered())}>Order icecream</button>
    <input value={value} type="number" onChange={(e)=>setValue(parseInt(e.target.value))}/>
    <button onClick={()=>dispatch(restocked(value))}>Restock icecream</button>
    </>
  )  
}
