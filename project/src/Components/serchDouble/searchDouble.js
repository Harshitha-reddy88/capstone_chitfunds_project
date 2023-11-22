import './searchDouble.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllcourse } from "../../Redux/ChitfundReducer/Action";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
function SearchDouble(){

    const dispatch = useDispatch();
    const data = useSelector(state => state.chitfund.chitFund)

    useEffect(()=>{
        dispatch(getAllcourse());
    },[]);
    

    const double=useNavigate()
    const displayDouble=()=>{
        double("/search")
    }

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
                                        <button className="exploreBtn" onClick={displayDouble}>Back</button>
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
export default SearchDouble;