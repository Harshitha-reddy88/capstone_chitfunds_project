import React from "react";
import  "./signup.css"
import {useState} from "react";
import { useNavigate } from "react-router";


function Signup(){
    const[first,setFirst]=useState("");
    const[last,setLast]=useState("");
    const[user,setUser]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[rePassword,setRepassword]=useState("");
    const navigation=useNavigate();

    function click(){
        if(first!="" || last!="" ||user!="" || email!="" || password!="" || rePassword!="" ){
            let signupDetails=JSON.parse(localStorage.getItem("signup")) || [];
            for(let i=0;i<signupDetails.length;i++){
                if(signupDetails[i].user==user || signupDetails[i].password==password){
                    alert("user already exist");
                    setFirst("");
                    setLast("");
                    setUser("");
                    setEmail("");
                    setPassword("");
                    setRepassword("");
                    return;

                }
            }
            
            localStorage.setItem("signup", JSON.stringify([...signupDetails, { first, last, user, email, password , rePassword }]));
            alert("signup successfull")
            navigation("/home")
            

        }
        else{
            alert("enter your details");
        }
    }

    return(
        <div className="body">

            <div className="signupForm">

               
                <div className="cross"><a className="link1"href="/">&times;</a></div> 
                

                <div className="div1">
                    <label htmlFor="userName" className="lable" >First Name:</label>
                    <br></br>
                    <input  className="input userName" value={first} onChange={e=>setFirst(e.target.value)}type="text" placeholder="user name" />
                </div>

                <br></br>
               
                <div className="div">
                    <label htmlFor="userName" className="lable" >Last Name:</label>
                    <br></br>
                    <input className="input userName"  value={last} onChange={e=>setLast(e.target.value)}type="text" placeholder="user name" />
                </div>

                <br></br>

                <div className="div">
                    <label htmlFor="userName" className="lable" >User Name:</label>
                    <br></br>
                    <input className="input userName" value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder="user name" />
                </div>

                <br></br>

                <div className="div">
                    <label htmlFor="userName" className="lable" >Email:</label>
                    <br></br>
                    <input className="input userName" value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="user name" />
                </div>

                <br></br>

                <div className="div">
                    <label htmlFor="password" className="lable" >Password:</label>
                    <br></br>
                    <input type="password" className="input userName password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password"  />
                </div>

                <br></br>

                <div className="div">
                    <label htmlFor="password" className="lable" >Re-enter Password:</label>
                    <br></br>
                    <input type="password" className="input userName password"  value={rePassword} onChange={e=>setRepassword(e.target.value)} placeholder="password" />
                </div>

                <br></br>

                <button className="sign" onClick={click}>Signup</button>

                <h2>have an account ? login</h2>
                

            </div>

        </div>
    )
}
export default Signup;



