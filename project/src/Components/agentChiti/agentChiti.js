import React, { useEffect, useState } from "react";
import axios from "axios";
import "./agentChiti.css";
import Navbar from "../navbar/navbar";

function AgentChiti() {
    const [agentDataId, setAgentDataId] = useState('');
    const [agentDataChitValue, setAgentDataChitValue] = useState('');
    const [agentDataMonths, setAgentDataMonths] = useState('');
    const [agentDataSubscription, setAgentDataSubscription] = useState('');
    //const [agentTableData, setAgentTableData] = useState([]);
    const [agentChitshowInputs, setAgentChitShowInputs] = useState(true);

    const localStorageKey="agentChitiData";
    const [agentTableData, setAgentTableData] = useState(()=>{
        const storedData=localStorage.getItem(localStorageKey);
        return storedData ? JSON.parse(storedData):[];
    });

    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(agentTableData))
    },[agentTableData]);

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
                // POST data to the API endpoint
                const response = await axios.post("http://localhost:8080/agentData", newData);
                console.log("Data posted:", response.data);

                // Update table data after successful post
                setAgentTableData([...agentTableData, newData]);

                // Clear input fields after submission
                setAgentDataId('');
                setAgentDataChitValue('');
                setAgentDataMonths('');
                setAgentDataSubscription('');
            } catch (error) {
                console.error("Error posting data:", error);
            }
        }
    };

    const handleDelete = (index) => {
        const updatedData = [...agentTableData];
        updatedData.splice(index, 1);
        setAgentTableData(updatedData);
    };

    const handleEnd = () => {
        setAgentChitShowInputs(false);
    };

    return (
        <div className="auctioBody">

            <div className="navPage">
                <Navbar />
            </div>

            <div className="doubleInputs">
                <a className="memberLink" href="/agentMember">
                    <div className="auctionActions auctionMemberBtn">Chit Member Data</div>
                </a>
                <div className="auctionActions endButton" onClick={handleEnd}> End </div>
            </div>

            <h1 className="agnetData">
                <u>*AGENT CHITI*</u>
            </h1>

            {agentChitshowInputs && (
                <form onSubmit={agentChitihandleSubmit}>
                    <div className="agnetInputs inputMargin">
                        <div>
                            <h3>S.NO :</h3>
                        </div>

                        <div>
                            <input className="agentTags"type="number"value={agentDataId}onChange={(e) => setAgentDataId(e.target.value)}/>
                        </div>

                        <div>
                            <button className="pageSubmitbtn" type="submit">SUBMIT</button>
                        </div>
                    </div>

                    <div className="agnetInputs inputDiv">
                        <div className="agnetInputs">
                            <div>
                                <h3>CHIT VALUE :</h3>
                            </div>
                            <div>
                                <input className="agentTags"type="number"value={agentDataChitValue}onChange={(e) => setAgentDataChitValue(e.target.value)}/>
                            </div>
                        </div>

                        <div className="agnetInputs inputGap">
                            <div>
                                <h3>NUMBER OF MONTHS :</h3>
                            </div>
                            <div>
                                <input className="agentTags"type="number"value={agentDataMonths}onChange={(e) => setAgentDataMonths(e.target.value)}/>
                            </div>
                        </div>

                        <div className="agnetInputs inputGap">
                            <div>
                                <h3>MONTHLY SUBSCRIPTION :</h3>
                            </div>
                            <div>
                                <input className="agentTags"type="number"value={agentDataSubscription}onChange={(e) => setAgentDataSubscription(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </form>
            )}

            <div className="tableDiv">
                <table border="1" className="table">
                    <thead>
                        <tr>
                            <th className="agentTableRow">S.NO</th>
                            <th className="agentTableRow">CHIT VALUE</th>
                            <th className="agentTableRow">NUMBER OF MONTHS</th>
                            <th className="agentTableRow">MONTHLY SUBSCRIPTION</th>
                            <th className="agentTableRow">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agentTableData.map((data, index) => (
                            <tr key={index}>
                                <td className="agentTableData">{data.agentDataId}</td>
                                <td className="agentTableData">{data.agentDataChitValue}</td>
                                <td className="agentTableData">{data.agentDataMonths}</td>
                                <td className="agentTableData">{data.agentDataSubscription}</td>
                                <td className="agentTableData">
                                    <button className="deleteButton" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AgentChiti;

