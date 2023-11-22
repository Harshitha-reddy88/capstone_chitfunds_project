
import React from "react";
import "./landingPage.css"

function LandingPage(){
    
    return(
        <div className="backgroungImg">
            <div >

            </div>
            <div className="firstDiv">
                <div>
                <h3 className="text">Your financial future, now at your fingertips.
                Our chit fund tracking website is designed with user-friendly 
                interface to help you watch your money grow.
                </h3>
                <h1 className="text">Welcome to a new era of prosperity !.</h1>
                <h1 className="heading text">CHIT FUNDS</h1>

                </div>
            </div>

            <div className="secondDiv">
                <div>
                <div>
                    <h1> To start your journey &#128521;</h1>
                </div>

                <div>
                <a className="link"href="/home"><button className="loginBtn">Click Me</button></a>
                </div>

                </div>
            </div>


        </div>
    )
}
export default LandingPage;