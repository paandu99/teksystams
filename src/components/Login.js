import Navbar from "./Navbar";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillEye, AiFillMail } from "react-icons/ai";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPssword, setIsPassword] = useState(true);

  let navigate = useNavigate();
  const auth = getAuth();


   function loginHandler() {
    console.log("working....")
    if (email === "" || password === "") {
      setError("please enter email and password");
      return;
    }
    var validRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var passRegex = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})"
    );
    if (email.match(validRegex)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials, "check user credentials");
          localStorage.setItem('userData',JSON.stringify( userCredentials?.user))
          // localStorage.setItem("token",)
          navigate("/home");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("enter valid email id");
    }
  }
  localStorage.setItem("check","fsdfdfd")

  return (
    <div>
      <Navbar />
      {/* <img src="images/marketing.jpg" className="w-full" /> */}

      <div className="w-[90%] m-auto  ">
        <div className="bg-white text-center   mb-12 m-auto rounded-md mt-20  p-8 md:w-[60%]">
          <p className="md:text-xl text-md pb-4 font-semibold">
            Login To Your Account
          </p>

          <div className="flex justify-center">
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              placeholder="Mail or Phone"
              type="text"
              className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
            />
          </div>

          <div className="flex items-center mb-4 justify-center">
            <input
              type={isPssword ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="PassWord"
              value={password}
              className="outline-none pl-4 w-full md:w-[50%] placeholder:text-black placeholder:pl-8 py-[4px]  border-black border-[2px] rounded-md"
            />
            <AiFillEye onClick={() => setIsPassword(!isPssword)} size={24} />
          </div>
          {error && (
            <div className="flex justify-center pt-4">
              <p className="text-red-400 font-semibold">{error}</p>
            </div>
          )}
          <p className="mt-4 mb-4">
            Forgot PassWord ?
            <span
              onClick={() => navigate("/changepassword  ")}
              className="font-semibold pl-4 text-md cursor-pointer text-blue-400"
            >
              Reset Now !
            </span>
          </p>
          <button
            onClick={loginHandler}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]"
          >
            Login
          </button>
          <p className="mt-4">
            Don't Have An Account{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-semibold text-md cursor-pointer text-blue-400"
            >
              Register !
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
