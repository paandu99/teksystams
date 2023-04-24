import "../App.css";
import Carsoule from "./Carsoule";
import Navbar from "./Navbar";

import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ServiceHome from "./ServicesHome";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const classData = [
  {
    Topic: "Introduction",
    classes: [
      {
        title: "class 1",
        date: "24-04-2023",
        description:
          "today we discussed about oops concept like abstraction, parent classes and states.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about oops concept like abstraction, parent classes and states.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about oops concept like abstraction, parent classes and states.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about oops concept like abstraction, parent classes and states.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about oops concept like abstraction, parent classes and states.",
      },
    ],
  },
  {
    Topic: "Introduction To Web",
    classes: [
      {
        title: "class 1",
        date: "24-04-2023",
        description:
          "today we discussed about internet and how internet works introduction of www and network calls.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about internet and how internet works introduction of www and network calls.",
      },
      {
        title: "class 1",
        date: "24-04-2024",
        description:
          "today we discussed about internet and how internet works introduction of www and network calls.",
      },
    ],
  },
];

function Learning() {
  const [courseData, setCourseData] = useState([]);
  const auth = getAuth();
  let navigate = useNavigate();
  let params = useParams()
  // let navigate= useNavigation()

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //     navigate("/login")
  //   }
  // })
  async function getClassesHandler() {
    const response = await axios.get(
      `https://us-central1-bics-2043a.cloudfunctions.net/app/media?course=${params.id}`
    );
    setCourseData(response.data.data);
  }
  console.log(courseData, "check api ..............");

  useEffect(() => {
    let userData = localStorage.getItem("userData")
    userData = JSON.parse( userData)
    console.log(userData,'sdgsdg........')
    getClassesHandler();
  }, []);

  return (
    <div className=" m-auto ">
      <Navbar />

      {/* <HeroBanner /> */}
      <div className="w-[90%] justify-between my-10 items-center  m-auto">
        <h1 className="text-white text-center text-[30px] font-semibold my-10 ">
          {params.id}
        </h1>
        <div className="md:grid my-10 md:grid-cols-12 gap-6">
          {courseData.map((item) => {
            return (
              <>
                {/* <h1 className="text-md bg-[#1F53E4] inline-block py-4 px-20 rounded-md font-semibold text-white">{item.Topic}</h1> */}

                <div className="bg-white md:col-span-4 p-10 rounded-md">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-md font-semibold">{item.date}</p>
                  <p className="text-md font-semibold">{item.description}</p>
                  <button onClick={()=>navigate(`/singleclass/${item.uid}`)} className="bg-[#1F53E4]  py-2 w-full text-white text-md font-semibold rounded-md mt-6">
                    Learn Now !
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="w-[100%] ">
        <Footer />
      </div>
    </div>
  );
}

export default Learning;
