import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router";


function Navbar(){
      const search=useNavigate();
      const change=()=>{
            // search("/search") 
            search("/doubleOtp")
      }
    return(
      <div>
            <nav>
                  <div className='navBar'>
                        <div className='logodiv'>
                              <a href="/home"><img className="logo" src="https://media.istockphoto.com/id/967255466/vector/handshake-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=8yqvBlIpOR1M1fRMMjpD4ETI79y6aRCGivKW-egDbpE=" alt="error"/></a>
                        </div>
                        <h4 className="navText navMargin"><a className="decoration" href="/auctionForm">Auction Chiti</a></h4>
                        <h4 className="navText navMargin"><a className="decoration" href="/DoubleForm">Double Chiti</a></h4>
                        <h4 className="navText navMargin"><a className="decoration" href="/agent">Agent Chiti</a></h4>
                        <h4 onClick={change} className="navText navmargin aboutChit">About Chits</h4>
                  </div>

            </nav>
      </div>
    )
}
export default Navbar;