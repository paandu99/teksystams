import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCopyright,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

function Footer() {
  function mailHandler() {
    window.open("mailto:info@bsitcs.com?subject=SendMail&body=Description");
  }

  return (
    <div className="w-[80%] border-t-[1px] border-[#636e72]  m-auto ">
      <div className="md:flex  py-6 space-x-6 w-[100%]">
        {/* <div className="md:w-[50%] sm:w-full ">
          <p className="text-white  text-xl">
            "Let us help you find the right talent for your IT team. Contact us
            today to learn more about our customized staffing solutions."
          </p>
          <Link to="/contactus">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-8 py-2 px-6 text-white hover:border-[1px] hover:border-blue-300 rounded-md ">
            Ask Question
          </button>
          </Link>
        </div> */}
        <div className="md:flex md:w-[100%] sm:w-full justify-between">
          <div className=" md:w-[60%] md:mt-12 leading-10 ">
            <p className="text-white mb-2 pl-6 mt-6 text-sm font-bold">
              Get In Touch
            </p>
            <div className="md:items-end pl-6   md:flex md:space-x-10">
              <div className="flex space-x-4">
              <div
                // onClick={() => mailHandler()}
                className="flex space-x-2 items-center"
              >
                <AiOutlineMail size={18} className="font-semibold text-white" />
                <p className="text-white text-md font-semibold">Mail</p>
              </div>
              <a
                class="social-icon-link facebook"
                // href="https://www.linkedin.com/company/blossoms-it-consulting-services/"
                target="_blank"
                aria-label="Facebook"
              >
              <div className="flex pl-10 space-x-2 items-center">
                <AiFillLinkedin
                  size={18}
                  className="font-semibold text-white"
                />
                <p className="text-white text-md font-semibold">Linkdin</p>
              </div>
              </a>
              </div>
              <div className="flex space-x-4">
              <a
                class="social-icon-link facebook"
                // href="https://www.instagram.com/bics_official_/?hl=en"
                target="_blank"
                aria-label="Facebook"
              >
              <div className="flex space-x-2 items-center">
                <AiFillInstagram
                  size={18}
                  className="font-semibold text-white"
                />
                <p className="text-white text-md font-semibold">Instagram</p>
              </div>
              </a>
              <a
                class="social-icon-link facebook"
                // href="https://twitter.com/BICS_Official"
                target="_blank"
                aria-label="Facebook"
              >
              <div className="flex md:pl-6 space-x-2 items-center">
                <AiFillTwitterCircle
                  size={18}
                  className="font-semibold text-white"
                />
                <p className="text-white text-md font-semibold">Twitter</p>
              </div>
              </a>
              </div>
              <div className="flex space-x-4">
              <a
                class="social-icon-link facebook"
                // href="https://api.whatsapp.com/send/?phone=918977112726&text&type=phone_number&app_absent=0"
                target="_blank"
                aria-label="Whatsapp"
              >
                <div className="flex space-x-2 items-center">
                  <BsWhatsapp size={18} className="font-semibold text-white" />

                  <p className="text-white text-md font-semibold">Whatsapp</p>
                </div>
              </a>
              <a
                class="social-icon-link facebook"
                // href="https://www.facebook.com/profile.php?id=100090492535893&mibextid=LQQJ4d"

                target="_blank"
                aria-label="Whatsapp"
              >
                <div className="flex space-x-2  md:pl-6 items-center">
                  <BsFacebook size={18} className="font-semibold text-white" />

                  <p className="text-white text-md font-semibold">Facebook</p>
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:w-[30%] md:mt-0 sm:mt-10 sm:w-full">
          <p className="text-white md:pb-2 pb-2 pt-4 text-sm font-bold">
            CONTACT US
          </p>
          <p className="text-white text-md font-semibold">
            Feel free to get in touch with us via mail or send us a message
          </p>
          <p
            onClick={mailHandler}
            className="text-sky-400 text-md md:mt-2 mt-8 font-semibold"
          >
            info@bsitcs.com
          </p>
        </div> */}
      </div>
      <div className="border-t-[1px]  border-t-[#636e72]">
        <div className="flex space-x-2 pt-4 pb-8">
          <AiOutlineCopyright size={18} className="text-white" />
          <p className="text-white text-sm font-semibold">TEKsystams</p>
          {/* <img src="images/boxing.png" className="w-[20px]" alt="footer" />  */}
          <p className="text-white text-sm font-semibold">
            2024, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
