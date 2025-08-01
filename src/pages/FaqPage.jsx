import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


export default function FaqPage() {
  return (
    <>
          <Navbar/>
        

           <div className="bg-gradient-to-r from-indigo-400 to-indigo-100 w-full min-h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
        <img  src="https://cdn-icons-png.flaticon.com/128/4403/4403555.png"   alt="FAQs"   className="w-24 mx-auto mb-4"/>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">FAQs</h2>
        <p className="text-gray-600 font-semibold text-base">
          Find answers to the most frequently asked questions about our platform,
          courses, and services. We’re here to help!
        </p>
      </div>
      
    </div>

          <Footer/>
    </>
  )
}
