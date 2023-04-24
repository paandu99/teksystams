import { AiFillSetting } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"

function Card(props){

    
    return(
        <div className="md:w-[80%] w-[98%]   bg-white h-[100%] px-4 pt-8 pb-12 rounded-md">
            <img src={props.img} className="m-auto border-[2px] border-black" />
            <div className="flex space-x-2 text-black h-[55%] font-semibold text-md ">
                
                <div>
                    <h1 className="text-xl text-black pt-2 pb-2">{props.title}</h1>
                    <p className="text-[#636e72] text-sm">{props.description}</p>
                </div>
            </div>
            <div className="flex mt-8 justify-center m-auto md:space-x-6 space-x-4 items-center">
                {/* <Link to="https://api.whatsapp.com/send/?phone=7207518882&text&type=phone_number&app_absent=0">
            <button className="bg-white border-[#28D146] rounded-md border-[1px] flex justify-between items-center  rounde-md px-2 py-2 font-semibold">
                <BsWhatsapp className="text-[#28D146] font-semibold" size={18} />
                Whatsapp</button>
                </Link>
                <Link to="/contacttrainings">
            <buuton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-4 px-2 py-2 font-semibold text-white rounded-md">Email Us</buuton>
            </Link> */}
             <Link to={`/induvidualTechnology/${props.id}`}>
            <buuton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-4 px-2 py-2 font-semibold text-white rounded-md">View More</buuton>
            </Link> 
            </div>
        </div>
    )
}
export default Card