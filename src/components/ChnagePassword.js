import Navbar from "./Navbar";
import { useRef, useState } from "react";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

function ChnagePassword() {
 const[password,setPassword]=useState("")
 const[cpassword,setCPassword]=useState("")
 const[Npassword,setNPassword]=useState("")
 const[isPss,setIsPass]=useState(true)
 const[isNPass,setNPass]=useState(true)
 const[isCPass,setCPass]=useState(true)
const[error,setError]=useState("")
 const auth = getAuth();
 let navigate = useNavigate();
//  let navigate = useParams()


 async function loginHandler() {
  if (password === '') {
    setError("please enter email and password")
    return;
  }
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var passRegex =  new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})') ;
  if(password.match(validRegex) ){
    sendPasswordResetEmail(auth, password)
    .then(
      (userCredentials) =>{
        console.log(userCredentials,'check user credentials')
        // navigation.navigate("home")  
        setError("please check your mail to reset password")
      }
    )
    .catch((error) => {
      setError(error.message)
    });
  }else{
    setError("enter valid email id")
  }
}



  return (
    <div>
      <Navbar />
      {/* <img src="images/marketing.jpg" className="w-full" /> */}

      <div className="w-[90%] m-auto  ">
        <div className="bg-white text-center   mb-12 m-auto rounded-md mt-20  p-8 md:w-[60%]">
          <div className="flex space-x-4 justify-center">

          <p className="md:text-xl text-md pb-4 font-semibold">
            Change Password
          </p>
          </div>

            <div className="w-[100%] justify-center flex">

              <input
                onChange={(e) => setPassword(e.target.value)}
                name="email"
                value={password}
                placeholder="enter your mail"
                text="test"
                // type={isPss ? "password" : "text"}
                className="outline-none w-full  pl-4 md:w-[55%] placeholder:text-black mb-4 placeholder:pl-6 py-[4px]  border-black border-[2px] rounded-md"
              />
            <AiFillEye  onClick={()=>setIsPass(!isPss)} size={24} />
            </div>
            {/* <div className="w-[100%] flex   ">
            <div className="w-[30%]">
              <label >New Password</label>
              </div>
              <input
                onChange={(e) => setNPassword(e.target.value)}
                name="email"
                value={Npassword}
                placeholder="New Password"
                type={isNPass ? "password" : "text"}
                className="outline-none w-full  pl-4 md:w-[55%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            <AiFillEye  onClick={()=>setNPass(!isNPass)} size={24} />
            

            </div>
            <div className="w-[100%] flex">
            <div className="w-[30%]">
              <label >Confirm Password</label>
              </div>
              <input
                onChange={(e) => setCPassword(e.target.value)}
                name="email"
                value={cpassword}
                placeholder="Confim Paassword"
                type={isCPass ? "password" : "text"}

                className="outline-none w-full  pl-4 md:w-[55%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
              />
            <AiFillEye  onClick={()=>setCPass(!isCPass)} size={24} />
            

            </div> */}
           {error && (
            <div className="flex justify-center pt-4">
              <p className="text-red-400 font-semibold">{error}</p>
            </div>
          )}
          <div className="my-6">
          <p onClick={()=>navigate("/login")} className="text-md cursor-pointer my-4 font-semibold text-blue-400">Go Back To Login</p>

            <button 
            onClick={loginHandler}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]">
              Change Password
            </button>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChnagePassword;
