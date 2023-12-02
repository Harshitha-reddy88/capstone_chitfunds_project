import React from "react";
import Navbar from "../navbar/navbar"
import "./Double.css"
import { useNavigate } from "react-router";
function DoubleForm() {
  const doubleStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
  };

  const navigate2=useNavigate();
    const displayIframe2 =()=>{
        navigate2("/searchDouble")
    }


  const navigate4=useNavigate();
  const doubleChitiData=()=>{
    navigate4("/double")
  }

  return (
    <div className="doubleBackground" style={doubleStyle}>


      <div className="doubleColor">
        <div>
          <Navbar/>
        </div>



        <div className="doubledata">
            <div>
              <h1 className="doubleText">Together we rise, in Double Chiti's stride</h1>
            </div>

            <div >
              <p className="aboutDouble">
                Double Chiti, also known as a double chit fund or a paired chit fund,<br></br> 
                is a financial scheme that operates on the basic principles of a <br></br>
                traditional chit fund but with a unique twist. In a Double Chiti system,<br></br> 
                instead of a single winner per installment, two individuals receive the payout. </p>
            </div>
            <div className="doubleBtn">
              <button onClick={doubleChitiData}className="doublebtn"><span></span>Add Chit Data</button>
              <button onClick={displayIframe2} className="doublebtn doubleexplore"><span></span>Explore More</button>
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default DoubleForm;


