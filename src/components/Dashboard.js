import "../App.css";
import Carsoule from "./Carsoule";
import Navbar from "./Navbar";

import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ServiceHome from "./ServicesHome";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PNavBar from "./PNavBar";

function Dashboard() {
  const [courseData, setCourseData] = useState();
  const [userData, setUserData] = useState();
  const[techStack,setTechStack]=useState("")
  let navigate = useNavigate()



  

  async function getUserData(email) {
      axios.get(
      `https://us-central1-bics-2043a.cloudfunctions.net/app/users?email=${email}`
    ).then((response)=>{
      let data = response?.data?.data[0]
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
      if(data.isPaid){
        getCourseData(data.course[0])
      }
    })
    
  }
  
  async function getCourseData(course) {
    const response = await axios.get(
      `https://us-central1-bics-2043a.cloudfunctions.net/app/coursedata?title=${course}`
    );
    setCourseData(response?.data?.data[0])
    localStorage.setItem("course",courseData)
    let data = courseData?.techstack.toString()
    // setTechStack(data)
  }

  useEffect(() => {
    let data = localStorage.getItem("userData");
    data = JSON.parse(data)
    if (data?.email) {
      getUserData(data?.email);
    }
    
  }, []);

  return (
    <div className=" m-auto ">
      <Navbar />

      <HeroBanner />
      <div className="w-[90%] justify-between my-10 items-center  m-auto">
        <h1 className="text-white text-xl font-semibold my-10 ">
          Your Learning{" "}
        </h1>
        {userData?.isPaid ? (
          <div className="md:grid md:grid-cols-12 gap-6">
            <div className="bg-white md:col-span-4 p-10 rounded-md">
              <p className="text-xl font-semibold">{courseData?.title}</p>
              <p className="text-md font-semibold">
                Duration : <span>{courseData?.duration}Months</span>
              </p>
              <p className="text-md font-semibold">
                Tech Stack : {courseData?.techstack.toString()}
              </p>
              <button onClick={()=>navigate(`/learning/${courseData?.title}`)} className="bg-[#1F53E4]  py-2 w-full text-white text-md font-semibold rounded-md mt-6">
                Learn Now !
              </button>
            </div>
            
          </div>
        ) : (
          <div className="md:grid md:grid-cols-12 gap-6">
            <div className="bg-white md:col-span-4 p-10 rounded-md">
              <p className="text-xl font-semibold">
                You Have Not Joined Any Course
              </p>
              <button className="bg-[#1F53E4]  py-2 w-full text-white text-md font-semibold rounded-md mt-6">
                Join Now !
              </button>
            </div>
          </div>
        )}
      </div>
      {/* ///// what to choose student*/}

      {/* //// about profileMarketing */}
      <div className="w-[90%] justify-between my-10 items-center  m-auto">
        <h1 className="text-white text-xl font-semibold my-10 ">
          Your Learning{" "}
        </h1>

        {courseData ? (
          <div className="md:grid md:grid-cols-12 gap-6">
            <div className="bg-white md:col-span-4 p-10 rounded-md">
              <p className="text-md font-semibold">We Have Applied A Lot</p>
              <p className="text-md font-semibold">
                Total Applied : <span>60 +</span>
              </p>
              <p className="text-[18px] font-semibold">
                Interview :{" "}
                <span className="text-[15px]">11:30 Am 24-04-2023</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="md:grid md:grid-cols-12 gap-6">
            <div className="bg-white md:col-span-4 p-10 rounded-md">
              <p className="text-md font-semibold">
                You Are Not Joined This Service !
              </p>
              <button className="bg-[#1F53E4]  py-2 w-full text-white text-md font-semibold rounded-md mt-6">
                Join Now !
              </button>
            </div>
          </div>
        )}
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

export default Dashboard;
