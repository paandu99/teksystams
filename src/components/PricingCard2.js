import { AiOutlineCheckCircle } from "react-icons/ai"

function PricingCard2(){
    return(
        <div className="bg-[#f7fafc]  md:w-[30%] sm:block w-full md:inline-block reviewCard px-8 py-6 rounded-md">
            <div>
                <h1 className="text-black font-semibold text-xl">Grow</h1>
                <p className="text-black text-md font-semibold">All in one platform to target, grow, retainusers in web3</p>
            </div>
            <p className="text-2xl font-semibold text-black mt-8">$2000</p>
            <p className="text-md font-semibold text-black">Per month</p>
            <p className="text-md font-semibold mt-4 text-black">All the features from Launch plus :</p>
            <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">  5000 Unique Users Per Month</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm "> Detailed User Targeting</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Advanced Reporting</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Loyality, Giveraways, Retention</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Discover Rewards</p>
                  </div>
                  </div>
            <button className=" mt-4 hover:bg-[#0010f7] hover:text-white border-[1px] border-[#0010f7] rounded-md px-8 py-2 w-full text-md text-[#0010f7] font-semibold">Book A Call</button>
        </div>
    )
}
export default PricingCard2