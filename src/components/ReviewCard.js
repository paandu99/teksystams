import { AiOutlineTwitter } from "react-icons/ai"

function ReviewCard(props){
    return(
        <div className="reviewCard">
            <div className="bg-white  rounded-md p-4 inline-block">
            <div className="flex space-x-12">
                <div className="flex items-center space-x-4">
                <img src={props.img} alt="t1" />
                <div>
                    <p className="font-semibold">{props.name}</p>
                    <p className="text-sm font-semibold text-[#b2bec3]">{props.title}</p>
                </div>
                </div>
                {/* <AiOutlineTwitter size={18} className="text-blue-400 " /> */}
            </div>
            <p className="text-[#636e72] py-4  text-left font-semibold">{props.desc}</p>
            </div>
        </div>
    )
}
export default ReviewCard