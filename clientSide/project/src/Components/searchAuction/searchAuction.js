import './searchAuction.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { getAllExploreData } from '../../Redux/ChitfundReducer/Action';
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchAuction(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)
    useEffect(()=>{
        dispatch(getAllcourse());
    });

    const exploreDispatch=useDispatch();
    const explore=useSelector(state=>state.explore.exploreData)
    useEffect(()=>{
        exploreDispatch(getAllExploreData());
    });

    
    const navigate=useNavigate()
    const displayAuction = () =>{
        navigate("/search");
    }

    const[num,setNum]=useState(1)

    const registration=explore.find(item=>item.id===1)||{};
    const managing=explore.find(item=>item.id===2)||{};
    const distribution=explore.find(item=>item.id===3)||{};
    const dataEntry=explore.find(item=>item.id===4)||{};

    return(
        <div>
            <div className="navPage">
                <Navbar/>
            </div>
            <div>
            
                {
                    data?.map(({image1,details1})=>
                    <div className="searchingAuction"key={details1}>
                            <div>
                                <div className="searchingDiv auction">
                                    <div className="childDiv">
                                        <h1 className="serchingHeading">AUCTION CHITI</h1>
                                        <img className="backEndImg" src={image1} alt={details1} />
                                        <div className='searchingDataDiv'>
                                            <h3 className="searchingData">{details1}</h3>
                                        </div>
                                    </div>


                                    <div className='listOfprocess'>
                                        <h3>
                                        Individuals interested in participating in the agent chit enroll through an agent.<br></br>
                                        Participants submit their bids to the agent, who conducts the auctions at regular<br></br>
                                        intervals The agent collects monthly contributions from participants and manages<br></br>
                                        the chit fund pool.The agent is responsible for maintaining records of all<br></br>
                                        transactions, including contributions, bids, and disbursements.It's important to<br></br> 
                                        note that the specific processes and rules for agent chits can vary depending on<br></br> 
                                        local regulations set by the agent.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                    </div>
                    )
                
                }
            </div>

            <div className='exploreMainDiv'>
                <div>
                    <div className='exploreName'>
                    <div className='exploreHeading'>
                        <h2 onClick={()=>setNum(1)}>{registration.process_name}</h2>
                    </div>
                    <div className='exploreHeading'>
                        <h2 onClick={()=>setNum(2)}>{managing.process_name}</h2>
                    </div>
                    <div className='exploreHeading'>
                        <h2 onClick={()=>setNum(3)}>{distribution.process_name}</h2>
                    </div>
                    <div className='exploreHeading'>
                        <h2 onClick={()=>setNum(4)}>{dataEntry.process_name}</h2>
                    </div>
                </div>
                {num===1 &&(
                    <div className='agentExploreDiv'>
                        <div>
                            <img className="agentExploreImg"src={registration.process_img} alt="error" />
                        </div>
                        <div className='agentExploreDataDiv'>
                            <h3 className='agentExploreData'>{registration.process_data}</h3>
                            <h3 className='agentExploreData agentExplorePara'>Chit funds are regulated by specific laws and regulations in different countries
                             or regions. Registration often involves adhering to these legal formalities, 
                             which might include obtaining licenses or approvals from regulatory authorities.
                             Upon registration, members typically sign an agreement outlining the terms and 
                             conditions of the chit fund scheme. This document covers aspects such as the 
                             duration of the chit, the monthly contributions (chit amount), the bidding process, penalties for default, etc.
                             </h3>
                        </div>
                    </div>
                )};

                {num===2 &&(
                    <div className='agentExploreDiv'>
                        <div>
                            <img className="agentExploreImg"src={managing.process_img} alt="error" />
                        </div>
                        <div>
                            <h3 className='agentExploreData'>{managing.process_data}</h3>
                            <h3 className='agentExploreData agentExplorePara'>
                            Bidding in the context of auction chit funds involves participants competing 
                            to acquire a portion of the total pool of funds available in a particular.During
                            each installment of the chit fund cycle, participants interested in receiving 
                            funds bid for the amount they desire from the total pool.Participants submit their
                            bids, indicating the specific sum they are willing to take from the total pool. 
                            Bids can vary based on individual financial requirements.
                            </h3>
                        </div>
                    </div>
                )}

                {num===3 &&(
                    <div className='agentExploreDiv'>
                        <div>
                            <img className="agentExploreImg"src={distribution.process_img} alt="error"/>
                        </div>
                        <div>
                            <h3 className='agentExploreData'>{distribution.process_data}</h3>
                            <h3 className='agentExploreData agentExplorePara'>The distribution happens primarily through a prize money system. 
                            In each cycle or installment, the winning bidder (the one who bids
                            the highest discount) receives the prize amount, which is the 
                            difference between the total collected funds and the highest bid.
                            The method of distribution in chit funds might vary. Some chit 
                            funds follow a reverse auction method, where the highest bidder 
                            receives the distribution, while others may use a random or 
                            rotational method based on predefined rules.
                            </h3>
                        </div>
                    </div>
                )}

                {num===4 &&(
                    <div className='agentExploreDiv'>
                        <div>
                            <img className="agentExploreImg"src={dataEntry.process_img} alt="error"/>
                        </div>
                        <div>
                            <h3 className='agentExploreData'>{dataEntry.process_data}</h3>
                            <h3 className='agentExploreData agentExplorePara'>Data entry involves recording detailed information about each participant,
                             including their personal details, contact information, identification 
                             documents, and participation history in the chit fund.Data entry includes 
                             logging the contributions made by each participant and tracking their 
                             payment history. It involves recording the amounts contributed, dates of 
                             payments, and any penalties or dues if applicable.
                             </h3>
                        </div>
                    </div>
                )}
            </div>
            
        </div>

        <div className="processDiv">
            <div className="childProcess childProcessDiv">
                <img className="process"src="../resourses/registration.jpg" alt=""/>
            </div>

            <div className="connect"></div>

            <div className="childProcess">
                <img className="process" src="../resourses/bidding.jpg" alt=""/>
            </div>

            <div className="connect"></div>

            <div className="childProcess">
                <img className="process" src="../resourses/contribution.jpg" alt=""/>
            </div>

            <div className="connect"></div>
                                        
            <div className="childProcess">
                <img className="process" src="../resourses/close.jpg" alt=""/>
            </div>
        </div> 


        <div>
            <h1 className='vidoData'>How it works</h1>
        </div>
        <div className='agentVideo'>
            <div className='agetVideoData'>
                <iframe  className="iframeVideo"width="560" height="315" src="https://www.youtube.com/embed/RZ3P5g7c9Ms" frameborder="0" allowfullscreen></iframe>

                <div>
                    <h3>Members of the chit fund pool in fixed amounts regularly, forming a collective fund.<br></br>
                    At predetermined intervals, participants bid for the portion of funds they wish to<br></br>
                    receive from the total pool.Members interested in obtaining funds bid for the specific<br></br>
                    amount they need at a particular installment.Participants compete by offering the<br></br> 
                    highest amount they're willing to take from the pool.The participant bidding the highest<br></br>
                    amount wins the bid for that installment and receives the bid amount from the total pool.<br></br>
                    The remaining pool after deducting the winning bid is distributed among the other<br></br> 
                    participants.Provides an opportunity for participants to receive larger sums earlier<br></br> 
                    than their scheduled turn in the chit fund cycle.Understanding the risks, terms, and<br></br> 
                    compliance with legal regulations are important considerations before participating.<br></br>
                    imely contributions and active involvement in the bidding process are essential for<br></br> 
                    the smooth functioning of the auction chit fund.Thoroughly comprehending the terms,<br></br> 
                    regulations, and charges associated with the auction chit is crucial for participants.<br></br>
                    </h3>
                </div>
            </div>  
        </div>


        <div className='conditionaMain'>
            <div className='conditionsImgDiv'>
                <img className='conditionsImg'src="https://muzztech.com/images/Terms-and-Conditions-.jpeg" alt="error"/>
            </div>
            <div>
                <div className='conditionBackground'>
                    <h3 className='conditionText'>
                    <span className='conditionSub'>Membership Eligibility:</span>Details specifying who can join the auction chit fund, including eligibility criteria and any restrictions on the number of participants.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Contribution Schedule:</span>The fixed amounts participants are required to contribute regularly and the schedule for these contributions, including the due dates.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Bidding Rules:</span>Clear guidelines on how the bidding process operates, including the frequency of auctions, how bids are placed, minimum bid increments, and <br></br>
                    the method for determining the winning bid.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Disbursement Schedule:</span>Details about the disbursement process, including the order in which participants will receive funds based on the bids they win.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Participant Responsibilities:</span>Clarification of responsibilities, such as timely contribution of funds, adherence to bidding rules, and consequences for non-compliance.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Legal Framework:</span>Information on the legal framework governing the chit fund, compliance with local laws, and dispute resolution  in case of disagreements.
                    </h3>
                </div>   
            </div>
        </div>

        <div>
            <button className="exploreBtn" onClick={displayAuction}>Back</button>
        </div>
                                    

            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default SearchAuction;


