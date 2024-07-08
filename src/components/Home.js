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
                Why To Choose Us ?
              </h1>
            </div>
            {/* <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
              "Empowering Future Tech Leaders: Join Our IT Training Program
              Today!"
            </h3> */}
            <div className="p-4">
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                we bring a wealth of expertise in website development, app development, and testing solutions. With over 5 years of industry experience, we have successfully delivered projects across various sectors, from startups to established enterprises.
                </p>
              </div>
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                We understand that every business is unique. Our team takes a personalized approach to every project, ensuring that we tailor our solutions to meet your specific requirements and business goals. Whether you need a dynamic website, a cutting-edge mobile app, or rigorous testing services, we've got you covered.
                </p>
              </div>
              <div className="flex space-x-4  items-center">
              {/* <p><BsFillCheckCircleFill size={18} className="mr-4" /></p> */}
                <p className="mb-2 text-black">
                  {" "}
                  Quality and innovation are at the heart of everything we do. From crafting pixel-perfect designs to implementing the latest technologies, we strive to deliver solutions that not only meet industry standards but also exceed client expectations. Our commitment to innovation ensures that your digital presence remains ahead of the curve.
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
      
          
      {/* <div className=" w-[100%]  pb-[3%] mt-[5%] m-auto">

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
      </div> */}


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
