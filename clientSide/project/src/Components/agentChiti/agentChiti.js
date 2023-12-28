import React, { useEffect, useState } from "react";
import axios from "axios";
import "./agentChiti.css";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
function AgentChiti() {
    const [agentDataId, setAgentDataId] = useState('');
    const [agentDataChitValue, setAgentDataChitValue] = useState('');
    const [agentDataMonths, setAgentDataMonths] = useState('');
    const [agentDataSubscription, setAgentDataSubscription] = useState('');


    const[showForm,setShowFrom]=useState(false);
    
    const localStorageKey="agentChitiData";
    const [submittedData, setSubmittedData] = useState(()=>{
        const storedData=localStorage.getItem(localStorageKey);
        return storedData ? JSON.parse(storedData):[];
    });

    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(submittedData))
    },[submittedData]);
    
    

    const agentChitihandleSubmit = async (e) => {
        e.preventDefault();
        if(agentDataId==="" || agentDataId===" " || 
           agentDataChitValue==="" || agentDataChitValue===" " || 
           agentDataMonths==="" || agentDataMonths===" " || 
           agentDataSubscription==="" || agentDataSubscription===" ")
           {
            alert("enter the data")
         } 
         else {
            const newData = {
                agentDataId,
                agentDataChitValue,
                agentDataMonths,
                agentDataSubscription,
            };

            try {
                const response = await axios.post("http://localhost:8080/agentData", newData);
                console.log("Data posted:", response.data);
                setSubmittedData([...submittedData, newData]);
                setAgentDataId('');
                setAgentDataChitValue('');
                setAgentDataMonths('');
                setAgentDataSubscription('');
                // setShowFrom(false);
                // setShowCard(true);
            } catch (error) {
                console.error("Error posting data:", error);
            }
        }
        toggleVisibility();
        setShowCard(true);
    };
    const toggleVisibility=()=>{
        setShowFrom(!showForm);
    }
    const[showCard,setShowCard]=useState(!!submittedData.length);

    const [redirectIndex, setRedirectIndex] = useState(1);

    const redirectToNextAgentMember = () => {
        setRedirectIndex((prevIndex) => prevIndex + 1);
    };

    

    return (
        <div className="auctioBody">

            <div className="navPage">
                <Navbar />
            </div>

            <div className="chitiDataBanner"></div>

            <div className="agentInvest">
                <div className="saveDiv">

                    <div>
                        <div>
                            <img src="https://muthootchits.com/wp-content/uploads/2021/10/security_icon4.png" alt="error"/>
                            <h2 className="save">Join</h2>
                        </div>
                    </div>
                    


                    <div>
                        <div>
                            <img src="https://muthootchits.com/wp-content/uploads/2021/10/security_icon5.png" alt="error"/>
                            <h2 className="save">Invest</h2>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="https://muthootchits.com/wp-content/uploads/2021/10/security_icon6.png" alt="error"/>
                            <h2 className="save">Pay</h2>
                        </div>
                    </div>
                </div>

                <div className="saveText">
                    <div>
                        <p className="saveWidth">Plan your finances such that you meet every contingent expense without feeling pressured.</p>
                    </div>
                    <div>
                        <p className="secondWidth">A chit is the only financial product that allows you to save and borrow. Be smart; avoid the pitfalls of borrowing at exorbitant costs from money 
                            lenders and other financial channels. Borrow with lesser hassles.</p>
                    </div>
                    <div>
                        <p className="thirdWidth">chits is your trustworthy, safe and reliable companion to 
                            help you reap maximum benefits from investing in a chits.</p>
                    </div>
                </div>
            </div>


            {showForm &&(
            <div className="formMainDiv">
                
                    <form className="formData"onSubmit={agentChitihandleSubmit}>

                        <div>
                            <h2 className="cross" onClick={toggleVisibility}>&#xd7;</h2>
                        </div>
                        

                        <div>
                            <div className="inputDiv">
                                <div>
                                    <input placeholder="Enter S.NO"className="agentTags"type="number"value={agentDataId}onChange={(e) => setAgentDataId(e.target.value)}/>
                                </div>
                                <div className="chitDataMainDiv">
                                    <div>
                                        <input placeholder="Chiti Value" className="agentTags"type="number"value={agentDataChitValue}onChange={(e) => setAgentDataChitValue(e.target.value)}/>
                                    </div>
                                </div>
                            
                                <div className="chitDataMainDiv">
                                    <div>
                                        <input placeholder="Number Of Months"className="agentTags"type="number"value={agentDataMonths}onChange={(e) => setAgentDataMonths(e.target.value)}/>
                                    </div>
                                </div>
        
                                <div className="chitDataMainDiv">
                                    <div>
                                        <input placeholder="Monthly Subscription"className="agentTags"type="number"value={agentDataSubscription}onChange={(e) => setAgentDataSubscription(e.target.value)}/>
                                    </div>
                                </div>
                            
                                <div>
                                    <button className="pageSubmitbtn" type="submit">SUBMIT</button> 
                                </div>
                            </div>
                        </div>
                    </form>  
            </div>
            )}


            <div className="chitDataMainDiv">
                <div>
                    {(!showForm || showCard) &&(
                        <div className="chitiDataDiv">
                            {submittedData.map((data, index) => (
                                <div className="chitDataCard" key={index}>
                                    <h3 className="dataHeading ">ChitFund Data {index + 1}</h3>
                                    <p className="chitData">S.NO : <span className="cardData">{data.agentDataId}</span></p>
                                    <p className="chitiData">Chit Value : <span className="cardData">{data.agentDataChitValue}</span></p>
                                    <p className="chitiData">Number of Months : <span className="cardData">{data.agentDataMonths}</span></p>
                                    <p className="chitiData">Monthly Subscription : <span className="cardData">{data.agentDataSubscription}</span></p>
                                    <Link to={`/agentMember/${index + redirectIndex}`}>
                                        <button className="landingBtn cardBtn btn animation" onClick={redirectToNextAgentMember}>Start</button>
                                    </Link>
                                </div>  
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    {(!showCard || !showForm) && (
                        <div>
                            <div className="addBtn">
                                <h2 onClick={toggleVisibility}>&#43; add</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    </div>
    );
}

export default AgentChiti;



