
import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {detailCardById} from '../actions'
import s from "./activity.module.css"



function Activity() {
  const oneById = useSelector((state) => state.oneById)

  const dispatch = useDispatch()
  let { id } = useParams(); 
  useEffect(() =>{
  dispatch(detailCardById(id))
  /* console.log(id) */
  },[id])
  
  return (
    
    <div>{oneById.activities?.map ((e) => {
     /*  /* console.log(oneById.activities,  "esteee") */
      return(
         <div className={`${s.activity_actvDiv}`} key={e.id}>
          <p>Activity: {e.name}</p>
          <p>Difficulty: {e.difficulty}</p>
          <p>Duration: {e.duration}</p>
          <p>Season: {e.season}</p>
          </div>)})} 
</div>
  )
}

export default Activity