import * as React from "react"
import Header from "../components/header";
import Body from "../components/body";
import "../styles/index.scss";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all";

// data


// markup
const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <div class ="main">
      <Header/>
      <Body/>
    </div>
  )
}

export default IndexPage
