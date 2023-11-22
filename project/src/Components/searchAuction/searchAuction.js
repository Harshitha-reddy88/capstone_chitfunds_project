import './searchAuction.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchAuction(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)

    useEffect(()=>{
        dispatch(getAllcourse());
    });
    
    const navigate=useNavigate()
    const displayAuction = () =>{
        navigate("/search");
    }

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
                                        <button className="exploreBtn" onClick={displayAuction}>Back</button>
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
export default SearchAuction;