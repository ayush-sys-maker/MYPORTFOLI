import React from 'react'
import './index.css'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Projects from './project'
import Footer from './footer'



function App() {
    return (
        <div  className="App"   >
         <Navbar/>
         <Hero/>
         <About/>
         <Projects/>
         <Footer/>

          
        </div>
    )
}
export default App
