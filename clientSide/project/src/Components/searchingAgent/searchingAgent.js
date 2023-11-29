import './searchingAgent.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { getAllExploreData } from '../../Redux/ChitfundReducer/Action';
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchAgent(){

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

    
    
    

    const agent=useNavigate()
    const displayAgent=()=>{
        agent("/search")
    }


    const[num,setNum]=useState(1)

    const registration=explore.find(item=>item.id===1)||{};
    const managing=explore.find(item=>item.id===5)||{};
    const distribution=explore.find(item=>item.id===6)||{};
    const dataEntry=explore.find(item=>item.id===7)||{};


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
                                        <div className='searchingDataDiv'>
                                            <h3 className="searchingData">{details3}</h3>
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
                             duration of the chit, the monthly contributions (chit amount), the bidding process, penalties for default, etc.</h3>
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
                        Managing the collection of contributions from participants and ensuring timely allocation 
                        of funds to the winning bidder or subscriber is crucial. This involves maintaining transparency,
                        accurate accounting, and proper documentation of transactions. Managing chit funds involves 
                        complying with the legal framework and regulations set forth by the governing authorities. This
                         includes adherence to the Chit Fund Act (if applicable), maintaining proper records, and filing necessary reports.
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
                            rotational method based on predefined rules.</h3>
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
                             payments, and any penalties or dues if applicable.</h3>
                    </div>
                </div>
            )}
            </div>
            
        </div>

        <div className="processDiv">
            <div className="childProcess childProcessDiv">
                <img className="process"src="../resourses/registor.jpg" alt=""/>
            </div>

            <div className="serchingConnect"></div>

            <div className="childProcess">
                <img className="process" src="../resourses/managing.jpg" alt=""/>
            </div>
    
            <div className="serchingConnect"></div>

            <div className="childProcess">
                <img className="process" src="../resourses/distribution.jpg" alt=""/>
            </div>

            <div className="serchingConnect"></div>
                                        
            <div className="childProcess">
                <img className="process" src="../resourses/dataEntry.jpg" alt=""/>                                
            </div>
        </div>

        <div>
            <h1 className='vidoData'>How it works</h1>
        </div>
        <div className='agentVideo'>
            <div className='agetVideoData'>
                <iframe className="iframeVideo"width="560" height="315" src="https://www.youtube.com/embed/IznAMYequvo" frameborder="0" allowfullscreen></iframe>
                <div>
                    <h3>Agent Chiti functions as a pivotal intermediary in the world of chit funds,<br></br>
                    orchestrating the seamless operation of these financial circles. Tasked<br></br> 
                    with diverse responsibilities, the Agent Chiti diligently oversees the<br></br>
                    enrollment of members into the chit fund, meticulously managing documentation<br></br>
                    and records pertaining to contributions and member details. Their role extends<br></br>
                    to presiding over the critical auction process, ensuring its smooth conduct<br></br> 
                    and fair outcomes. Beyond this, the Agent Chiti serves as a dependable point<br></br> 
                    of contact for members, addressing queries, providing updates, and offering<br></br> 
                    assistance throughout the chit fund journey. They navigate regulatory landscapes<br></br>
                    with finesse, guaranteeing compliance with governing standards and ensuring a secure,<br></br> 
                    transparent environment for all involved parties. Essentially, the Agent Chiti is the<br></br> 
                    linchpin that fosters trust, reliability, and efficiency within the chit fund framework.<br></br>
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
                    <span className='conditionSub'>Service Description:</span>Agent Chiti provides assistance and guidance based on the information provided. The advice given is for informational purposes <br></br>
                    and should not be considered professional, legal, or financial advice.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Accuracy of Information:</span>While Agent Chiti strives to provide accurate and up-to-date information, it cannot guarantee the accuracy, completeness, <br></br>
                    or reliability of any information or suggestions provided.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Use of Information:</span>Any information or guidance provided by Agent Chiti is to be used at the user's discretion. The user is responsible for any <br></br>
                    decisions or actions taken based on the advice received.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Limitation of Liability:</span>Agent Chiti is not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in <br></br>
                    any way connected with the use of its services.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Privacy:</span>Agent Chiti respects user privacy and confidentiality. However, information provided to Agent Chiti might be stored for improving services<br></br>
                    or analytics, following its privacy policy.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Termination of Services:</span>Agent Chiti reserves the right to terminate services or refuse access to anyone for any reason at its sole discretion.
                    </h3>
                </div>    
            </div>
        </div>

         
        <div>
            <button className="exploreBtn" onClick={displayAgent}>Back</button>
        </div>


            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default SearchAgent;

