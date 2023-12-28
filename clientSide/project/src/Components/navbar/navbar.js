import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router";


function Navbar(){
      const search=useNavigate();
      const change=()=>{
            search("/search") 
            
      }
      

      const log=useNavigate();
      const logOut=()=>{
            log("/signup")
      }
    return(
      <div>
            <nav>
                  <div className='navBar'>
                        <div className='logodiv'>
                              <a href="/home"><img className="logo" src="https://media.istockphoto.com/id/967255466/vector/handshake-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=8yqvBlIpOR1M1fRMMjpD4ETI79y6aRCGivKW-egDbpE=" alt="error"/></a>
                        </div>
                        <h4 className="navText navMargin"><a className="decoration" href="/chitData">Auction Chiti</a></h4>
                        <h4 className="navText navMargin"><a className="decoration" href="/double">Double Chiti</a></h4>
                        <h4 className="navText navMargin"><a className="decoration" href="/agentChiti">Agent Chiti</a></h4>
                        <h4 className="navText navMargin navmargin"><a className="decoration" href="/chitiPage">How does a chit work</a></h4>
                        <h4 onClick={change} className="navText  navMargin">About Chits</h4>
                        <h4 className="navText  navMargin" onClick={logOut}>sign out</h4>
                  </div>

            </nav>
      </div>
    )
}
export default Navbar;