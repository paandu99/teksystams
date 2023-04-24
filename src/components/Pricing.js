import PricingCard2 from "./PricingCard2"
import PricingCards1 from "./PricingCards1"
import PricingCard3 from "./PricingCard3"
function Pricing(){
    return(
    <div className='w-[80%] mb-20 m-auto'>
        <h1 className="text-black hsize md:text-[40px] font-semibold text-center">Pricing & Plans</h1>
        <p className="text-[#636e72] psize md:text-md mt-8 font-semibold text-center">Use Pyme to launch, grow and scale your business</p>
        <p className="text-black font-semibold mb-8 text-md text-center mt-8">Billied monthly</p>
        <div className="md:py-8 md:space-x-4">
        <PricingCards1 />
        <PricingCard2 />
        <PricingCard3 />
        </div>
   </div>
    )
}
export default Pricing