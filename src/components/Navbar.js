import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState("home");
  const [isAuth, setIsAuth] = useState(false);
  const [courseData, setcourseData] = useState("");
  function toggleHandler() {
    console.log("check function....");
    setToggle(!toggle);
    console.log(toggle, "check toggle");
  }
  let activeStyle = {
    textDecoration: "underline",
    color: "#0ea5e9",
    // textColor:""
  };
  let navigate = useNavigate();
   const logOutHandler = async () => {
   await localStorage.removeItem("userData");
    auth.signOut().then(() => navigate("/"));
  };
  const auth = getAuth();
  useEffect(() => {
    let user = localStorage.getItem("userData");
    if (user) {
      setIsAuth(true);
    }else{
      setIsAuth(false)
    }
  }, []);
  let activeClassName = "underline";
  return (
    <div className="w-[100%] bg-white">
      <div className="w-[80%]  flex justify-between items-center   m-auto md:flex md:items-center md:justify-between ">
        <div className="">
          <Link to="/">
            <img src="images/logo.png" className="logo" alt="logo img" />
          </Link>
        </div>
        <div className=" md:static sm:relative">
          <div className="sm:bg-green-100 md:bg-inherit p-2">
            <AiOutlineMenu
              size={20}
              onClick={() => toggleHandler()}
              className="md:hidden text-black font-semibold"
            />
          </div>
          <div
            className={`md:flex z-50 bg-white md:bg-inherit md:static  absolute right-2 md:w-full  sm:shadow-xl md:shadow-none  p-4 border-[1px] md:drop-shadow-none md:border-0  sm:drop-shadow-md rounded-md md:mt-0 mt-[10px]  md:items-center md:justify-between list-none ${
              toggle ? "hidden" : "block"
            }`}
          >
            <ul className={`md:space-x-4 leading-9 md:flex list-none }`}>
              {/* <Link to="/home"> */}
              {!isAuth ? (
                <li
                  onClick={() => toggleHandler() & setActive("home")}
                  className="text-md text-white  font-semibold"
                >
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
              ) : (
                <Link to="/">
                  <li
                    onClick={() => setToggle(false) & setActive("home")}
                    className="text-md text-white  font-semibold"
                  >
                    <NavLink
                      to="/home"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="text-md text-black  font-semibold"
                    >
                      Home
                    </NavLink>
                  </li>
                </Link>
              )}

              <li
                onClick={() => toggleHandler() & setActive("service")}
                className="text-md text-white  font-semibold"
              >
                <NavLink
                  to="/services"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-md text-black  font-semibold"
                >
                  Services
                </NavLink>
              </li>
              {/* </Link> */}
              {/* <Link to="/contactus"> */}
              <li
                onClick={() => toggleHandler() & setActive("contact")}
                className="text-md text-white  font-semibold"
              >
                <NavLink
                  to="/contactus"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-md text-black  font-semibold"
                >
                  Contact Us
                </NavLink>
              </li>
              {/* </Link> */}
              <Link to="/aboutus">
                <li
                  onClick={() => setToggle(false) & setActive("about")}
                  className="text-md text-white  font-semibold"
                >
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
              {!isAuth && (
                <Link to="/register">
                  <li
                    onClick={() => setToggle(false) & setActive("register")}
                    className="text-md text-white  font-semibold"
                  >
                    <NavLink
                      to="/register"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="text-md text-black  font-semibold"
                    >
                      Register
                    </NavLink>
                  </li>
                </Link>
              )}
              {!isAuth && (
                <Link to="/login">
                  <li
                    onClick={() => setToggle(false) & setActive("login")}
                    className="text-md text-white  font-semibold"
                  >
                    <NavLink
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="text-md text-black  font-semibold"
                    >
                      Login
                    </NavLink>
                  </li>
                </Link>
              )}
              {isAuth && (
                <Link to="/profile">
                  <li
                    onClick={() => setToggle(false) & setActive("profile")}
                    className="text-md text-white  font-semibold"
                  >
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
              )}
              {isAuth && (
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
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
