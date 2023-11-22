import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./agentMember.css";

function AgentMember() {
  const[agentMemberSno,setAgentMemberSno]=useState('');
  const[agentMemberName,setAgentMemberName]=useState('');
  const[agentMemberAge,setAgentMemberAge]=useState('');
  const[agentMemberAddress,setAgentMemberAddress]=useState('');
  const[agentMemberAmount,setAgentMemberAmount]=useState('');
  const[agentMemberPhoneNumber,setAgentMemberPhoneNumber]=useState('');
  const[agentMembertableData, setAgentMemberTableData] = useState([]);
  const[agentMembershowInputs,setAgentMemberShowInputs] = useState(true);

  const doubleMmeberSubmit =(e)=>{
    e.preventDefault();
    if
    (
        agentMemberSno==="" || agentMemberSno===" "||
        agentMemberName==="" || agentMemberName===" "||
        agentMemberAge==="" || agentMemberAge===" "||
        agentMemberAddress==="" || agentMemberAddress===" "||
        agentMemberAmount==="" || agentMemberAmount===" "||
        agentMemberPhoneNumber==="" || agentMemberPhoneNumber===" "
    ){
      alert("enter the data")
    }
    else{
      const agentMemberData =
      {
        agentMemberSno,
        agentMemberName,
        agentMemberAge,
        agentMemberAddress,
        agentMemberAmount,
        agentMemberPhoneNumber
      };
      setAgentMemberTableData([...agentMembertableData,agentMemberData]);

      setAgentMemberSno('');
      setAgentMemberName('');
      setAgentMemberAge('');
      setAgentMemberAddress('');
      setAgentMemberAmount('');
      setAgentMemberPhoneNumber('');

    }
  };


  const doubleMemberDelete = (index) => {
    const newData = [...agentMembertableData];
    newData.splice(index, 1);
    setAgentMemberTableData(newData);
  };

  const doubleMemberEnd =()=>{
    setAgentMemberShowInputs(false)
  }

  return (
    <div>
      <div className="navPage">
        <Navbar />
      </div>

      <div>
        <a href="/agentChiti"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
        <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
      </div>

      <div className="agentMemberHeading">
        <h1>
          <u>* Agent Chiti Member Data*</u>
        </h1>
      </div>

      {agentMembershowInputs &&(
        <form onSubmit={doubleMmeberSubmit}>
        <div className="agentMember agentMemberMargin">
          <div>
            <h3>S.NO :</h3>
          </div>
          <div>
            <input className="agentMemberTags"type="number" value={agentMemberSno} onChange={(e)=>setAgentMemberSno(e.target.value)}/>
          </div>
          <div className="">
            <button className="submitbtn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="agentMember agentMemberGap">
          <div className="agentMember">
            <div>
              <h3>NAME :</h3>
            </div>
            <div>
              <input className="agentMemberTags"type="text" value={agentMemberName} onChange={(e)=>setAgentMemberName(e.target.value)}/>
            </div>
          </div>

          <div className="agentMember agentgap">
            <div>
              <h3>AGE :</h3>
            </div>
            <div>
              <input className="agentMemberTags"type="number" value={agentMemberAge} onChange={(e)=>setAgentMemberAge(e.target.value)}/>
            </div>
          </div>

          <div className="agentMember agentgap">
            <div>
              <h3>AMOUNT :</h3>
            </div>
            <div>
              <input className="agentMemberTags"type="number" value={agentMemberAmount} onChange={(e)=>setAgentMemberAmount(e.target.value)}/>
            </div>
          </div>

          <div className="agentMember agentgap">
            <div>
              <h3>PHONE NUMBER :</h3>
            </div>
            <div>
              <input className="agentMemberTags"type="number" value={agentMemberPhoneNumber} onChange={(e)=>setAgentMemberPhoneNumber(e.target.value)}/>
            </div>
          </div>

          <div className="agentMember agentgap">
            <div>
              <h3>ADDRESS :</h3>
            </div>
            <div>
              <input className="agentMemberTags"type="text" value={agentMemberAddress} onChange={(e)=>setAgentMemberAddress(e.target.value)}/>
            </div>
          </div>
        </div>
      </form>

      )}
      
      <div className="agentMemberTable">

      <table border="1" className="table">
        <thead>
          <tr>
            <th className="agentMemberRow">S.No</th>
            <th className="agentMemberRow">Name</th>
            <th className="agentMemberRow">Age</th>
            <th className="agentMemberRow">Amount</th>
            <th className="agentMemberRow">Phone Number</th>
            <th className="agentMemberRow">Address</th>
            <th className="agentMemberRow">Action</th>
          </tr>
        </thead>
        <tbody>
          {agentMembertableData.map((data, index) => (
            <tr key={index}>
              <td className="agentMemberData">{data.agentMemberSno}</td>
              <td className="agentMemberData">{data.agentMemberName}</td>
              <td className="agentMemberData">{data.agentMemberAge}</td>
              <td className="agentMemberData">{data.agentMemberAmount}</td>
              <td className="agentMemberData">{data.agentMemberPhoneNumber}</td>
              <td className="agentMemberData">{data.agentMemberAddress}</td>
              <td className="agentMemberData">
                <button  className="deleteButton" onClick={() => doubleMemberDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  );
}

export default AgentMember;
