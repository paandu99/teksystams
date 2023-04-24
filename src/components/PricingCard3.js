import { AiOutlineCheckCircle } from "react-icons/ai"


function PricingCard3(){
    return(
        <div className="bg-[#f7fafc]  md:w-[30%] sm:block w-full md:inline-block reviewCard px-8 py-6 rounded-md">
            <div>
                <h1 className="text-black font-semibold text-xl">Launch</h1>
                <p className="text-black text-md font-semibold">Pay as you go per campaign, ideal for user acqusition</p>
            </div>
            <p className="text-2xl font-semibold text-black mt-8">$49</p>
            <p className="text-md font-semibold text-black">Plus $0.20 per user</p>
            {/* <p className="text-md font-semibold text-black">All the features from Launch plus :</p> */}
            <div className="space-y-2 mt-8">
                <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Campaign Builder</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm "> Reward distribution</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">125k+ Audience</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Basic Targeting</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">User Insights</p>
                  </div>
                  </div>
            <button className=" mt-4 hover:bg-[#0010f7] hover:text-white border-[1px] border-[#0010f7] rounded-md px-8 py-2 w-full text-md text-[#0010f7] font-semibold">Sign Up</button>
        </div>
    )
}
export default PricingCard3