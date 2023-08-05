import React from "react"
import img1 from "../images/Group.png"
import img2 from "../images/Layer_28.png"
import img3 from "../images/Layer_49.png"
import img4 from "../images/Layer_26.png"
import { useNavigate } from "react-router-dom"

const Navbar =()=>{
const navigate =useNavigate()

    return(
        <div>

        <div className="header">
            <h2 onClick={()=>navigate("/")}>TravelMedia.in</h2>
            <div className="center-icon">
               <img src={img1} alt="icon" onClick={()=>navigate("/")}/> 
               <img src={img2} alt="icon"/> 
               <img src={img3} alt="icon" onClick={()=>navigate("/detail/1")}/> 
               <img src={img4} alt="icon"/> 
            </div>
          </div>

        </div>
    )
}
export default Navbar