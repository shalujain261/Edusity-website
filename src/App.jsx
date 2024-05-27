import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/Programs/Program'
import Title from './component/Title/Title'
import About from './component/About/About'
import CampusGallery from './component/Campus/CampusGallery'
import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import VideoPlayer from './component/videoPlayer/VideoPlayer'

function App() {


  const [playState,setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <CampusGallery/>
      <Title subTitle='TESTIMONIALS' title='What Students says'/>
      <Testimonial />
      <Title subTitle='Contact Us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App