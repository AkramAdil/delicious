import React, { useRef, useState, useEffect } from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import Card from "./card"
import Modal from "../modal";
import Overlay from "../overlay"
import "./section-style.css"
const Section = ({name,meals,imgHeader}) => {
    const [width,setWidth] = useState(0) // the width where slider end
    const [close, setClose] = useState(false) // for open and close overlay and modal
    const [targetMeal, setTargetMeal] = useState({}) // contains data that modal present
    const openModal = (name,ingredients)=>{
        setTargetMeal({name:name,ingredients:ingredients})
        setClose(true)
    }
   const closeModal = ()=>{
       setClose(false)
    }
    const carousel = useRef()
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    const stop = (e)=>{ //prevent closing the modal when clicking the modal
        e.stopPropagation()
    }
    return (
      <section className={"meal-sec "+ name}>
        <h1 className="meal-name">{name}</h1>
        <motion.div className="meals" ref={carousel}>
            <motion.div className="slider "drag="x" dragConstraints={{right: 0, left:-width}}>
                {meals.map(meal=>
                    <Card pic={meal.pic} name={meal.name} ingredients={meal.ingredients} openModal={openModal} type={meal.type}/>
                )}
            </motion.div>
            <AnimatePresence>

                {close&&<Overlay close={closeModal}><Modal targetMeal={targetMeal} stop={stop} closeModal={closeModal} imgHeader={imgHeader}/></Overlay>}
            </AnimatePresence>
        </motion.div>
      </section>
    );
};

export default Section;