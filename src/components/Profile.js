import Navbar from "./Navbar";
import { useRef, useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import PNavBar from "./PNavBar";
import { useEffect } from "react";
import axios from "axios";
function Profile() {
  const [fname, setFname] = useState("Bhavana Nalajal");
  const [email, setEmail] = useState("bhavan@gmail.com");
  const [mobile, setMobile] = useState("7731053648");
  const [type, setType] = useState("profile");
  const [userData, setUserData] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("userData");
    if (data) {
      data = JSON.parse(data);
      setFname(data?.name);
      setEmail(data?.email);
      setMobile(data?.mobile);
      setUserData(data);
    }
  }, []);
  async function editHandler() {
    let bodyData = {
      name: fname,
      email: email,
      mobile: mobile,
      isPaid: userData.isPaid,
      isMarketing: userData.isMarketing,
      course: userData.course,
    };
    bodyData = bodyData
    try {
      const response = await axios.put(
        `https://us-central1-bics-2043a.cloudfunctions.net/app/users/update/${userData?.id}`,
        bodyData
      );
      if(response.status == 200){
        setType("profile") 
      }else{
        setType("edit")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      {/* <img src="images/marketing.jpg" className="w-full" /> */}

      <div className="w-[90%] m-auto  ">
        <div className="bg-white text-center   mb-12 m-auto rounded-md mt-20  p-8 md:w-[60%]">
          {type == "profile" ? (
            <p className="md:text-xl text-md pb-4 font-semibold">
              Account Details
            </p>
          ) : (
            <p className="md:text-xl text-md pb-4 font-semibold">
              Edit Details
            </p>
          )}

          {type == "profile" ? (
            <form>
              <div className="flex justify-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={fname}
                  placeholder="Full Name"
                  type="text"
                  disabled
                  className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  placeholder="Mail or Phone"
                  type="text"
                  disabled
                  className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={mobile}
                  placeholder="Phone Number"
                  type="text"
                  disabled
                  className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
                />
              </div>
            </form>
          ) : (
            <form>
              <div className="flex justify-center">
                <input
                  onChange={(e) => setFname(e.target.value)}
                  name="email"
                  value={fname}
                  placeholder="Full Name"
                  type="text"
                  className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
                />
              </div>
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
              <div className="flex justify-center">
                <input
                  onChange={(e) => setMobile(e.target.value)}
                  name="email"
                  value={mobile}
                  placeholder="Phone Number"
                  type="text"
                  className="outline-none w-full  pl-4 md:w-[50%] placeholder:text-black mb-4 placeholder:pl-4 py-[4px]  border-black border-[2px] rounded-md"
                />
              </div>
            </form>
          )}
          <div className="my-6">
            {type == "profile" && (
              <button
                onClick={() => setType("edit")}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]"
              >
                Edit Details
              </button>
            )}
            {type == "edit" && (
              <button
                onClick={() =>  editHandler()}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]"
              >
                Save Details
              </button>
            )}
          </div>
          <button
            onClick={() => navigate("/changepassword")}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full md:w-[50%] text-white font-semibold rounded-md px-8 py-[4px]"
          >
            Change Password
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
