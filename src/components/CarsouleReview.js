import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import ReviewCarCard from "./ReviewCarCard";


function CarsouleReview(){
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
            title:"Pandu",
            description:"after completing this course got my first my job at mnc with handsome package and the trainer is very good."
        },
        {
          title:"Raj",
          description:"before joining this course am not aware of coding and developing but within 4 months am able to develope websites on my own got job in mnc."
      },
      {
        title:"Siri",
        description:"before joining this course am not aware of coding and developing but within 4 months am able to develope websites on my own got job in mnc."
    },
     
      ]
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
  itemClass="carousel-item-padding-40-px w-400px"
>
    {
        data.map((item)=>{
           return <ReviewCarCard title={item.title}  description={item.description} />
        })
    }
   
 
</Carousel>
    )
}

export default CarsouleReview