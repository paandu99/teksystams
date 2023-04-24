import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
function Panel() {
  const [whoData, setWhoData] = useState("");
  const [whosList, setWhosList] = useState([]);
  const [whyData, setWhyData] = useState("");
  const [whyList, setWhyList] = useState([]);
  const [whatData, setWhatData] = useState("");
  const [whatList, setWhatList] = useState([]);
  const [topicHeading, setTopicHeading] = useState("");
  const [topicSubHeading, setTopicSubHeading] = useState("");
  const [topicSubHeadingData, setTopicSubHeadData] = useState("");
  const[mainData,setMainData]=useState()

  const [topicData, setTopicData] = useState(
    {
      title: "",
      subheading: "",
      data: [""],
    },
  );
  const form = useRef();

  const whoDataHandler = () => {
    if (whoData) {
      setWhosList([...whosList, whoData]);
      setWhoData("");
    }
  };
  const removeWhoHandler = (index) => {
    console.log(index);
    let data = [...whosList];
    data.splice(index, 1);
    setWhosList(data);
  };
  const editWhoHandler = (index) => {
    let data = [...whosList];
    setWhoData(data[index]);
    data.splice(index, 1);
    setWhosList(data);
  };
  const whyDataHandler = () => {
    if (whyData) {
      setWhyList([...whyList, whyData]);
      setWhyData("");
    }
  };
  const removeWhyHandler = (index) => {
    console.log(index);
    let data = [...whyList];
    data.splice(index, 1);
    setWhyList(data);
  };
  const editWhyHandler = (index) => {
    let data = [...whyList];
    setWhyData(data[index]);
    data.splice(index, 1);
    setWhyList(data);
  };
  const whatDataHandler = () => {
    if (whatData) {
      setWhatList([...whatList, whatData]);
      setWhatData("");
    }
  };
  const removeWhatHandler = (index) => {
    console.log(index);
    let data = [...whatList];
    data.splice(index, 1);
    setWhatList(data);
  };
  const editWhatHandler = (index) => {
    let data = [...whatList];
    setWhatData(data[index]);
    data.splice(index, 1);
    setWhatList(data);
  };
const [isData,setData]=useState(false)
  const topicDataHanler = (type) => {
    if (type == "heading") {
      let data =topicData
      data.title = topicHeading;
      setTopicData(data);
      setData(!isData)
      console.log(topicData,'check in heading....')
    } else if (type == "subheading") {
      console.log(topicSubHeading)
      let data = topicData
      data.subheading = topicSubHeading;
      setTopicData(data);
      setData(!isData)
      console.log(topicData,'check in sub heading....')
    } else {
      let data = topicData
      console.log(topicSubHeadingData)
      data.data.push(topicSubHeadingData);
      setTopicData(data);
      setData(!isData)
      setTopicSubHeadData("")
    }
  };


  const MainDataHandler =()=>{
    setMainData([...mainData,topicData])
  }
  
  return (
    <div>
      <Navbar />
      <img src="images/contactus.jpg" className="w-full" />

      <div className="w-[90%] padding-12  bg-[white] m-auto  ">
        <h1 className="text-xl">Admin Panel</h1>
        <div>
          <h1>Course Data</h1>
          <div>
            <table className="w-full">
              <thead className="bg-green-400">
                <tr>
                  <td>name</td>
                  <td>description</td>
                  <td>duration</td>
                  <td>tech stack</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test anme</td>
                  <td>test descripti</td>
                  <td>3 months</td>
                  <td>react, java, sql</td>
                  <td>
                    <div className="flex space-x-6">
                      <AiFillEdit size={28} />
                      <AiOutlineDelete size={28} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[80%]  ml-20   padding-12">
            <div className="flex w-[100%] space-x-8 justify-between">
              <div className="w-[50%]">
                <lable>Title</lable>
                <input
                  type="text"
                  className="outeline-none w-full border-2 border-bl"
                />
              </div>
              <div className="w-[50%]">
                <lable>Duration</lable>
                <input
                  type="text"
                  className="outeline-none w-full border-2 border-bl"
                />
              </div>
            </div>
            <div className="w-full">
              <label>Tech Stacks</label>
              <input
                type="text"
                className="outline-none w-full border-2 border-black"
              />
            </div>
            <div className="w-full">
              <label>Description</label>
              <textarea
                type="text"
                className="outline-none w-full border-2 border-black"
              />
            </div>
            <div>
              <div className="w-full pt-6">
                <label>Who this course for</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    onChange={(e) => setWhoData(e.target.value)}
                    value={whoData}
                    className="outline-none w-full border-2 border-black"
                  />
                  <button
                    onClick={whoDataHandler}
                    className="bg-green-400 py-2 px-6 rounded-md"
                  >
                    Add
                  </button>
                </div>
                {whosList?.map((item, index) => {
                  return (
                    <div className="flex space-x-4 py-4">
                      <p>{item}</p>
                      <AiOutlineDelete
                        onClick={() => removeWhoHandler(index)}
                        size={28}
                      />
                      <AiFillEdit
                        onClick={() => editWhoHandler(index)}
                        size={28}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-full pt-6">
                <label>Why take this course</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    onChange={(e) => setWhyData(e.target.value)}
                    value={whyData}
                    className="outline-none w-full border-2 border-black"
                  />
                  <button
                    onClick={whyDataHandler}
                    className="bg-green-400 py-2 px-6 rounded-md"
                  >
                    Add
                  </button>
                </div>
                {whyList?.map((item, index) => {
                  return (
                    <div className="flex space-x-4">
                      <p>{item}</p>
                      <AiOutlineDelete
                        onClick={() => removeWhyHandler(index)}
                        size={28}
                      />
                      <AiFillEdit
                        onClick={() => editWhyHandler(index)}
                        size={28}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-full pt-6">
                <label>What you'll learn</label>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    onChange={(e) => setWhatData(e.target.value)}
                    value={whatData}
                    className="outline-none w-full border-2 border-black"
                  />
                  <button
                    onClick={whatDataHandler}
                    className="bg-green-400 py-2 px-6 rounded-md"
                  >
                    Add
                  </button>
                </div>
                {whatList?.map((item, index) => {
                  return (
                    <div className="flex space-x-4 ">
                      <p>{item}</p>
                      <AiOutlineDelete
                        onClick={() => removeWhatHandler(index)}
                        size={28}
                      />
                      <AiFillEdit
                        onClick={() => editWhatHandler(index)}
                        size={28}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%]  mt-10 pb-10">
              <h1> enter details topic wise</h1>

              <div>
                <div className="flex space-x-4">
                  <div className="w-[50%]">
                    <label>Topic heading</label>
                    <div className="flex space-x-4">
                      <input
                        value={topicHeading}
                        onChange={(e) => setTopicHeading(e.target.value)}
                        type="text"
                        className="outline-none border-2 w-full border-black"
                      />
                      <button
                        onClick={() => topicDataHanler("heading")}
                        className="bg-green-400 py-2 px-6 rounded-md"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <label>Topic Sub heading</label>
                    <div className="flex space-x-4">
                      <input
                        value={topicSubHeading}
                        onChange={(e) => setTopicSubHeading(e.target.value)}
                        type="text"
                        className="outline-none border-2 w-full border-black"
                      />
                      <button
                        onClick={() => topicDataHanler("subheading")}
                        className={`${topicData.title ? "bg-green-600 py-2 px-6 rounded-md" : "bg-green-300 py-2 px-6 rounded-md"}`}
                        disabled={topicData.title ? false : true}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[100%]">
                  <label>Topic Sub Heading Data</label>
                  <div className="flex space-x-4">
                    <input
                      value={topicSubHeadingData}
                      onChange={(e) => setTopicSubHeadData(e.target.value)}
                      type="text"
                      className="outline-none border-2 w-full border-black"
                    />
                    <button
                      onClick={() => topicDataHanler("subheadingdata")}
                      // className="bg-green-400 py-2 px-6 rounded-md"
                      className={`${topicData.subheading ? "bg-green-600 py-2 px-6 rounded-md" : "bg-green-300 py-2 px-6 rounded-md"}`}
                      disabled={topicData.subheading ? false : true}

                    >
                      Add
                    </button>
                  </div>
                </div>

                 
                  <div>
                    <div className="flex">
                      <p>headind :</p> <p>{topicData.title}</p>
                    </div>
                    <div className="flex">
                      <p>headind :</p> <p>{topicData.subheading}</p>
                    </div>
                    <div>
                    <p>sub heading data :</p>
                    {topicData.data.map((item) => {
                      return (
                        <div className="flex">
                           <p>{item}</p>
                        </div>
                      );
                    })}
                    </div>
                    { <button 
                    disabled={topicData.data[0] ? false : true}
                    className={`${topicData.data[0] ? "bg-green-600 rounded-md w-full py-2" : "bg-green-400 rounded-md w-full py-2"}`} onClick={MainDataHandler}>Add Data</button>}
                    
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Panel;
