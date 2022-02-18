import React, { useRef } from "react"
import Home from "./home";
import About from "./about";
import Mywork from "./mywork";
import Contact from "./contact"; 
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const Body = () => {
    const refSlide = useRef(null);
    return (
    <div class="body">
        {/* <Home/>
        <About/>
        <Mywork/>
        <Contact/> */}
    </div>
)}

export default Body;