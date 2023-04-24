import {
  BsCheckCircle,
  BsFillArrowRightCircleFill,
  BsWhatsapp,
} from "react-icons/bs";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Reviews from "./Reviews";
import CarsouleReview from "./CarsouleReview";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Database",
    children: [
      {
        id: 2,
        name: "introduction",
        children: [
          {
            id: 3,
            name: "What Is Database?",
          },
          {
            id: 4,
            name: "What is Database Management System (DBMS)?",
          },
          {
            id: 4,
            name: "What is Relational Model ?",
          },
        ],
      },
      {
        id: 2,
        name: "2 - Datatypes and Constraints ",
        children: [
          {
            id: 3,
            name: "What are Datatypes ?",
          },
          {
            id: 4,
            name: "Types and Examples .",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "core java ",
    children: [
      {
        id: 2,
        name: "Section 1",
        children: [
          {
            id: 3,
            name: "Introduction to programming",
          },
          {
            id: 4,
            name: "DK installation",
          },
        ],
      },
      {
        id: 2,
        name: "section - 2",
        children: [
          {
            id: 3,
            name: "Classes and Objects",
          },
          {
            id: 4,
            name: "Global and local variables",
          },
        ],
      },
    ],
  },
];

function IndTechnology() {
  const [expanded, setExpanded] = useState(false);
  const [techData, setTechData] = useState({});
  let params = useParams();
  console.log(params, "checl params.......");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Level3Item = ({ item }) => (
    <div>
      <li>{item.title}</li>
    </div>
  );

  const Level2Item = ({ item }) => (
    <div>
      <p className="text-red-500">{item.title}</p>
      {item.subdata && item.subdata.map((child) => <Level3Item item={child} />)}
    </div>
  );

  const Level1Item = ({ item, key }) => (
    <div>
      {/* <h1 className="text-green-600">{item.name}</h1> */}
      <Accordion
        expanded={expanded === item?.name}
        onChange={handleChange(item?.name)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0, color: "red" }}>
            {item.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {item.subheading &&
            item.subheading.map((child) => <Level2Item item={child} />)}
        </AccordionDetails>
      </Accordion>
    </div>
  );

  const getIndTechHandler = async () => {
    const response = await axios.get(
      `https://us-central1-bics-2043a.cloudfunctions.net/app/coursedata/${params.id}`
    );
    setTechData(response.data.data);
  };
  console.log(techData, "check response....");
  useEffect(() => {
    getIndTechHandler();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-[90%] mb-20 m-auto md:flex ">
        <div className="md:w-[100%] md:mr-10 bg-white rounded-md sm:w-full mt-[10%]">
          <div className="pb-6 ">
            <h1 className="text-[#ff4100] pt-10 text-center hsize sm:text-center md:text-[30px] font-semibold">
              {techData?.title}
            </h1>
            <div className="flex mt-4 justify-center m-auto md:space-x-6 space-x-4 items-center">
              <Link to="https://api.whatsapp.com/send/?phone=7207518882&text&type=phone_number&app_absent=0">
                <button className="bg-white border-[#28D146] rounded-md border-[1px] flex justify-between items-center  rounde-md px-2 py-2 font-semibold">
                  <BsWhatsapp
                    className="text-[#28D146] font-semibold"
                    size={18}
                  />
                  Whatsapp
                </button>
              </Link>
              <Link to="/contacttrainings">
                <buuton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-4 px-2 py-2 font-semibold text-white rounded-md">
                  Email Us
                </buuton>
              </Link>
              <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-4 px-2 py-2 font-semibold text-white rounded-md">
                Call Us : 7207518882{" "}
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center space-x-4">
              <p className="font-semibold text-[18px] mb-4 leading-7 text-[#ff4100]">
                Technologies :{" "}
              </p>
              <p className="font-semibold text-[18px]  mb-4 leading-7 ">
                {techData?.techstack?.toString()}
              </p>
            </div>
            <div>
              <p className="font-semibold text-[18px] mb-4 leading-7 text-[#ff4100]">
                Description :{" "}
              </p>
              <p className="mb-6">{techData?.description}</p>
            </div>
            <div>
              <p className="font-semibold text-[18px] mb-4 leading-7 text-[#ff4100]">
                Who this course is for :{" "}
              </p>
              {techData?.who?.map((item) => {
                return (
                  <div className="flex w-[100%] items-center  leading-7  ">
                    <p className="w-[3%] mr-4 md:mr-0">
                      <BsCheckCircle className="mr-4" size={18} />{" "}
                    </p>
                    <p className="w-[90%]">{item}</p>
                  </div>
                );
              })}

              {/* <div className="flex w-[100%] items-center  leading-7  ">
                <p className="w-[3%] mr-4 md:mr-0">
                  {" "}
                  <BsCheckCircle className="mr-4" size={18} />{" "}
                </p>
                <p className="w-[90%]">
                  Any Software engineer who are interested in Mobile
                  Technologies
                </p>
              </div>
              <div className="flex w-[100%] items-center  leading-7  ">
                <p className="w-[3%] mr-4 md:mr-0">
                  {" "}
                  <BsCheckCircle className="mr-4" size={18} />{" "}
                </p>
                <p className="w-[90%]">
                  • Freshers/Graduates/ Software Testers
                </p>
              </div>
              <div className="flex w-[100%] items-center  leading-7  ">
                <p className="w-[3%] mr-4 md:mr-0">
                  {" "}
                  <BsCheckCircle className="mr-4" size={18} />{" "}
                </p>
                <p className="w-[90%]">
                  How to build the user interface or front end by using
                  technologies like HTML, CSS, Java script & Angular JS.
                </p>
              </div> */}
            </div>

            <div className="mt-4">
              <p className="font-semibold text-[18px] mb-4 leading-7 text-[#ff4100]">
                Why take this course :{" "}
              </p>
              {techData?.why?.map((item) => {
                return (
                  <div className="flex w-[100%] items-center  leading-7  ">
                    <p className="w-[3%] mr-4 md:mr-0">
                      <BsCheckCircle className="mr-4" size={18} />{" "}
                    </p>
                    <p className="w-[90%]">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              <p className="font-semibold text-[18px] mb-4 leading-7 text-[#ff4100]">
                What you will learn :{" "}
              </p>
              {techData?.what?.map((item) => {
                return (
                  <div className="flex w-[100%] items-center  leading-7  ">
                    <p className="w-[3%] mr-4 md:mr-0">
                      <BsCheckCircle className="mr-4" size={18} />{" "}
                    </p>
                    <p className="w-[90%]">{item}</p>
                  </div>
                );
              })}
            </div>

            <div className="my-10">
              {techData?.course_data?.map((item, index) => (
                <Level1Item key={index} item={item} />
              ))}
            </div>
            {/* //reviews  */}
            <div className="mt-20">
              <CarsouleReview />
            </div>
          </div>
          <div></div>
        </div>

        {/* <img
          className=" object-cover mt-[10%] w-[400px] rounded-md  "
          src="images/Bics13.jpg"
          alt="section-1"
        /> */}
      </div>
      <Footer />
    </div>
  );
}

export default IndTechnology;
