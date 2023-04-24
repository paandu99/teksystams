import { AiFillSetting } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import { Link } from "react-router-dom"

function ReviewCarCard(props){
    return(
        <div className="md:w-[80%] w-[98%]   border-2 border-black bg-white h-[100%] px-4 pt-6 pb-6 rounded-md">
            <div className="flex space-x-2 text-black h-[55%] font-semibold text-md ">
                
                <div>
                    <h1 className="text-xl text-[#ff4100] pt-2 pb-2">{props.title}</h1>
                    <p className="text-[#636e72] text-sm">{props.description}</p>
                </div>
            </div>
            
        </div>
    )
}
export default ReviewCarCard