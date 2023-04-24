import Navbar from "./Navbar"
import ServiceHome from "./ServicesHome"
import Carsoule from "./Carsoule";
import Footer from "./Footer";

function Service(){
    return(
        <div>
            <Navbar />
            <img src="images/service3.jpg" className="w-full" />
        <div className="w-[90%] m-auto  ">
        <ServiceHome />

        <div className=" w-[100%]  pb-[3%] mt-[5%] m-auto">

<div className="w-[80%] m-auto  text-center pt-[3%] ">
  <div className="pb-6 ">
    <p className="text-white   hsize md:text-[35px] font-semibold">
      Technologies We Provide In Training
    </p>
  </div>
  <h3 className="text-[#b2bec3] psize sm:w-auto md:w-[50%] flex justify-center m-auto md:text-[20px] font-semibold">
  "Unlock Your Potential: Empowering Youth Through IT Training"
  </h3>
</div>
<div className="my-12 w-[100%]">
  <Carsoule />
  
</div>
</div>

      </div>
      <Footer />
      </div>
    )
}

export default Service