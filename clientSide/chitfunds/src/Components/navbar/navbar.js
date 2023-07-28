import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div>
               <nav>
                  <div className='navBar'>
                      <div className='logodiv'>
                            <img  className="logo" src="../resorses/logo.avif" alt="error"/>
                      </div>
                      <div className='arazChiti chiti'>
                            <h4>Auction Chiti</h4>
                      </div>
                      <div className='doubleChiti chiti'>
                            <h4>Double chiti</h4>
                      </div>
                      <div className='agentChiti chiti'>
                            <h4>Agent chiti</h4>
                      </div>

                      <div className='searchdiv'>
                            <input className="search"type="text" placeholder="search"/>
                      </div>

                      <div className='signup'>
                           <h4 className='text'><Link to="/page">Signup</Link></h4>
                      </div>
                    </div>

                </nav>

        </div>
    )
}
export default NavBar;