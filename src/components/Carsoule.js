import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import react, { useState } from "react"
import { useEffect } from "react";
import axios from "axios";


function Carsoule(){
  const [courseData,setCourseData]=useState([])
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      const data=[
        {
          img:"images/java.png",
            title:"Java ",
            description:"Java is one of the most widely used programming languages in the world. Its popularity means that there is a large pool of Java developers available to work on projects, as well as a wealth of resources, tools, and libraries available to support Java development."
        },
        {
          img:"images/salesforce.png",
            title:"SalesForce",
            description:"Salesforce is a cloud-based platform, which means that it can be accessed from anywhere with an internet connection. This makes it easy for businesses to manage their customer relationships from anywhere in the world, without the need for expensive on-premises hardware and software"
        },
        {
          img:"images/testing.png",

            title:"QA & Testing",
            description:"Software testing is essential for ensuring the quality and reliability of software products. Testing helps to identify defects and bugs in the software, allowing developers to fix them before the software is released to customers."
        },
        {
          img:"images/python.jpg",

            title:"Python",
            description:"Python is known for its simplicity and ease of use. Its syntax is straightforward and easy to understand, making it an ideal language for beginners and experienced programmers alike."
        },
        {
          img:"images/devops.png",
            title:"Devops",
            description:"DevOps promotes a culture of collaboration and communication between development and operations teams, which can result in faster delivery of software products. DevOps teams work together to automate processes, reduce manual efforts and eliminate unnecessary delays."
        },
        {
          img:"images/sap.png",
          title:"SAP",
          description:"SAP provides a wide range of solutions for various industries and business functions, including finance, human resources, supply chain management, and customer relationship management. These solutions are designed to meet the unique needs of different businesses."
      },
      {
        img:"images/ba.png",
        title:"Business Analyst",
        description:"Business analysts work with stakeholders to identify and document business requirements and needs. They help to identify pain points, inefficiencies, and areas for improvement, enabling organizations to make informed decisions about technology solutions."
    },
    {
      img:"images/net.png",
      title:".Net",
      description:".NET is used to develop a wide range of applications, including desktop applications, web applications, mobile applications, and cloud-based applications. This makes it a versatile framework that can be used in various industries and for different purposes."
  },
  {
    img:"images/uspayrolls.png",
    title:"US Payrolls",
    description:"US Payrolls, also known as nonfarm payrolls, refer to the monthly report published by the US Bureau of Labor Statistics that provides data on the number of nonfarm jobs created or lost in the United States in the previous month. "
}
      ]

      async function getCourseHandler(){
        const response = await axios.get("https://us-central1-bics-2043a.cloudfunctions.net/app/coursedata")
        setCourseData(response.data.data)
      }
      console.log(courseData,'check response..........')
      useEffect(()=>{
        getCourseHandler()
      },[])





    return(
        <Carousel
        partialVisible={true}
  swipeable={true}
  draggable={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  arrows={true}
  autoPlaySpeed={6000}
  customTransition="transform 1500ms ease-in-out"
  transitionDuration={1200}
  containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px w-400px"
>
    {
        courseData.map((item)=>{
           return <Card title={item?.title} id={item.uid} img={item?.downloadUrl} description={item?.description} />
        })
    }
   
 
</Carousel>
    )
}

export default Carsoule