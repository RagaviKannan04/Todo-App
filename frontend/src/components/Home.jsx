import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
import Popup from "./Popup";
import ToDo from "./ToDo";
import './Home.css'
import Footer from "./Footer";


const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = async() => {
    axios
      .post(`http://localhost:3001/save`, { toDo: input})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style= {{backgroundImage : "url(https://i.pinimg.com/564x/ca/f0/11/caf011a6e8086730dabcb4901413c659.jpg)",backgroundSize: "cover",
            backgroundRepeat: "no-repeat"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <main>
      <div className="container">
       <h1 className="title">Listaris</h1>
       <Link to='/login' className="btn btn-light my-3"><IoIosLogOut/></Link>
        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              text={el.toDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
    <Footer/>

        {/* <Link to='/login' className="btn btn-light my-5">Logout</Link> */}
    </div>
  )
}

export default Home