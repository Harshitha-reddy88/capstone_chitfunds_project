// import React from "react";
// import "./signup.css";
// import { useState } from "react";
// import { useNavigate } from "react-router";

// function Signup(){

//     const[signupName,setSiignupName]=useState("");
//     const[signupEmailId,setSignupEmailId]=useState("");
//     const[signupPassword,setSignupPassword]=useState("");
//     const[loginEmail,setLoginEmail]=useState("");
//     const[loginPassword,setLoginPassword]=useState("");
//     const loginPage=useNavigate()

//     function signupButtonClick(){
//         if(signupName !=="" || signupName !==" " || signupEmailId !=="" || signupEmailId !==" " || signupPassword !=="" || signupPassword !==" ")
//         {
//             let signupDetails=JSON.parse(localStorage.getItem("signup")) || []
//             for(let i=0;i<signupDetails.length;i++)
//             {
//                 if(signupDetails[i].signupName===signupName || signupDetails[i].signupPassword===signupPassword){
//                     alert("already have an account please login");
//                 }
//             }
//             localStorage.setItem("signup",JSON.stringify([...signupDetails,{signupName,signupEmailId,signupPassword}]));
//         }
//         else{
//             alert("please enter the details");
//         }
//     }

//     let login=JSON.parse(localStorage.getItem("signup"))||[];
//     function loginButtonClick(){

//         if(loginEmail==="" || loginEmail===" " || loginPassword==="" || loginPassword===" "){
//             alert("please fill the details");
//             return;
//         }
//         for(let i=0;i<login.length;i++){
//             if(login[i].signupEmailId===loginEmail && login[i].signupPassword===loginPassword){
//                 alert("login successful");
//                 localStorage.setItem("Newdata",JSON.stringify(login[i]));
//                 loginPage("/home")
//                 return;
//             }
//         }
        
//         alert("login failed");

//     }

//     const openRegister = () => {
//         const card = document.getElementById("card");
//         if (card) {
//             card.style.transform="rotateY(-180deg)";
//         }
//     };

//     const openLogin = () => {
//         const card = document.getElementById("card");
//         if (card) {
//             card.style.transform="rotateY(0deg)";
//         }
//     };

//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="inner-box" id="card">
//                     <div className="card-front">
//                         <h2 className="signupHeading">LOGIN</h2>
//                         <form>
//                             <input type="email" onChange={e =>setLoginEmail(e.target.value)}placeholder="Your Email Id" className="input-box" required/>
//                             <input type="password" onChange={e =>setLoginPassword(e.target.value)}placeholder="Password" className="input-box" required/>
//                             <button className="signupSubmit" onClick={loginButtonClick}type="submit" >Submit</button>
                            
//                             <input type="checkbox"/><span className="signupSpan">Remember Me</span>
//                         </form>
//                         <button type="button" className="signupBtn" onClick={openRegister}>I'm New Here</button>
//                         <div className="signupGoogleDiv">
//                             <img className="signupGoogleImg"src="https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg" alt="error"/>
//                             <a href="/home" className="signupAnchor">continue with google</a>
//                         </div>
                        
//                     </div>
//                     <div className="card-back">
//                         <h2 className="signupHeading">REGISTER</h2>
//                         <form>
//                             <input type="text"  onChange={e =>setSiignupName(e.target.value)} placeholder="Your Name" className="input-box" required/>
//                             <input type="email" onChange={e =>setSignupEmailId(e.target.value)} placeholder="Your Email Id" className="input-box" required/>
//                             <input type="password" onChange={e =>setSignupPassword(e.target.value)} placeholder="Password" className="input-box" required/>
//                             <button className="signupSubmit" onClick={signupButtonClick}type="submit">Submit</button>
//                             <input type="checkbox"/><span className="signupSpan">Remember Me</span>
//                         </form>
//                         <button type="button" className="signupBtn" onClick={openLogin}>I've an account</button>
//                         <div className="signupGoogleDiv">
//                             <img className="signupGoogleImg"src="https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg" alt="error"/>
//                             <a href="/home" className="signupAnchor">continue with google</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Signup;


import React, { useEffect } from "react";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth,provider} from "../signupConfig";
import {signInWithPopup} from 'firebase/auth';

function Signup(){

    const[value,setValue]=useState("");
    const navigate = useNavigate();
    const signupClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate('/home');
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    const[signupName,setSiignupName]=useState("");
    const[signupEmailId,setSignupEmailId]=useState("");
    const[signupPassword,setSignupPassword]=useState("");
    const[loginEmail,setLoginEmail]=useState("");
    const[loginPassword,setLoginPassword]=useState("");
    const loginPage=useNavigate()

    function signupButtonClick(){
        if(signupName !=="" || signupName !==" " || signupEmailId !=="" || signupEmailId !==" " || signupPassword !=="" || signupPassword !==" ")
        {
            let signupDetails=JSON.parse(localStorage.getItem("signup")) || []
            for(let i=0;i<signupDetails.length;i++)
            {
                if(signupDetails[i].signupName===signupName || signupDetails[i].signupPassword===signupPassword){
                    alert("already have an account please login");
                }
            }
            localStorage.setItem("signup",JSON.stringify([...signupDetails,{signupName,signupEmailId,signupPassword}]));
        }
        else{
            alert("please enter the details");
        }
    }

    let login=JSON.parse(localStorage.getItem("signup"))||[];
    function loginButtonClick(){

        if(loginEmail==="" || loginEmail===" " || loginPassword==="" || loginPassword===" "){
            alert("please fill the details");
            return;
        }
        for(let i=0;i<login.length;i++){
            if(login[i].signupEmailId===loginEmail && login[i].signupPassword===loginPassword){
                alert("login successful");
                localStorage.setItem("Newdata",JSON.stringify(login[i]));
                loginPage("/home")
                return;
            }
        }
        
        alert("login failed");

    }

    const openRegister = () => {
        const card = document.getElementById("card");
        if (card) {
            card.style.transform="rotateY(-180deg)";
        }
    };

    const openLogin = () => {
        const card = document.getElementById("card");
        if (card) {
            card.style.transform="rotateY(0deg)";
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="inner-box" id="card">
                    <div className="card-front">
                        <h2 className="signupHeading">LOGIN</h2>
                        <form>
                            <input type="email" onChange={e =>setLoginEmail(e.target.value)}placeholder="Your Email Id" className="input-box" required/>
                            <input type="password" onChange={e =>setLoginPassword(e.target.value)}placeholder="Password" className="input-box" required/>
                            <button className="signupSubmit" onClick={loginButtonClick}type="submit" >Submit</button>
                            
                            <input type="checkbox"/><span className="signupSpan">Remember Me</span>
                        </form>
                        <button type="button" className="signupBtn" onClick={openRegister}>I'm New Here</button>
                        
                            <div className="signupGoogleDiv">
                                <img onClick={signupClick} className="signupGoogleImg"src="https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg" alt="error"/>
                                <h3 onClick={signupClick} className="signupAnchor">continue with google</h3>
                            </div>
                        
                        
                    </div>
                    <div className="card-back">
                        <h2 className="signupHeading">REGISTER</h2>
                        <form>
                            <input type="text"  onChange={e =>setSiignupName(e.target.value)} placeholder="Your Name" className="input-box" required/>
                            <input type="email" onChange={e =>setSignupEmailId(e.target.value)} placeholder="Your Email Id" className="input-box" required/>
                            <input type="password" onChange={e =>setSignupPassword(e.target.value)} placeholder="Password" className="input-box" required/>
                            <button className="signupSubmit" onClick={signupButtonClick}type="submit">Submit</button>
                            <input type="checkbox"/><span className="signupSpan">Remember Me</span>
                        </form>
                        <button type="button" className="signupBtn" onClick={openLogin}>I've an account</button>
                        
                        <div className="signupGoogleDiv">
                            <img onClick={signupClick}className="signupGoogleImg"src="https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg" alt="error"/>
                            <h3 onClick={signupClick} className="signupAnchor">continue with google</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;


