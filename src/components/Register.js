import Navbar from "./Navbar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillEye, AiFillMail } from "react-icons/ai";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import auth from "../firebase";
import axios from "axios";
function Register() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPssword, setIsPassword] = useState(true);

  let navigate = useNavigate();

  const auth = getAuth();
  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        let userPayload = {
          name: fname,
          email: email,
          mobile: mobile,
          course: [""],
          isPaid: false,
          isMarketing: false,
        };
        axios
          .post(
            "https://us-central1-bics-2043a.cloudfunctions.net/app/users/register",
            userPayload
          )
          .then((data) => {
            if (data.status == 200) {
          localStorage.setItem('user',userPayload)
              navigate("/login");
            } else {
              setError("somethin went wrong please try again");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navbar />
      {/* <img src="images/marketing.jpg" className="w-full" /> */}

      <div className="w-[90%] m-auto  ">
        <div className="bg-white text-center   mb-12 m-auto rounded-md mt-20  p-8 md:w-[60%]">
          <p className="md:text-xl text-md pb-4 font-semibold">
            Register Your Account Here !{" "}
          </p>

          {/* <form  > */}
          <div className="flex justify-center">
            <input
              onChange={(e) => setFname(e.target.value)}
              name="first_name"
              value={fname}
              placeholder="Full Name"
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

          <div className="items-center flex  space-x-4 mb-4 justify-center">
            {/* <div className="absolute"> */}
            <input
              type={isPssword ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="PassWord"
              value={password}
              className="outline-none pl-4 w-full md:w-[45%] placeholder:text-black placeholder:pl-8 py-[4px]  border-black border-[2px] rounded-md"
            />

            <AiFillEye onClick={() => setIsPassword(!isPssword)} size={24} />
            {/* </div>    */}
          </div>
          {error && (
            <div className="flex justify-center pt-4">
              <p className="text-red-400 font-semibold">{error}</p>
            </div>
          )}

          <button
            onClick={onSubmit}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]"
          >
            Register
          </button>
          <p className="mt-4">
            Already Have An Account{" "}
            <span
              onClick={() => navigate("/login")}
              className="font-semibold text-md cursor-pointer text-blue-400"
            >
              Login !
            </span>
          </p>
          {/* </form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
