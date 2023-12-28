import React from "react";
import "./OtpVerification.css";
import  OtpInput from "otp-input-react";
import  PhoneInput from "react-phone-input-2";
import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase.config";
import { RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import {Toaster,toast} from "react-hot-toast";

function OtpVerification(){
    const divStyle = {
        backgroundImage: `url("https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y=")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
      };

    const [otp,setOtp]=useState("");
    const [phone,setPhone]=useState("");
    const[showotp,setShowotp]=useState(false);
    const[user,setUser]=useState(null)

    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.phoneNumber) {
          setPhone(location.state.phoneNumber);
        }
      }, [location.state]);

    function onCapcthVerify()
    {
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                  onSignup()
                },
                'expired-callback': () => {
                }
              });
              
        }
    }

    function onSignup(){
        onCapcthVerify()
        const appVerifier=window.recaptchaVerifier;
        const formphone='+'+phone
        signInWithPhoneNumber(auth, formphone, appVerifier)
        .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowotp(true);
        toast.success('otp sended succesfully')
        })
        .catch((error) => {
            console.log(error)
        });
    }

    function onOtpVerify(){
        window.confirmationResult.confirm(otp).then(async(res)=>{
            console.log(res);
            setUser(res.user);
        }).catch((err)=>{
            console.log(err);

        })
    }

    return(
        <section className="bg-color" style={divStyle}>
            <div className="child-container">
                <Toaster toastOptions={{duration:4000}}/>
                <div id="recaptcha-container"></div>

                {
                    user ?(

                        <div>
                            <h2 className="otpHeading">number verified successfully &#128077;</h2>
                            <a href="/doubleMember"><button className="okButton">OK</button></a>
                        </div>
                        
                    ):(
                    <div className="otpHeadingDiv">
                        <h1 className="otpHeading">Welcome to <br></br>OTP VERIFICATION</h1>
                    {
                        showotp ?
                            <div>
                                <lable htmlFor="otp" > Enter your OTP</lable>
                                    <OtpInput value={otp} onChange={setOtp}OTPLength={6} otpType="number" disabled={false}autoFocus className="otpContainer"></OtpInput>
                                <button onClick={onOtpVerify}className="verifyBtn">
                                    <span className="otpSpan">Verify OTP</span>
                                </button>
                            </div> :

                            <div className="verificationDiv">

                                <div className="phoneImgDiv">
                                    <img className="phoneImg"src="https://cdn-icons-png.flaticon.com/512/6596/6596115.png" alt="error"/>
                                </div>
                                <lable className="verifyText" htmlFor="phone" > verify your phone number</lable>
                                
                                <PhoneInput className="phoneText"country={'in'}value={phone} onChange={setPhone}>{phone}</PhoneInput>
                                <button onClick={onSignup}className="verifyBtn">
                                    <span className="verifySpan">send code via SMS</span>
                                </button>
                            </div>
                    }
                    </div>
                    )
                }
            </div>
            

        </section>

    )
}
export default OtpVerification;
