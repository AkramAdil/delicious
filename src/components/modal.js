import React from 'react';
import "./modal-style.css"
import {motion} from "framer-motion"
const Modal = ({targetMeal, stop,closeModal,imgHeader}) => {
    const modalaVariants = {
        open:{
            opacity:1,
            transation: {staggerChildren:0.5, delayChildren:0.2}
        },
        close:{opacity:0}
    }
    const imgVariants= {
        open:{opacity:1, y:"0vh"},
        close:{opacity:0, y:"-10vh"}
    }
    const infoVariants= {
        open: {opacity:1, transation:{staggerChildren:0.2},x:"0vh"},
        close:{opacity: 0,x:"-10vh"}
    }
    return (
        <motion.div className="modal" variants={modalaVariants} onClick={stop}>
            <i className="ri-close-line close" onClick={closeModal}></i>
            <motion.div className="head-img" variants={imgVariants}>
                <img src={imgHeader} alt=""/>
            </motion.div>
            <motion.h2 className="meal-name" variants={infoVariants}>{targetMeal.name}</motion.h2>
            <motion.ol className="ingrediants" variants={infoVariants}>
                {targetMeal.ingredients.map(item=>
                <li><img src={item.icon} alt=""/>{item.name}</li>
                )}
            </motion.ol>
            
        </motion.div>
    );
};

export default Modal;