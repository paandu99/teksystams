import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Training from "./components/Training";
import { ToastContainer } from "react-toastify";
import Marketing from "./components/marketing";
import ProfileMarketing from "./components/ProfileMarketing";
import WorkForce from "./components/WorkForce";
import UsWorkForce from "./components/UsWorkForce";
import ContactTraining from "./components/ContactTraining";
import UKWorkForce from "./components/UKWorkForce";
import Canada from "./components/Canada";
import InWorkForce from "./components/InWorkForce";
import Register from "./components/Register";
import Login from "./components/Login";
import IndTechnology from "./components/IndTechnology";
import Dashboard from "./components/Dashboard";
import Learning from "./components/Learning";
import SingleClass from "./components/SingleClass";
import Profile from "./components/Profile";
import ChnagePassword from "./components/ChnagePassword";
import Panel from "./components/Panel";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    let user = localStorage.getItem("userData");
    if (user) {
      setIsLogged(true);
    }else{
      setIsLogged(false)
    }
  },[])
  return (
    <div className=" m-auto ">
      <BrowserRouter>
        <Routes>
          {!isLogged && <Route path="/" element={<Home />} />}

          {isLogged && <Route path="/home" element={<Dashboard />} />}
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/marketing" element={<Marketing />} />

          <Route path="/services" element={<Service />} />
          <Route path="/trainings" element={<Training />} />
          <Route path="/profileMarketing" element={<ProfileMarketing />} />
          <Route path="/workforcesolutions" element={<WorkForce />} />
          <Route path="/usworkforce" element={<UsWorkForce />} />
          <Route path="/ukworkforce" element={<UKWorkForce />} />
          <Route path="/canadaworkforce" element={<Canada />} />
          <Route path="/inworkforce" element={<InWorkForce />} />
          <Route path="/contacttrainings" element={<ContactTraining />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/induvidualTechnology/:id" element={<IndTechnology />} />
          {/* <Route element={<PrivateRoutes />}> */}
            <Route path="/home" element={<Dashboard />} />
            <Route path="/learning/:id" element={<Learning />} />
            <Route path="/singleclass/:id" element={<SingleClass />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChnagePassword />} />
            <Route path="/admin" element={<Panel />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
