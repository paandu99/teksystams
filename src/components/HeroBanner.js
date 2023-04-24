import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
import TweenOne from "rc-tween-one"
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
const HeroBanner =()=> {
    return (
      <BannerAnim autoPlaySpeed={4000} prefixCls="banner-user" autoPlay>
       
        <Element 
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bgimg2 h-full w-full"
            // style={{
            //   background: '#64CBCC',
            // }}
          />
        
          <p className="text-[45px] top-[35%] text-white font-semibold md:text-black md:left-[18%]" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            "Chase Your Dreams"
          </p>
          <p className="text-[45px] inline-block top-[40%] px-8 rounded-xl text-white font-semibold md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:left-[18%]" >
            BICS</p>
         
        </Element>
        <Element 
          prefixCls="banner-user-elem"
          key="0"
        >
          <BgElement
          
            key="bg"
            className="bgImg h-full w-full "
          />
          <p className=" md:text-[30px] top-[65%]  md:w-[50%] md:left-[45%] drop-shadow-md  text-black ease-in-out delay-150 duration-100 transition-shadow font-semibold md:top-[25%]" 
            // animation={{ x: 30, opacity: 0, type: 'from', delay: 100 }}
          >
        Acquiring the right talent is the most important key to growth.

          </p>
          <p className=" md:text-[25px] top-[70%] md:w-[50%] md:left-[45%] drop-shadow-md  text-black ease-in-out delay-150 duration-100 transition-shadow font-semibold md:top-[30%]" > 
            Hiring was and still is the most important thing we do..</p>
         
        </Element>
        {/* <Element 
         leaveChildHide
         
          prefixCls="banner-user-elem"
          key="1" 
        >
          <BgElement
            key="bg"
            className="bg bg-gradient-to-r from-cyan-500 to-blue-500"
            // style={{
            // //   background: '#64CBCC',
            //   backgroundImage:"./public/images/aboutus.jpg"
            // }}
          />
        
          <p className="text-xl" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            3rdd tag/..........
          </p>
        </Element> */}
      </BannerAnim>);
  }

export default HeroBanner

