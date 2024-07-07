import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Skills from "./Components/Skills"
import Education from "./Components/Education"
import Projects from "./Components/Projects"
import projects from './data'
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Projects projects = {projects}/>
        <Contact/>
        <Footer/>
      </div>
      <Toaster/>
    </>
  )
}

export default App

