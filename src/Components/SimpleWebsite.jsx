import React from "react";
import Navabar from '../Components/Navbar'
import HeroSection from "./HeroSection";
import Footer from "../Components/Footer";




export default function SimpleWebsite() {


  return (
    <>
      <div className="bg-slate-900 w-full h-auto ">

        {/* navbar started here */}

        <Navabar/>
        
        {/* navbar ended here */}


        {/* hero section */}


        <HeroSection/>


        <section className="w-full h-auto flex flex-col py-8">
          <div className="w-full flex flex-col items-center">
            <p className="text-center text-gray-400 font-bold sm:text-md md:text-2xl tracking-wider uppercase">
              "Pure Hardwork, No shortcuts"
            </p>
            <div className="border-b-2 border-yellow-700 w-20 mt-3 mb-5"/>
          </div>

          {/* card 1 */}

          <div className="w-full h-auto flex flex-wrap justify-evenly gap-6 my-14 ">
          
            <div className="w-56 h-auto flex flex-col items-center justify-center bg-slate-500 rounded-3xl p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/5833/5833290.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-lg text-white">600+</p>
                <p className="font-bold text-lg text-white">different courses</p>
              </div>
            </div>
          
           {/* card 2*/}


            <div className="w-52 h-auto flex flex-col items-center justify-center bg-slate-500 rounded-3xl p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/13366/13366418.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-lg text-white">700,000+</p>
                <p className="font-bold text-lg text-white">Students Enrolled</p>
              </div>
            </div>
            

      {/* card 3 */}

            
            <div className="w-52 h-auto flex flex-col items-center justify-center bg-slate-500 rounded-3xl p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/1198/1198299.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-lg text-white">10,000+</p>
                <p className="font-bold text-lg text-white">Successful Transation</p>
              </div>
            </div>

          </div>
        </section>





        <section className="w-full h-auto flex flex-col py-8 my-14">
          <div className="w-full flex flex-col items-center">
            <p className="text-center text-gray-400 font-bold sm:text-md md:text-2xl tracking-wider uppercase">
              "Our Products"
            </p>
            <div className="border-b-2 border-yellow-700 w-20 mt-3 mb-5 " />
          </div>

          <div className="w-full h-auto flex flex-wrap justify-evenly gap-6 mt-8">
              {/* product - 1 */}
         
            <div className="w-44 h-auto flex flex-col items-center justify-center p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center ">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/10262/10262344.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-base text-white">PW Skills</p>
                <p className="font-semibold text-sm text-gray-400">Supercharge your project development with out robust lab.</p>
              </div>
            </div>
              {/* product - 1 */}
          

             {/* product - 2 */}
            <div className="w-44 h-auto flex flex-col items-center justify-center p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/11890/11890806.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-base text-white">Job Portal</p>
                <p className="font-semibold text-sm text-gray-400">Your career journey begins right here.</p>
              </div>
            </div>
            {/* product - 2 */}


             {/* product - 3 */}
            <div className="w-44 h-auto flex flex-col items-center justify-center  p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5465/5465712.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-base text-white">Experience portal</p>
                <p className="font-semibold text-sm text-gray-400">PW skill's self-paced Experience portal priorities hands-on training with 570+ intership projects.</p>
              </div>
            </div>
            {/* /product - 3*/}

            {/* product - 4*/}
            <div className="w-44 h-auto flex flex-col items-center justify-center  p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://cdn-icons-png.flaticon.com/128/2329/2329180.png"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-base text-white">Affiliate</p>
                <p className="font-semibold text-sm text-gray-400"> Explore Affiliate marketing opportunities with pw skills and attain financial freedom.</p>
              </div>
            </div>
            {/* product - 4 */}

            {/* product - 5 */}
            <div className="w-44 h-auto flex flex-col items-center justify-center  p-4 hover:-translate-y-5 hover:transition 200">

              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">

                <img
                  src="https://static.vecteezy.com/system/resources/previews/057/019/212/non_2x/hall-of-fame-icon-for-awards-vector.jpg"
                  alt="courses" className="h-12 w-12" />
              </div>
              <div className="text-center mt-2">
                <p className="font-bold text-base text-white">hall of frame</p>
                <p className="font-semibold text-sm text-gray-400">our Students placement and 100K+ career transitions speak volumes about our courses.</p>
              </div>
            </div>
            {/* product - 5 */}
          </div>
        </section>


        {/* footer  */}

    
     <Footer/>


</div>

 
    </>
  );
}
