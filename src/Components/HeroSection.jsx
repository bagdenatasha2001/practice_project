import React from 'react'
import img from '../assets/bg_image.jpeg'

export default function HeroSection() {
  return (
    <>
          <section className="w-full">
                  <img src={img} alt=" background img"
                    className="w-full h-auto object-cover blur-[2px]"/>
                  
        </section>
      
    </>
  )
}
