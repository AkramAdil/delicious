import React from 'react';
import dish from "./../assets/dish.png"
import {ReactComponent as Blob} from './../assets/blob.svg';
import {ReactComponent as Blob2} from './../assets/blob-2.svg';
import { motion } from "framer-motion"
import Navbar from './navbar';
import "./header-style.css"
/*
initial={{x: 700,}}
                         animate={{x: 0, rotate: 360}} transition={{
                             type: 'tween',
                             ease: 'easeInOut',
                             duration: 2,}}
*/
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Navbar/>
                    <div className="hero">
                        <Blob className="blob sahpe"/>
                        <Blob2 className="blob2 sahpe"/>
                        <Blob2 className="blob3 sahpe"/>
                        <div className="about">
                            <h1>Discover Delicous Recipes</h1>
                            {/*<p className="slogan">Good food. Good mood.</p>*/}
                            <p className="discription">Cook Your lovely meals in home by yourself. See and discover all meals, learn more about and share it with your friends</p>
                            <button>Discover</button>
                        </div>
                        <motion.div className="dish">
                            <img src={dish} alt="dish"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;