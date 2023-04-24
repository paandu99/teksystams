import ReviewCard from "./ReviewCard"

function Reviews(){
    const data=[
        {
            img:"images/1.png",
            name:"Manideep",
            title:"Devops",
            desc:"Trainer was good explained very well with real time examples"
        },
        {
            img:"images/2.png",
            name:"swapna",
            title:"Java",
            desc:"Course is pretty much good that able crack multiple interviews."
        },
        {
            img:"images/4.png",
            name:"Bhashitha",
            title:"Salesforce",
            desc:"Finished my Salesforce course here now am working in medium size organization with huge package as a fresher."
        },
        {
            img:"images/t4.png",
            name:"Paandu",
            title:"React",
            desc:"Completed my react training here the trainer was good."
        },
        {
            img:"images/3.png",
            name:"Sharada",
            title:".Net",
            desc:"Finished my .Net here and got a good oppurtunity in MNC."
        },
        {
            img:"images/t6.png",
            name:"Raghu",
            title:"US Payroll",
            desc:"After completing this course got better package."
        },
    ]


    return(
        <div className="w-[100%]   ">
            <h1 className="md:text-[40px]  hsize text-center pb-12 pt-16 text-white font-semibold">100+ people love us</h1>
            <p className="text-md text-center pb-8 font-semibold text-[#636e72]">More than 100+ people already got placed from our side after completing training</p>
           <div className=" md:grid md:grid-cols-3 gap-6  w-[80%] m-auto pb-20">
            {/* <ReviewCard className="col-span-3" />
            <ReviewCard className="col-span-3" />
            <ReviewCard className="col-span-3" /> */}
            {
                data.map((item)=>{
                    return <ReviewCard className="md:col-span-3  " img={item.img} desc={item.desc} title={item.title} name={item.name} />
                })
            }
           </div>
            {/* <ReviewCard /> */}
        </div>
    )
}
export default Reviews