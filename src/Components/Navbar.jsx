import React from 'react'
import { BsList } from "react-icons/bs";
import{ useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  
  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <>

     <nav className="bg-blue-950 w-full px-2 md:px-8 md:py-6 flex justify-between items-center">
              <div className="font-extrabold text-white text-3xl sm:py-2 italic uppercase sm:text-xl sm:px-4">Pw Skills</div>
    
             
              <ul className="hidden md:flex items-center space-x-9 list-none text-lg">
                <Link to='/' className="text-white cursor-pointer font-semibold hover:text-yellow-100 ">Home</Link>
                <Link to="/about" className="text-white cursor-pointer font-semibold hover:text-yellow-100">About</Link>
                <Link to="/Faq" className="text-white cursor-pointer font-semibold hover:text-yellow-100">FAQs</Link>
                <Link to="/contact" className="text-white cursor-pointer font-semibold hover:text-yellow-100">Contact</Link>
              </ul>
    
             
              <div className="hidden md:block">
                <button className="bg-blue-900-700 text-white font-bold px-4 py-2 border-2 border-gray-400 rounded-2xl text-[15px] cursor-pointer hover:bg-zinc-50 hover:text-stone-500">
                  Login / Sign Up
                </button>
              </div>
    
             
              <button className="md:hidden mr-5 text-white font-semibold text-3xl " onClick={handleMenu} >
             <BsList  />
              
              </button>
             
     
            </nav>
    
    
            { menuOpen && (
          
            <div  className="w-full h-full  bg-white inset-0 md:hidden p-5 block">
    
               <ul className="flex flex-col  list-none text-lg p-10 w-full gap-6">
                <Link to="/" className="text-blue-950 cursor-pointer p-2 font-semibold text-xl hover: bg-gray-50 hover:shadow-sm hover:-translate-y-2">Home</Link>
                <Link to="/about" className="text-blue-950 cursor-pointer p-2 font-semibold text-xl hover: bg-gray-50 hover:shadow-sm hover:-translate-y-2">About</Link>
                <Link to="/faq" className="text-blue-950 cursor-pointer p-2 font-semibold text-xl hover: bg-gray-50 hover:shadow-sm hover:-translate-y-2">FAQs</Link>
                <Link to="/contact" className="text-blue-950 cursor-pointer p-2 font-semibold text-xl hover: bg-gray-50 hover:shadow-sm hover:-translate-y-2">Contact</Link>
              </ul>
    
            </div>)}
    
    
      
    </>
  )
}
