import React from 'react';
import {motion} from "framer-motion"

import "./overlay.css"
const Overlay = ({children, close}) => {
    const variants = {
        open:{backgroundColor:"rgba(0,0,0,0.6)"},
        close:{backgroundColor:"rgba(0,0,0,0)"}
    }
    return (
        <motion.div className="overlay" key={"overlay"} onClick={close} variants={variants} initial={"close"} exit={"close"} animate={"open"}>
            {children}
        </motion.div>
    );
};

export default Overlay;