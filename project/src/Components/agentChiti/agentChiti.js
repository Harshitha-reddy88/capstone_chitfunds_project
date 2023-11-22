import React, { useState } from "react";
import "./agentChiti.css";
import Navbar from "../navbar/navbar";

function AgentChiti() 
{
    const [agentChitisno, setAgentChitiSno] = useState('');
    const [agentchitValue, setAgentChitValue] = useState('');
    const [agentNumMonths, setAgentNumMonths] = useState('');
    const [agentMonthlySubscription, setAgentMonthlySubscription] = useState('');
    const [agentTableData, setAgentTableData] = useState([]);
    const [agentChitshowInputs,setAgentChitShowInputs] = useState(true);

    const agentChitihandleSubmit = (e) => 
    {
        e.preventDefault();
        if(agentChitisno==="" || agentChitisno===" " || agentchitValue==="" || agentchitValue===" " || agentNumMonths==="" || agentNumMonths===" " || agentMonthlySubscription==="" || agentMonthlySubscription===" "){
            alert("enter the data")
        }
        else{

            const newData = 
        {
            agentChitisno,
            agentchitValue,
            agentNumMonths,
            agentMonthlySubscription,
        };

        setAgentTableData([...agentTableData, newData]);

        setAgentChitiSno('');
        setAgentChitValue('');
        setAgentNumMonths('');
        setAgentMonthlySubscription('');

        }
    };
    const handleDelete = (index) => {
        const updatedData = [...agentTableData];
        updatedData.splice(index, 1);
        setAgentTableData(updatedData);
    };

    const handleEnd =()=>{
        setAgentChitShowInputs(false);
    }
    
    

    return (
        <div className="auctioBody">
            <div className="navPage">
                <Navbar />
            </div>

            <div className="doubleInputs">
                <a  className="memberLink" href="/agentMember"><div className="auctionActions auctionMemberBtn">Chit Member Data</div></a>
                <div className="auctionActions endButton" onClick={handleEnd}>End</div>
            </div>

            <h1 className="agnetData"><u>*AGENT CHITI*</u></h1>

           {agentChitshowInputs &&(
          <form onSubmit={agentChitihandleSubmit}>

            <div className="agnetInputs inputMargin">
            
                <div><h3>S.NO :</h3></div>
                <div>
                    <input className="agentTags"type="number"value={agentChitisno}onChange={(e) => setAgentChitiSno(e.target.value)}/>
                </div>
                <div>
                    <button className="submitbtn"  type="submit">SUBMIT</button>
                </div>
            </div>
        

        <div className="agnetInputs inputDiv">
            <div className="agnetInputs">
                <div><h3>CHIT VALUE :</h3></div>
            <div>
                <input className="agentTags"type="number"value={agentchitValue}onChange={(e) => setAgentChitValue(e.target.value)}/>
            </div>
        </div>

        <div className="agnetInputs inputGap">
            <div><h3>NUMBER OF MONTHS :</h3></div>
            <div>
                <input className="agentTags"type="number"value={agentNumMonths}onChange={(e) => setAgentNumMonths(e.target.value)}/>
            </div>
        </div>

        <div className="agnetInputs inputGap">
            <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
            <div>
                <input className="agentTags"type="number"value={agentMonthlySubscription}onChange={(e) => setAgentMonthlySubscription(e.target.value)}/>
            </div>
        </div>
        </div>
    </form>

           )}
            
    <div className="tableDiv">
            <table  border="1" className="table">
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
              <td className="agentTableData">{data.agentChitisno}</td>
              <td className="agentTableData">{data.agentchitValue}</td>
              <td className="agentTableData">{data.agentNumMonths}</td>
              <td className="agentTableData">{data.agentMonthlySubscription}</td>
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

