import { BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";

function ServiceHome() {
  return (
    <div className="w-[90%] m-auto my-10">
      <h1 className="text-[30px] font-semibold  text-white">
        Our Services
      </h1>
      <p className="text-white text-md my-4">
        We realize that any service we provide should create happy customers,
        employees and help in operational efficiencies and give you the
        bandwidth to focus on your market growth and customer footprint. Our
        teams have this focus ingrained in all the work they do.
      </p>
      <div className="md:grid md:grid-cols-12 mt-8 gap-4">
        <div className="md:col-span-4  hover:border-[2px]   bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">Website Development</h1>
            <Link to="/contactus">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
        </div>
        <div className="md:col-span-4 hover:border-[2px]  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">App Development</h1>
            <Link to="/contactus">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
        </div>
        <div className="md:col-span-4 hover:border-[2px]  bg-white rounded-md shadow">
            <BsPersonWorkspace size={60} className="m-auto mt-4" />
            <h1 className="font-semibold text-md md:text-xl m-auto text-center   pb-10 ">SEO Services</h1>
            <Link to="/contactus">
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-center font-semibold py-4">Contact Us</p>
            </Link>
            
        </div>
      </div>
    </div>
  );
}
export default ServiceHome;
