import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "./ratting.css"

const Ratting = () => {
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)
  return (
   <>
   <span className="ratting">
    {[...Array(5)].map((star,index) =>{
      const currentRating = index + 1;
      return(
        <label key={index}>          
          <FaStar size={15}
           className="star"
           color={currentRating <= (hover || rating) ? "#ffc107" : "#404040"}
           onMouseEnter={()=> setHover(currentRating)}
           onMouseLeave={()=> setHover(null)}
           />
          <input className="star-input" type="radio" name="rating" value={currentRating} onClick={()=>setRating(currentRating)}/>
        </label>
      )
    })}
    {/*rating has the result of the rating*/}
   </span>
   </>
  )
}

export default Ratting