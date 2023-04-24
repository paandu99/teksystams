import Navbar from "./Navbar"
import  { useRef,useState } from "react"
import emailjs from '@emailjs/browser';
import Footer from "./Footer";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";
function Contact(){
const[fname,setFname] =useState("")
const[lname,setLname] =useState("")
const[email,setEmail] =useState("")
const[mobile,setMobile] =useState("")
const[course,setCourse]=useState("")
const[error,setError]=useState(false)
const[success,setSuccuess]=useState(false)
const form = useRef();

  


    return(
        <div>
            <Navbar />
            <img src="images/contactus.jpg" className="w-full" />

        <div className="w-[90%] m-auto  ">
        <div className=" mt-[10%]">
          <div className="pb-6 ">
            <h1 className="text-white hsize sm:text-center md:text-[30px] font-semibold">
              Contact Us For Enquiries
            </h1>
          </div>
          <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
            Connecting top talent with top companies: Empowering youth
          </h3>
          </div>
          <div className="bg-white text-center  mb-12 m-auto rounded-md mt-4 p-4 md:p-12 md:w-[80%]">
            {success && 
            <p className="text-green-400 mb-4 font-semibold">Your Response has been submittes successfully</p>
            }
           

<div className="md:grid md:grid-cols-12 mt-8 gap-4">
        <div className="md:col-span-4     bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">IT Technologies Training</h1>
            <Link to="/contacttrainings">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
        </div>
        <div className="md:col-span-4  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">Strategic Profile Marketing</h1>
            <Link to="/profileMarketing">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
        </div>
        <div className="md:col-span-4   bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">Work Force Solutions</h1>
            <Link to="/workforcesolutions">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
            
        </div>
      </div>
            </div>
           </div>
           <Footer />
      </div>

    )
// const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(form.current,'check formvalues')
//     emailjs.sendForm('service_2yx2e47', 'template_9u8uunv', form.current,"GdFOUp-Sjwjf4O70J")
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className="w-[80%] bg-white">
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     </div>
//   );
}

export default Contact