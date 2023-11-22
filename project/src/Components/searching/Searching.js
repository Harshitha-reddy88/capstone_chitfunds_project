import './Searching.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import Navbar from "../navbar/navbar"; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';

function DisplayChitfund(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)


    useEffect(()=>{
        dispatch(getAllcourse());
    },[]);

    const navigate = useNavigate();
    const displayIframe = () =>{
        navigate("/searchAuction");
    }

    const navigate1=useNavigate();
    const displayIframe1 =()=>{
        navigate1("/searchAgent")
    }

    const navigate2=useNavigate();
    const displayIframe2 =()=>{
        navigate2("/searchDouble")
    }

    return(
        <div>
            <div className="homeNav">
                <Navbar/>
            </div>

            <div>
                {
                    data?.map(({details1,details2,details3,image3,image2,image1})=>
                        <div className="searchingMain"key={details1}>
                            <div>
                                <div className="searchingDiv auction">
                                    <div className="childDiv">
                                        <h1 className="serchHeading">AUCTION CHITI</h1>
                                        <img className="backEndImg" src={image1} alt={details1} />
                                        <h3 className="searchingData">{details1}</h3>
                                    </div>

                                    <div className="processDiv">
                                        <div className="childProcess">
                                            <img className="process"src="../resourses/registration.jpg" alt=""/>
                                            <h2 className="serchingHeading">Registration</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/bidding.jpg" alt=""/>
                                            <h2 className="serchingHeading">Bidding</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/contribution.jpg" alt=""/>
                                            <h2 className="serchingHeading">Monthly Contribution</h2>
                                        </div>

                                        <div className="connect"></div>
                                        
                                        <div className="childProcess">
                                            <img className="process" src="../resourses/close.jpg" alt=""/>
                                            <h2 className="serchingHeading">Chit Closed</h2>
                                        </div>
                                    </div>

                                    <div>
                                        <ul className="unorderdList">
                                            <li>A group of individuals, typically ranging from 15 to 50 members, 
                                                forms a chit group</li>
                                            <li>Members contribute a fixed amount of money regularly into a common 
                                                pool, which forms the chit fund</li>
                                            <li>The winning bidder receives the chit fund amount minus the bid amount
                                                 and any deductions or fees</li>
                                            <li>The process continues until all members have received their share of 
                                                the chit fund</li>
                                            <li>The total value of the chit fund is determined at the beginning and 
                                                remains constant throughout the chit's duration</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <button className="exploreBtn" onClick={displayIframe}>Explore Auction Chit</button>
                                    </div>
                                    
                                </div>

                                <hr className="hrTag"></hr>



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
                                        <button className="exploreBtn" onClick={displayIframe1}>Explore Agent Chit</button>
                                    </div>
                            
                                </div>

                                <hr className="hrTag"></hr>

                                <div className="searchingDiv">
                                    <div className="childDiv">
                                        <h1 className="serchingHeading">DOUBLE CHITI</h1>
                                        <img className="backEndImg"src={image3} alt={details3} />
                                        <h3 className="searchingData">{details2}</h3>
                                    </div>

                                    <div className="processDiv">
                                        <div className="childProcess">
                                            <img className="process"src="../resourses/group.jpg" alt=""/>
                                            <h2 className="serchingHeading">Form group</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/agrement.jpg" alt=""/>
                                            <h2 className="serchingHeading">Chiti Agrement</h2>
                                        </div>

                                        <div className="connect"></div>

                                        <div className="childProcess">
                                            <img className="process" src="../resourses/contribution1.jpg" alt=""/>
                                            <h2 className="serchingHeading">Contribution</h2>
                                        </div>

                                        <div className="connect"></div>
                                        
                                        <div className="childProcess">
                                            <img className="process" src="../resourses/incoming.jpg" alt=""/>
                                            <h2 className="serchingHeading">Incoming</h2>
                                        </div>
                                    </div>

                                    <div>
                                        <ul className="unorderdList">
                                            <li>The group selects a person, often one of the members, to act as the chit 
                                                fund manager or organizer</li>
                                            <li>The group may create a basic chit agreement or terms that outline the rules, 
                                                contributions,and other terms for the chit fund.</li>
                                            <li>Each member of the chit fund group contributes a fixed amount of money at regular 
                                                intervals, such as monthly.</li>
                                            <li>The winning bidder in each auction receives the chit fund amount, and the remaining
                                                 members continue to contribute</li>
                                            <li>The process continues until all members have received their share of the chit fund.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <button className="exploreBtn" onClick={displayIframe2}>Explore Double Chit</button>
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
export default DisplayChitfund;