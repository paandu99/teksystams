import { AiOutlineCheckCircle } from "react-icons/ai"

function PricingCards1(){
    return(
        <div className="bg-[#f7fafc]  md:w-[30%] sm:block w-full md:inline-block reviewCard px-8 py-6 rounded-md">
            <div>
                <h1 className="text-black font-semibold text-xl">Scale</h1>
                <p className="text-black text-md font-semibold">Built for platforms looking to scale fast</p>
            </div>
            <p className="text-xl font-semibold text-black mt-8">$Custom</p>
            <p className="text-md mt-4 font-semibold text-black">All the features from Grow plus :</p>
            <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">  Unlimited Users Per Month</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm "> AI User Targeting</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Exclusive Cross Marketing</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">All Campaign Types</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <AiOutlineCheckCircle className="text-blue-500" />
                  <p className="font-semibold text-sm ">Custom Integrations</p>
                  </div>
                  </div>
            <button className=" mt-4 hover:bg-[#0010f7] hover:text-white border-[1px] border-[#0010f7] rounded-md px-8 py-2 w-full text-md text-[#0010f7] font-semibold">Book A Call</button>
        </div>
    )
}
export default PricingCards1