import React from "react";
import Navbar from "../navbar/navbar"
import "./agent.css"
import { useNavigate } from "react-router";
function Agent() {
  const divStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
  };

  const navigate1=useNavigate();
    const displayIframe1 =()=>{
        navigate1("/searchAgent")
    }

    const chitChange=useNavigate();
    const chiti=()=>{
      chitChange("/agentChiti")
    }


  return (
    <div className="backgroundImg" style={divStyle}>


      <div className="auctionColor">
        <div>
          <Navbar/>
        </div>

        <div className="agentdata">
            <div className="textDiv">
              <h1 className="agentText">Creating pathways to your financial goals.</h1>
            </div>

            <div >
              <p className="aboutAgent">An Agent within the domain of chit funds is a key figure, <br></br>
                 serving as a liaison between aspiring investors and the chit <br></br>
                 fund company. They play a pivotal role in facilitating the <br></br>
                 seamless functioning of chit fund operations,</p>
            </div>
            <div className="agentBtn">
              <button  onClick={chiti}className="agentbtn"><span></span>Add Chit Data</button>
              <button onClick={displayIframe1} className="agentbtn explore"><span></span>Explore More</button>
            </div>
        </div>
      </div>

      
    </div>
    
  );
}

export default Agent;



