
import React from "react";
import "./landingPage.css"
import { useNavigate } from "react-router";

function LandingPage(){

    const signupPage=useNavigate()
    const sigupLink=()=>{
        signupPage("/signup")
    }
    
    
    return(
        <div className="landingMainDiv">
            {/* <div className="landingSideDiv">
                
                <div className="landingContent">
                   <h1 className="landingHeading">CHIT FUNDS</h1>
                   <div className="landingText">
                        <h3>Your financial future, now at your fingertips.<br></br>
                            Our chit fund tracking website is designed <br></br>
                            with user-friendly interface to help you watch <br></br>
                            your money grow.
                        </h3>
                    </div>

                    <a className="link"href="/signup"><button className="landingBtn">SIGNUP</button></a>
                    
                    <div className="landingImgDiv">
                        <img className="loadingImg"src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/blog/payroll-calculation/payroll-calculation.png" alt="error"/>
                    </div>
                </div>
            </div> */}

            <div className="landingFirstDiv"></div>
            <div className="landingText">
                <div className="landingContent">
                    <h1 className="animation landingHeading">CHIT FUNDS</h1>
                    <p className="animation landingPara">Empower your financial future with Chit Funds.Your financial future, now at your fingertips.</p>
                    <p className="animation landingPara">Our chit fund tracking website is designed with user-friendly interface to help you watch your</p>
                    <p className="animation landingPara">money grow.Chit funds are a time-tested financial tool that combines saving and borrowing in </p>
                    <p className="animation landingPara"> a unique way.Make fixed contributions at regular intervals.Participants commit to regular</p>
                    <p className="animation landingPara">savings, fostering financial discipline and habit-building.Chit funds thrive on mutual trust</p>
                    <p className="animation landingPara">and cooperation, fostering a sense of community and financial inclusivity.</p>
                    <p className="animation registerText">Become a member by registering with</p>
                    <button className="btn animation" onClick={sigupLink}>SIGN IN</button>
                </div>
                <div>
                    <img className="landingImg animation" src="https://i.pinimg.com/736x/ec/8d/28/ec8d283cbda30c8ea6eccbd2196877b9.jpg" alt="error"/>
                </div>
            </div>
            <div className="landingSecondDiv"></div>
        </div>
    )
}
export default LandingPage;