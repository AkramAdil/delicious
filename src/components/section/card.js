import React, { useState } from 'react';
import {motion} from "framer-motion"
import "./card-style.css"

const Card = ({pic,name,type,ingredients,openModal}) => {
    const [love,setLove] = useState("")
    const like = (e)=>{
        e.stopPropagation()
        if(love==="active") {
            setLove("")
        } else {
            setLove("active")
        }
    }
    return (
        <>     
            <motion.div className="card" onClick={()=>openModal(name,ingredients)} whileHover={{scale:1.1}}>
                <div className="foodImg">
                    <img src={pic} alt="burger"/>
                </div>
                <div className="details">
                    <div className="info">
                        <p className="name">{name}</p>
                        <p className="type">{type}</p>
                    </div>
                    {
                        love?<i className={"ri-heart-fill love "+love} onClick={like}></i>:
                        <i className={"ri-heart-line love"} onClick={like}></i>
                    }
                </div>
            </motion.div>
            
        </>
    );
};

export default Card;