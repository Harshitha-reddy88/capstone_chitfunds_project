import React from "react";
import Navbar from "../navbar/navbar"
import "./auctionChiti.css"
import { useNavigate } from "react-router";
function AuctionChiti() {
  const auctionStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
  };

  const navigate = useNavigate();
    const displayIframe = () =>{
        navigate("/searchAuction");
    }


  return (
    <div className="auctionBackground" style={auctionStyle}>


      <div className="auctionColor">
        <div>
          <Navbar/>
        </div>



        <div className="auctiondata">
            <div>
              <h1 className="auctionText">Bidding bonds, winning rewards</h1>
            </div>

            <div >
              <p className="auctionDouble">
              An Auction Chiti, also known as a chit fund with an auction system,<br></br> 
              operates similarly to a traditional chit fund but includes an auction<br></br> 
              process in each installment, providing an opportunity for participants <br></br>
              to bid for the prize amount.</p>
            </div>
            <div className="auctionBtn">
              <a href="/chitData"><button className="auctionbtn"><span></span>Add Chit Data</button></a>
              <button onClick={displayIframe} className="auctionbtn doubleexplore"><span></span>Explore More</button>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default AuctionChiti;


