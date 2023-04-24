import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";


function PNavBar(){
  const[toggle,setToggle]=useState(true)
  const[active,setActive]=useState("home")
  function toggleHandler(){
    console.log("check function....")
    setToggle(!toggle)
    console.log(toggle,'check toggle')
  }
  let activeStyle = {
    textDecoration: "underline",
    color:"#0ea5e9"
    // textColor:""
  };
  const auth = getAuth();
  let navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("userData");
    auth.signOut().then(() => navigate("/"));
  };

  let activeClassName = "underline";
 return(
  <div className="w-[100%] bg-white">
    <div className="w-[80%]  flex justify-between items-center   m-auto md:flex md:items-center md:justify-between ">
    <div className="">
      <Link to="/">
      <img src="images/logo.png" className="logo" alt="logo img"  />
      </Link>
    </div>
    <div className=" md:static sm:relative">
    <div  className="sm:bg-green-100 md:bg-inherit p-2">
      <AiOutlineMenu size={20} onClick={()=> toggleHandler() } className="md:hidden text-black font-semibold" />
    </div>
    <div className={`md:flex z-50 bg-white md:bg-inherit md:static  absolute right-2 md:w-full  sm:shadow-xl md:shadow-none  p-4 border-[1px] md:drop-shadow-none md:border-0  sm:drop-shadow-md rounded-md md:mt-0 mt-[10px]  md:items-center md:justify-between list-none ${toggle ? "hidden" : "block"}`}>
    <ul className={`md:space-x-4 leading-9 md:flex list-none }`}>
    {/* <Link to="/home"> */}
      <li onClick={()=> toggleHandler() & setActive("home")}  className="text-md text-white  font-semibold">
      <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            Home
          </NavLink>
      </li>
     
      <li onClick={()=> toggleHandler() & setActive("service")} className="text-md text-white  font-semibold">
      <NavLink
            to="/services"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            Services
          </NavLink>
      </li>
      {/* </Link> */}
      {/* <Link to="/contactus"> */}
      <li onClick={()=> toggleHandler() & setActive("contact")} className="text-md text-white  font-semibold">
      <NavLink
            to="/contactus"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            Contact Us
          </NavLink>
      </li>
      {/* </Link> */}
      <Link to="/aboutus">
      <li onClick={()=> setToggle(false)  & setActive("about")} className="text-md text-white  font-semibold">
      <NavLink
            to="/aboutus"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            About Us
          </NavLink>
      </li>
      </Link>
      <Link to="/profile">
      <li onClick={()=> setToggle(false)  & setActive("profile")} className="text-md text-white  font-semibold">
      <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            Profile
          </NavLink>
      </li>
      </Link>
      <Link to="">
      <li  className="text-md text-white  font-semibold">
      <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="text-md text-black  font-semibold"
          >
            logout
          </NavLink>
      </li>
      </Link>
      <Link to="">
                  <li
                    onClick={logOutHandler}
                    className="text-md text-white  font-semibold"
                  >
                    <NavLink
                      // to="/profile"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="text-md text-black  font-semibold"
                    >
                      Logout
                    </NavLink>
                  </li>
                </Link>
    </ul>
    </div>
    </div>
  </div>
  </div>
 )
}

export default PNavBar