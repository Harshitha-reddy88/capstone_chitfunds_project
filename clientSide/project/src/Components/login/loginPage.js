import React from "react";
import "./loginPage.css";

function LoginPage(){
    return(
        <div>
           <form className="loginForm">

           <div className="loginCross">&times;</div>
         
            <div className="loginDiv">
                <lable for="userName" className="loginLable" >User Name:</lable>
                <br></br>
                <input id="userName" className="loginInput" type="text" placeholder="user name" />
            </div>

            <br></br>

            <div className="div1">
                <lable for="password" className="loginLable" >Password:</lable>
                <br></br>
                <input type="password" className="loginInput" placeholder="password" id="password" />
            </div>

            <br></br>

            <div className="div1">
                <lable for="email" className="loginLable" >Email:</lable>
                <br></br>
                <input type="email" className="loginInput" placeholder="enter email" id="email input"></input>
            </div>

            <br></br>

            <button className="login">SUBMIT</button>

           </form>
        </div>
    )
}
export default LoginPage;