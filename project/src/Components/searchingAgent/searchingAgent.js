import './searchingAgent.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchAgent(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)

    useEffect(()=>{
        dispatch(getAllcourse());
    },[]);
    

    const agent=useNavigate()
    const displayAgent=()=>{
        agent("/search")
    }

    return(
        <div>

            <div className="navPage">
                <Navbar/>
            </div>
            
            <div>
            
                {
                    data?.map(({image2,details2,details1,details3})=>
                    <div className="searchingAuction"key={details1}>
                            <div>
                            <div className="searchingDiv">
                            <div className="childDiv">
                                        <h1 className="serchingHeading">AGENT CHITI</h1>
                                        <img className="backEndImg" src={image2} alt={details2} />
                                        <h3 className="searchingData">{details3}</h3>
                                    </div>
                                    <div className="processDiv">
                                        <div className="childProcess">
                                            <img className="process"src="../resourses/registor.jpg" alt=""/>
                                            <h2 className="serchingHeading">Registration</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/managing.jpg" alt=""/>
                                            <h2 className="serchingHeading">Managing</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/distribution.jpg" alt=""/>
                                            <h2 className="serchingHeading">Distribution</h2>
                                        </div>

                                        <div className="connect"></div>
                                        
                                        <div className="childProcess">
                                            <img className="process" src="../resourses/dataEntry.jpg" alt=""/>
                                            <h2 className="serchingHeading">Data Entry</h2>
                                        </div>
                                    </div>

                                    <div>
                                        <ul className="unorderdList">
                                            <li>Individuals interested in participating in the agent chit enroll
                                                 through an agent.</li>
                                            <li>Participants submit their bids to the agent, who conducts the auctions 
                                                at regular intervals </li>
                                            <li>The agent collects monthly contributions from participants and manages 
                                                the chit fund pool.</li>
                                            <li>The agent is responsible for maintaining records of all transactions, 
                                                including contributions, bids, and disbursements.</li>
                                            <li>It's important to note that the specific processes and rules for agent 
                                                chits can vary depending on local regulations set by the agent.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <button className="exploreBtn" onClick={displayAgent}>Back</button>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                    )
                
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default SearchAgent;