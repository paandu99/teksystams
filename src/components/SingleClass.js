import "../App.css";
import Carsoule from "./Carsoule";
import Navbar from "./Navbar";

import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ServiceHome from "./ServicesHome";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import axios from "axios";
import "firebase/storage";
import { Link, useNavigate, useParams } from "react-router-dom";
// import firebase from "firebase/app"
// import { FirebaseApp } from "firebase/app";

const classData = [
  {
    title: "Introduction",
    date: "24-04-2023",
    desc: "today we discussed about internet and how internet works introduction of www and network calls",
  },
  {
    title: "Introduction",
    date: "24-04-2023",
    desc: "today we discussed about internet and how internet works introduction of www and network calls",
  },
  {
    title: "Introduction",
    date: "24-04-2023",
    desc: "today we discussed about internet and how internet works introduction of www and network calls",
  },
];

function SingleClass() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [classDataApi, setClassDataApi] = useState([]);
  const [totalData, settotalData] = useState([]);

  const [vidUrl, setVidUrl] = useState("");
  let navigate = useNavigate();
  let params = useParams();
  async function getClassHandler() {
    try {
      const response = await axios.get(
        `https://us-central1-bics-2043a.cloudfunctions.net/app/media/${params.id}`
      );
      setClassDataApi(response.data.data);
      getTotalClassHandler(response?.data?.data?.course);
    } catch (error) {}
  }
  async function getTotalClassHandler(course) {
    const response = await axios.get(
      `https://us-central1-bics-2043a.cloudfunctions.net/app/media?course=${course}`
    );
    settotalData(response.data.data);
  }

  console.log(classDataApi, "check data.............");
  useEffect(() => {
    getClassHandler();
    getTotalClassHandler();
  }, [params?.id]);

  return (
    <div className=" m-auto ">
      <Navbar />

      {/* <HeroBanner /> */}
      <div className="w-[90%] bg-white justify-between my-10 items-center  m-auto">
        <h1 className="text-black text-center  text-[30px] font-semibold py-10 ">
          {classDataApi?.course}
        </h1>

        <>
          <div className="md:grid height:[400px]    md:grid-cols-12 gap-6">
            <div className="bg-white md:col-span-8 p-10 rounded-md">
              {/* <ReactPlayer
              className="w"
              // url={classDataApi?.downloadUrl}
                url="http://127.0.0.1:5001/bics-2043a/us-central1/app/media/download/3a43c5cfab6840469cbffdee05dc444d"
                // playing={isPlaying}
                controls={true}
              /> */}
              <video controls className="w-[100%] md:h-[400px]">
                <source
                  // src={classDataApi?.downloadUrl}
                  src="http://127.0.0.1:5001/bics-2043a/us-central1/app/media/download/2e59939ed2ce4a4487994ff72d223ad3"
                  type="video/mp4"
                />
              </video>
              <div>
                <button className="bg-[#1F53E4] w-full py-2 text-white font-semibold mt-4 rounded">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/watch?v=EOgFH3W6oDo"
                  >
                    Watch This On Youtube
                  </a>
                </button>
              </div>

              {/* <div className="py-6 space-x-4">
                <button
                  className="bg-[#1F53E4] py-2 px-8 rounded-md text-white"
                  onClick={() => setIsPlaying(true)}
                >
                  Start
                </button>
                <button
                  className="bg-[#1F53E4] py-2 px-8 rounded-md text-white"
                  onClick={() => setIsPlaying(false)}
                >
                  Pause
                </button>
              </div> */}
              <div className="mt-6">
                <p className="text-md font-semibold">{classDataApi?.title}</p>
                <p className="text-md font-semibold">
                  Date : {classDataApi?.date}
                </p>
                <p className="text-md font-semibold">
                  Description : {classDataApi?.description}
                </p>
                <p className="text-md font-semibold">
                  Assignment : {classDataApi?.assignment}
                </p>
              </div>
            </div>
            <div className="col-span-4 h-[580px] overflow-auto space-y-6 md:mr-10">
              {totalData.map((item) => {
                return (
                  <div className=" p-6 bg-[#1F53E4]  border-1 rounded-md border-black">
                    <p className="text-xl text-white  font-semibold">
                      {item.title}
                    </p>
                    <p className="text-md text-white font-semibold">
                      Date : {item.date}
                    </p>
                    <p className="text-sm text-white font-semibold">
                      {item.description}
                    </p>
                    <button
                      onClick={() => navigate(`/singleclass/${item?.uid}`)}
                      className="bg-[white]  py-2 w-full text-[#1F53E4] text-md font-semibold rounded-md mt-6"
                    >
                      Learn Now !
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>

      <div className="w-[100%] ">
        <Footer />
      </div>
    </div>
  );
}

export default SingleClass;
