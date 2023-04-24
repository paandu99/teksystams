import Navbar from "./Navbar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BsPersonWorkspace, BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
function WorkForce() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("Java");
  const [error, setError] = useState(false);
  const [success, setSuccuess] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [experience, setExperience] = useState("");
  const [cat, setCat] = useState("India");
  const [visaStatus, setVisStatus] = useState("India");
  const form = useRef();

  const submiteHandler = (e) => {
    e.preventDefault();
    // console.log(form.current,'check formvalues')

    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      email.match(validRegex) &&
      visaStatus &&
      experience &&
      mobile.length == 10 &&
      fname &&
      course
    ) {
      emailjs
        .sendForm(
          "service_bbrqmzm",
          "template_se7vzod",
          form.current,
          "Aer6aYRchIWNP-1N_"
        )
        .then(
          (result) => {
            setEmail("");
            setCourse("");
            setMobile("");
            setFname("");
            setLname("");
            setCat("Domestic");
            setExperience();
            setVisStatus("");
            setSuccuess(!success);
            setError(false);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            setSuccuess(!success);
          }
        );
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <img src="images/workforce.jpg" className="w-full" />

      <div className="w-[90%] m-auto  ">
        <div className=" mt-[6%]">
          <div className="pb-6 ">
            <h1 className="text-white hsize sm:text-center md:text-[30px] font-semibold">
              WorkForce Solutions
            </h1>
          </div>
          <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
            workforce solutions are essential for organizations looking to
            maximize the value of their workforce and stay competitive in
            today's rapidly changing business environment.
          </h3>
        </div>
        <div className="md:grid md:grid-cols-12 mb-4 mt-8 gap-4">
        <div className="md:col-span-4  hover:border-[2px]   bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold  text-xl m-auto text-center   pb-10 ">India WorkForce Solutions</h1>
            <Link to="/inworkforce">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Register Now</p>
            </Link>
        </div>
        <div className="md:col-span-4 hover:border-[2px]  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            
            <h1 className="font-semibold  text-xl m-auto text-center   pb-10 ">USA WorkForce Solutions</h1>
            <Link to="/usworkforce">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Register Now</p>
            </Link>
        </div>
        <div className="md:col-span-4 hover:border-[2px]  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold  text-xl m-auto text-center   pb-10 ">UK WorkForce Solutions</h1>
            <Link to="/ukworkforce">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Register Now</p>
            </Link>
            
        </div>
        <div className="md:col-span-4 hover:border-[2px]  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold  text-xl m-auto text-center   pb-10 ">Canada WorkForce Solutions</h1>
            <Link to="/canadaworkforce">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Register Now</p>
            </Link>
            
        </div>
      </div>

        
      </div>
      <Footer />
    </div>
  );
}

export default WorkForce;
