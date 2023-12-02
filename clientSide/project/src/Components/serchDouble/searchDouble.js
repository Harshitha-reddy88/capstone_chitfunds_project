import './searchDouble.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { getAllExploreData } from '../../Redux/ChitfundReducer/Action';
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchDouble(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)
    useEffect(()=>{
        dispatch(getAllcourse());
    },[]);

    const exploreDispatch=useDispatch();
    const explore=useSelector(state=>state.explore.exploreData)
    useEffect(()=>{
        exploreDispatch(getAllExploreData());
    });
    

    const double=useNavigate()
    const displayDouble=()=>{
        double("/search")
    }


    const[num,setNum]=useState(1)
    const registration=explore.find(item=>item.id===8)||{};
    const managing=explore.find(item=>item.id===9)||{};
    const distribution=explore.find(item=>item.id===3)||{};
    const dataEntry=explore.find(item=>item.id===10)||{};


    return(
        <div>
            <div className="navPage">
                <Navbar/>
            </div>
            <div>
            
                {
                    data?.map(({image3,details2,details1,details3})=>
                    <div className="searchingAuction"key={details1}>
                            <div>
                            <div className="searchingDiv">
                                    <div className="childDiv">
                                        <h1 className="serchingHeading">DOUBLE CHITI</h1>
                                        <img className="backEndImg"src={image3} alt={details3} />
                                        <div className='searchingDataDiv'>
                                            <h3 className="searchingData">{details2}</h3>
                                        </div>
                                                                           
                                    </div>
                                    <div className='listOfprocess'>
                                        <h3>
                                        Double chit" is a variant of chit funds where participants receive a doubled payout<br></br>
                                        at the end of the chit fund cycle compared to their contributed amount.Similar to<br></br>
                                        regular chit funds, participants make fixed contributions at regular intervals.At<br></br> 
                                        the end of the chit fund cycle, participants receive double the value of their<br></br> 
                                        contributed amount.Participants make contributions according to the schedule<br></br> 
                                        outlined in the chit agreement throughout the chit fund cycle.Double chit funds<br></br> 
                                        offer participants the opportunity to receive a significantly larger payout,<br></br> 
                                        double the contributed amount, at the end of the chit fund cycle. This unique<br></br> 
                                        structure provides the potential for higher returns but involves a longer<br></br> 
                                        commitment to the chit fund. 
                                        </h3>
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
                            <h3 className='agentExploreData agentExplorePara'>Double chit" typically refers 
                            to a unique variation of a chit fund where participants receive a double share 
                            of the chit value at the end of the cycle.Unlike traditional chit funds where 
                            participants receive the contributed amount in a sequence, in a double chit, 
                            participants receive double the amount they contributed at the end of the cycle.
                            Participants stand to gain higher returns as they receive double the amount 
                            contributed at the end of the cycle.The chit fund cycle might span a longer 
                            duration, as participants receive their doubled payout only at the cycle's completion.
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
                            Personal details of participants joining the chit fund, including names, 
                            addresses, contact information, and identification proofs.Details of the
                            fixed amounts participants agree to contribute regularly to the chit fund.
                            Specific dates or intervals for the contribution payments and the 
                            consequences for late payments.Duration of the chit fund cycle, specifying 
                            the start and end dates of the cycle.Total value of the chit fund pool created by
                            the contributions of all participants.
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
                            <h3 className='agentExploreData agentExplorePara'>
                                Incoming contributions are the lifeblood of a chit fund, forming the 
                                pool from which disbursements are made. The consistent and timely 
                                payments by participants are crucial for the smooth functioning of 
                                the chit fund, ensuring that there are sufficient funds available 
                                for disbursements according to the agreed schedule and terms.
                                Participants are responsible for ensuring that they make their 
                                contributions on the agreed-upon dates or intervals.Adherence 
                                to the terms and conditions regarding contribution amounts, 
                                due dates, and consequences for late payments outlined in the chit agreement.
                             </h3>
                        </div>
                    </div>
                    )}
                </div>
            </div>


            <div className="processDiv">
                <div className="childProcess childProcessDiv">
                    <img className="process"src="../resourses/group.jpg" alt=""/>
                </div>

                <div className="connect"></div>

                <div className="childProcess">
                    <img className="process" src="../resourses/agrement.jpg" alt=""/>
                </div>

                <div className="connect"></div>

                <div className="childProcess">
                    <img className="process" src="../resourses/contribution1.jpg" alt=""/>
                </div>

                <div className="connect"></div>
                                        
                <div className="childProcess">
                    <img className="process" src="../resourses/incoming.jpg" alt=""/>
                </div>
            </div>
                                    
        </div>
    </div>
</div>
)
}
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
                    <span className='conditionSub'>Contribution Amounts:</span>Clearly defined monthly/periodic contributions that members need to make.otentially related to Chit Funds or <br></br>
                    similar group savings/investment programs <br></br>
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Accuracy of Information:</span>While Agent Chiti strives to provide accurate and up-to-date information, it cannot guarantee the accuracy, completeness, <br></br>
                    or reliability of any information or suggestions provided.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Duration and Number of Members:</span>The duration of the scheme and the total number of members involved in the group.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Auction or Selection Process: </span>The method by which a member is selected to receive the pooled amount. <br></br>
                    This could involve an auction, lottery, or other transparent methods.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Commission or Fees:</span>Any administrative fees or commissions charged by the entity managing the scheme.
                    </h3>

                    <h3 className='termText'>
                    <span className='conditionSub'>Rights and Responsibilities:</span>Outline of the rights and responsibilities of members participating in the scheme.<br></br>
                    As of my last update in January 2022, there isn't a widely recognized or standardized term known as "double chiti" within this domain. 
                    </h3>
                </div>    
            </div>
        </div>




        <div>
            <button className="exploreBtn" onClick={displayDouble}>Back</button>
        </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default SearchDouble;


