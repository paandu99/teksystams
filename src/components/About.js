import Footer from "./Footer"
import Navbar from "./Navbar"

function About(){
    return(
        <div>
            <Navbar />
            <img src="images/aboutus1.png" className="w-full" />
        <div className="w-[90%] mb-20 m-auto md:flex ">
        <div className="md:w-[70%] sm:w-full mt-[10%]">
          <div className="pb-6 ">
            <h1 className="text-white hsize sm:text-center md:text-[30px] font-semibold">
              About Us
            </h1>
          </div>
          <h3 className="text-[#b2bec3] text-center psize md:text-[20px] font-semibold">
            Connecting top talent with top companies: Empowering youth
          </h3>
          <div className="p-4">
            <p className=" text-white text-md leading-7">
              At our IT company, we believe in providing opportunities for the
              next generation of professionals to excel in the world of
              technology. We specialize in training young talent in the latest
              IT skills and equipping them with the necessary tools to succeed
              in the industry. Our focus is not only on providing IT training,
              but also on bridging the gap between talent and companies. As a
              recruiting company, we strive to match the best IT professionals
              with top-notch organizations that can benefit from their skills
              and experience. Our mission is to empower businesses by connecting
              them with exceptional young talent, and to help our IT
              professionals launch their careers in the technology sector.
            </p>
          </div>
         
        </div>
        
        <img
          className=" object-cover mt-[10%] w-[400px] rounded-md  "
          src="images/Bics13.jpg"
          alt="section-1"
        />
      </div>
      <Footer />
      </div>
    )
}

export default About