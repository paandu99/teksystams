import "../App.css";
import Carsoule from "./Carsoule";
import Navbar from "./Navbar";

import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ServiceHome from "./ServicesHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem("userData");
    if (user) {
      navigate("/home")
    }else{
      navigate("/")
    }
  },[])
  return (
    <div className=" m-auto ">
      <Navbar  />
      
      <HeroBanner />
      {/*  about usSection 1 */}
      {/* ///// our services */}
      <ServiceHome />

      {/* ///// what to choose student*/}

      <div className="w-[100%] py-12 mb-20    ">
        <div className="w-[90%] justify-between items-center md:flex m-auto">
         
          <img
            className=" object-cover  w-[400px] rounded-md  "
            src="images/Bics13.jpg"
            alt="section-1"
          />
          <div className="md:w-[70%] md:mx-6 mt-4 md:py-8 py-0 rounded-md bg-white sm:w-full ">
            <div className="pb-6 p-4">
              <h1 className="text-black hsize sm:text-center md:text-[30px] font-semibold">
                Why To Choose Us ? For Trainings
              </h1>
            </div>
            <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
              "Empowering Future Tech Leaders: Join Our IT Training Program
              Today!"
            </h3>
            <div className="p-4">
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  High-Quality Training: Our IT training program is designed to
                  provide the highest quality education and training in the
                  latest IT skills, ensuring that our students are equipped with
                  the knowledge and skills they need to excel in the industry.
                </p>
              </div>
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  Experienced Instructors: Our experienced instructors are
                  dedicated to providing students with the best possible
                  training and support, helping them to develop their skills and
                  succeed in their careers.
                </p>
              </div>
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  {" "}
                  Practical Experience: We provide practical experience through
                  real-world projects and hands-on training, enabling students
                  to apply their skills to real-world scenarios and develop the
                  confidence they need to succeed in the workplace.
                </p>
              </div>
            </div>
            {/* <div className='flex space-x-4 mt-12 items-center'>
                <div className='bg-blue-300  rounded-full inline-block icon md:p-4'>
                  <FaHeart size={22} className='text-blue-600' />
                </div>
                <p className='md:text-xl list font-semibold'>125k+ Native Web3 Community</p>
              </div>   */}
          </div>
        </div>
      </div>
      <div className="w-[100%]  mb-20    ">
        <div className="w-[90%] justify-between items-center md:flex m-auto">
          <div className="md:w-[70%] mb-4 md:mx-6 mt-4 md:py-8 py-0 rounded-md bg-white sm:w-full ">
            <div className="pb-6 p-4 ">
              <h1 className="text-black hsize sm:text-center md:text-[30px] font-semibold">
                Why To Choose Us ? As An Organization
              </h1>
            </div>
            <h3 className="text-[#b2bec3] text-center  psize md:text-[20px] font-semibold">
              "Empowering Future Tech Leaders: Join Our IT Training Program
              Today!"
            </h3>
            <div className="p-4">
              <div className="flex  space-x-4  items-center">
                {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  Access to a larger pool of candidates. As a consulting organizations we are having large pool of top talent in all technologies
                </p>
              </div>
              <div className="flex  space-x-4 items-center">
              {/* <p>  <BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  Time to close position is very minimal when you compare us with other organization. we closed positions within short period of time.
                </p>
              </div>
              <div className="flex  space-x-4  items-center">
               {/* <p> <BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2">
                Outsourcing : as an organization we are also offering Outsourcing Services
                </p>
              </div>
            </div>
            {/* <div className='flex space-x-4 mt-12 items-center'>
                <div className='bg-blue-300  rounded-full inline-block icon md:p-4'>
                  <FaHeart size={22} className='text-blue-600' />
                </div>
                <p className='md:text-xl list font-semibold'>125k+ Native Web3 Community</p>
              </div>   */}
          </div>
          <img
            className=" object-cover  w-[400px] rounded-md  "
            src="images/aboutus.jpg"
            alt="section-1"
          />
        </div>
      </div>

      {/* Cards sections */}
      <div className=" w-[100%]  pb-[3%] mt-[5%] m-auto">

      <div className="w-[80%] m-auto  text-center pt-[3%] ">
        <div className="pb-6 ">
          <p className="text-white    hsize md:text-[35px] font-semibold">
            Technologies We Provide In Training
          </p>
        </div>
        <h3 className="text-[#b2bec3] psize sm:w-auto md:w-[50%] flex justify-center m-auto md:text-[20px] font-semibold">
        "Unlock Your Potential: Empowering Youth Through IT Training"
        </h3>
      </div>
      <div className="my-12 w-[100%]">
        <Carsoule />
        
      </div>
      </div>


      {/* {Section-2} */}
     

      {/* //testimonial */}

      {/* <Reviews /> */}

      {/* //Pricing    */}

      {/* <Pricing /> */}

      {/* Footer */}
      <div className="w-[100%] ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
