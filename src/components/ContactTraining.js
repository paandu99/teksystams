import Navbar from "./Navbar"
import  { useRef,useState } from "react"
import emailjs from '@emailjs/browser';
import Footer from "./Footer";
function ContactTraining(){
const[fname,setFname] =useState("")
const[lname,setLname] =useState("")
const[email,setEmail] =useState("")
const[mobile,setMobile] =useState("")
const[course,setCourse]=useState("Java")
const[error,setError]=useState(false)
const[success,setSuccuess]=useState(false)
const form = useRef();

  const submiteHandler = (e) => {
    e.preventDefault();
    // console.log(form.current,'check formvalues')
  
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex) && mobile.length ==10 && fname && course){
      emailjs.sendForm('service_ouc4srf', 'template_nsffe1f', form.current,"zcviwiksTQkJscCra")
      .then((result) => {
        setEmail("")
        setCourse("")
        setMobile("")
        setFname("")
        setLname("")
        setSuccuess(!success)
        setError(false)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          setSuccuess(!success)
      });
    }else{
      setError(true)
    }
    
  };


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
          <div className="bg-white text-center  mb-12 m-auto rounded-md mt-4  p-12 md:w-[60%]">
            {success && 
            <p className="text-green-400 mb-4 font-semibold">Your Response has been submittes successfully</p>
            }
            <form ref={form} onSubmit={submiteHandler}>
           <div className="flex justify-center">
            <input onChange={(e)=>setFname(e.target.value)} name="first_name" value={fname} placeholder="First Name" type="text" className="outline-none w-full pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md" />
            </div>
            <div className="flex justify-center">
            <input onChange={(e)=>setLname(e.target.value)} name="last_name" value={lname} placeholder="Last Name" type="text" className="outline-none w-full pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md" />
            </div>
            <div className="flex justify-center">
            <input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} placeholder="Mail Id" type="text" className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md" />
            </div>
            <div className="flex justify-center">
            <input onChange={(e)=>setMobile(e.target.value)} name="mobile" value={mobile} placeholder="Mobile Number" type="text" className="outline-none pl-4 w-full  md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md" />
            </div>
            {/* <div className="flex justify-center">
            <input onChange={(e)=>setCourse(e.target.value)} name="course" value={course} placeholder="Technology" type="text" className="outline-none pl-4 w-full  md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md" />
            </div> */}
            <div className="flex mb-4 justify-center">
                <select onChange={(e)=>setCourse(e.target.value)} name="course" value={course} className="outline-none w-full md:w-[50%] placeholder:text-black placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md">
                <option value="jave">Java</option>
                <option value="salesforce">SalesForce</option>

                <option value=".net">.Net</option>
                <option value="testing">Testing</option>
                <option value="BA">Busines Analyst</option>
                <option value="aws">Aws</option>
                <option value="python">Python</option>
                <option value="devops">Devops</option>
                <option value="SAP">SAP</option>
                <option value="usPayrolls">US Payroll</option>

                </select>
            </div>
            {error &&  <div className="flex justify-center pt-4">
                <p className="text-red-400 font-semibold">please enter all details</p>
            </div>}
            <input  value="Send" type="submit" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] rounded-md px-8 py-[4px]" />
            </form>
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

export default ContactTraining