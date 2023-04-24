import Navbar from "./Navbar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
function ProfileMarketing() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccuess] = useState(false);
  const[isMail,setIsMail]=useState(false)
  const[experience,setExperience]=useState("")
  const[cat,setCat]=useState("India")
  const[visaStatus,setVisStatus]=useState("")
  const form = useRef();

  const submiteHandler = (e) => {
    e.preventDefault();
    // console.log(form.current,'check formvalues')

    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(cat == "India"){
      setVisStatus("India")
    }

        if (email.match(validRegex) && visaStatus  && experience &&  mobile.length == 10 && fname && course) {
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
                setCat("India")
                setExperience()
                setVisStatus("")
                setSuccuess(!success);
                setError(false);
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
                setSuccuess(!success);
              }
            );
        }
     else {
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <img src="images/marketing.jpg" className="w-full" />

      <div className="w-[90%] m-auto  ">
        <div className=" mt-[6%]">
          <div className="pb-6 ">
            <h1 className="text-white hsize sm:text-center md:text-[30px] font-semibold">
              Strategic Profile Marketing
            </h1>
          </div>
          <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
            Strategic profile marketing is an approach to marketing that
            involves creating a detailed profile of the candidate resume, and
            then developing a strategic plan to reach and engage with them
            effectively. The goal is to create a customized marketing that is
            tailored to the specific needs and preferences of the candidate.
          </h3>
        </div>
        <div className="bg-white text-center  mb-12 m-auto rounded-md mt-4  p-8 md:w-[60%]">
          <p className="md:text-xl text-md pb-4 font-semibold">For more information please reach out us  </p>
          <div className="md:flex md:w-[100%] py-6 pb-8 space-y-4 justify-between items-center">
            <div className="md:w-[45%]">
              <Link to="https://api.whatsapp.com/send/?phone=7842158882&text&type=phone_number&app_absent=0">
                <button className="bg-white w-full space-x-4  border-[#28D146] rounded-md border-[1px] flex justify-center items-center  rounde-md px-2 py-2 font-semibold">
                  <BsWhatsapp
                    className="text-[#28D146]  font-semibold"
                    size={18}
                  />
                 <span> Whatsapp</span>
                </button>
              </Link>
            </div>
            <div className="md:w-[45%]">

                <buuton onClick={()=>setIsMail(!isMail)} className="bg-gradient-to-r cursor-pointer flex w-full  justify-center items-center space-x-4 from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 font-semibold text-white rounded-md">
                <AiFillMail
                    className="text-[white] font-semibold"
                    size={18}
                  />
                 <span>Email Us</span> 
                </buuton>
            </div>
          </div>
        
          {success && (
            <p className="text-green-400 mb-4 font-semibold">
              Your Response has been submittes successfully
            </p>
          )}
          {isMail ? <form ref={form} onSubmit={submiteHandler}>
            <div className="flex justify-center">
              <input
                onChange={(e) => setFname(e.target.value)}
                name="first_name"
                value={fname}
                placeholder="First Name"
                type="text"
                className="outline-none w-full pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <input
                onChange={(e) => setLname(e.target.value)}
                name="last_name"
                value={lname}
                placeholder="Last Name"
                type="text"
                className="outline-none w-full pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                placeholder="Mail Id"
                type="text"
                className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <input
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                value={mobile}
                placeholder="Mobile Number"
                type="text"
                className="outline-none pl-4 w-full  md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>
         
            <div className="flex mb-4 justify-center">
              <input
              type="text"
                onChange={(e) => setCourse(e.target.value)}
                name="course"
                placeholder="Technology"
                value={course}
                className="outline-none pl-4 w-full md:w-[50%] placeholder:text-black placeholder:pl-8 py-[4px]  border-black border-[2px] rounded-md"
              />
               
            </div>
            <div className="flex justify-center">
              <input
                onChange={(e) => setExperience(e.target.value)}
                name="experience"
                value={experience}
                placeholder="Experience"
                type="number"
                className="outline-none pl-4 w-full  md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>
            <div className="flex mb-4 justify-center">
              <select
                onChange={(e) => setCat(e.target.value)}
                name="Category"
                value={cat}
                className="outline-none w-full md:w-[50%] placeholder:text-black placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                
              </select>
            </div>
           {cat != "India" ? <div className="flex justify-center">
              <input
                onChange={(e) => setVisStatus(e.target.value)}
                name="VISA"
                value={visaStatus}
                placeholder="Visa Status"
                type="text"
                className="outline-none pl-4 w-full  md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            </div>:""}
            {error && (
              <div className="flex justify-center pt-4">
                <p className="text-red-400 font-semibold">
                  please enter all details
                </p>
              </div>
            )}
            <input
              value="Send"
              type="submit"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] rounded-md px-8 py-[4px]"
            />
          </form> : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
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

export default ProfileMarketing;
