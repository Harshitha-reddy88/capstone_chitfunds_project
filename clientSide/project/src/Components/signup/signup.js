// import React from "react";
// import  "./signup.css"
// import {useState} from "react";
// import { useNavigate } from "react-router";


// function Signup(){
//     const[first,setFirst]=useState("");
//     const[last,setLast]=useState("");
//     const[user,setUser]=useState("");
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     const[rePassword,setRepassword]=useState("");
//     const navigation=useNavigate();

//     function click(){
//         if(first!="" || last!="" ||user!="" || email!="" || password!="" || rePassword!="" ){
//             let signupDetails=JSON.parse(localStorage.getItem("signup")) || [];
//             for(let i=0;i<signupDetails.length;i++){
//                 if(signupDetails[i].user==user || signupDetails[i].password==password){
//                     alert("user already exist");
//                     setFirst("");
//                     setLast("");
//                     setUser("");
//                     setEmail("");
//                     setPassword("");
//                     setRepassword("");
//                     return;

//                 }
//             }

//             localStorage.setItem("signup", JSON.stringify([...signupDetails, { first, last, user, email, password , rePassword }]));
//             alert("signup successfull")
//             navigation("/home")


//         }
//         else{
//             alert("enter your details");
//         }
//     }

//     return(
//         <div className="body">

//             <div className="signupForm">


//                 <div className="cross"><a className="link1"href="/">&times;</a></div> 


//                 <div className="div1">
//                     <label htmlFor="userName" className="lable" >First Name:</label>
//                     <br></br>
//                     <input  className="input userName" value={first} onChange={e=>setFirst(e.target.value)}type="text" placeholder="user name" />
//                 </div>

//                 <br></br>

//                 <div className="div">
//                     <label htmlFor="userName" className="lable" >Last Name:</label>
//                     <br></br>
//                     <input className="input userName"  value={last} onChange={e=>setLast(e.target.value)}type="text" placeholder="user name" />
//                 </div>

//                 <br></br>

//                 <div className="div">
//                     <label htmlFor="userName" className="lable" >User Name:</label>
//                     <br></br>
//                     <input className="input userName" value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder="user name" />
//                 </div>

//                 <br></br>

//                 <div className="div">
//                     <label htmlFor="userName" className="lable" >Email:</label>
//                     <br></br>
//                     <input className="input userName" value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="user name" />
//                 </div>

//                 <br></br>

//                 <div className="div">
//                     <label htmlFor="password" className="lable" >Password:</label>
//                     <br></br>
//                     <input type="password" className="input userName password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password"  />
//                 </div>

//                 <br></br>

//                 <div className="div">
//                     <label htmlFor="password" className="lable" >Re-enter Password:</label>
//                     <br></br>
//                     <input type="password" className="input userName password"  value={rePassword} onChange={e=>setRepassword(e.target.value)} placeholder="password" />
//                 </div>

//                 <br></br>

//                 <button className="sign" onClick={click}>Signup</button>

//                 <h2>have an account ? login</h2>


//             </div>

//         </div>
//     )
// }
// export default Signup;

// import React from "react";
// import "./signup.css";
// function Signup(){

//     let card=document.getElementById("card");

//     function openRegister(){
//         card.style.transform="rotateY(-180deg)";
//     }
//     function openLogin(){
//         card.style.transform="rotateY(0deg)";
//     }

//     return(
//         <div className="container">
//             <div className="card">
//                 <div className="inner-box" id="card">
//                     <div className="card-front">
//                         <h2>LOGIN</h2>
//                         <form>
//                             <input type="email" placeholder="Your Email Id" className="input-box" required/>
//                             <input type="password" placeholder="Password" className="input-box" required/>
//                             <button className="sumit-btn" type="submit">Submit</button>
//                             <input type="checkbox"/><span className="signupSpan">Remember Me</span>
//                         </form>
//                         <button type="button" class="signupBtn" onClick={openRegister()}>I'm New Here</button>
//                         <a href="" className="signupAnchor">Forgot Password</a>
//                     </div>



//                     <div className="card-back">
//                     <h2>REGISTER</h2>
//                         <form>
//                             <input type="text" placeholder="Your Name" className="input-box" required/>
//                             <input type="email" placeholder="Your Email Id" className="input-box" required/>
//                             <input type="password" placeholder="Password" className="input-box" required/>
//                             <button className="sumit-btn" type="submit">Submit</button>
//                             <input type="checkbox"/><span className="signupSpan">Remember Me</span>
//                         </form>
//                         <button type="button" class="signupBtn" onClick={openLogin()}>I've an account</button>
//                         <a href="" className="signupAnchor">Forgot Password</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Signup;

import React from "react";
import "./signup.css";

function Signup(){

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
                            <input type="email" placeholder="Your Email Id" className="input-box" required/>
                            <input type="password" placeholder="Password" className="input-box" required/>
                            <button className="signupSubmit" type="submit" >Submit</button>
                            
                            <input type="checkbox"/><span className="signupSpan">Remember Me</span>
                        </form>
                        <button type="button" className="signupBtn" onClick={openRegister}>I'm New Here</button>
                        <a href="/home" className="signupAnchor">Forgot Password</a>
                    </div>
                    <div className="card-back">
                        <h2 className="signupHeading">REGISTER</h2>
                        <form>
                            <input type="text" placeholder="Your Name" className="input-box" required/>
                            <input type="email" placeholder="Your Email Id" className="input-box" required/>
                            <input type="password" placeholder="Password" className="input-box" required/>
                            <button className="signupSubmit" type="submit">Submit</button>
                            <input type="checkbox"/><span className="signupSpan">Remember Me</span>
                        </form>
                        <button type="button" className="signupBtn" onClick={openLogin}>I've an account</button>
                        <a href="/home" className="signupAnchor">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
