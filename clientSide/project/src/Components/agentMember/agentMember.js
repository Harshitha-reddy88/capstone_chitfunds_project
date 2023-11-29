import React, { useEffect,useState } from "react";
import Navbar from "../navbar/navbar";
import "./agentMember.css";
import axios from "axios";


const DisplayDetails = ({ selectedData }) => {
  // Conditionally render the details based on the selected data
  return (
    <div className="detailsSection">
      {selectedData && (
        <div>
          <h2>Details:</h2>
          <p><strong>S.No:</strong> {selectedData.agentMemberId}</p>
          <p><strong>Name:</strong> {selectedData.agentMemberName}</p>
          <p><strong>Age:</strong> {selectedData.agentMemberAge}</p>
          <p><strong>Amount:</strong> {selectedData.agentMemberAmount}</p>
          <p><strong>Phone Number:</strong> {selectedData.agentMemberPhoneNumber}</p>
          <p><strong>Address:</strong> {selectedData.agentMemberAddress}</p>
        </div>
      )}
    </div>
  );
};

function AgentMember() {
  const[agentMemberId,setAgentMemberId]=useState('');
  const[agentMemberName,setAgentMemberName]=useState('');
  const[agentMemberAge,setAgentMemberAge]=useState('');
  const[agentMemberAddress,setAgentMemberAddress]=useState('');
  const[agentMemberAmount,setAgentMemberAmount]=useState('');
  const[agentMemberPhoneNumber,setAgentMemberPhoneNumber]=useState('');
  //const[agentMembertableData, setAgentMemberTableData] = useState([]);
  const[agentMembershowInputs,setAgentMemberShowInputs] = useState(true);

  const localStorageKey="agentMemberData";
  const[agentMembertableData, setAgentMemberTableData] = useState(()=>{
    const storedData=localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData):[];
  });

  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(agentMembertableData))
  },[agentMembertableData])


  const isValidPhoneNumber=(phoneNumber)=>{
    const phonePattern=/^\d{10}$/;
    return phonePattern.test(phoneNumber);
  }

  const doubleMmeberSubmit = async (e)=>{
    e.preventDefault();
    if
    (
        agentMemberId==="" || agentMemberId===" "||
        agentMemberName==="" || agentMemberName===" "||
        agentMemberAge==="" || agentMemberAge===" "||
        agentMemberAddress==="" || agentMemberAddress===" "||
        agentMemberAmount==="" || agentMemberAmount===" "||
        agentMemberPhoneNumber==="" || agentMemberPhoneNumber===" "
    ){
      alert("enter the data")
    }
    else if (!isValidPhoneNumber(agentMemberPhoneNumber)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    else{
      const agentMemberData =
      {
        agentMemberId,
        agentMemberName,
        agentMemberAge,
        agentMemberAddress,
        agentMemberAmount,
        agentMemberPhoneNumber
      };
      try
      {

        const response= await axios.post("http://localhost:8080/agentMember",agentMemberData);
        console.log("data posted",response.data);

        setAgentMemberTableData([...agentMembertableData,agentMemberData]);
        setAgentMemberId('');
        setAgentMemberName('');
        setAgentMemberAge('');
        setAgentMemberAddress('');
        setAgentMemberAmount('');
        setAgentMemberPhoneNumber('');

      }
      catch (error) 
      {
        console.error("Error posting data:", error);
      }

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

  

  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const highlightRow = (data) => {
    if (searchInput && data.auctionMemberName.toLowerCase().includes(searchInput.toLowerCase())) {
      return 'highlighted';
    }
    return 'not found';
  };

  return (
    <div>
      <div className="navPage">
        <Navbar />
      </div>

      <div>
        <a href="/agentChiti"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
        <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
        <input className="searchingName" placeholder="serch" value={searchInput}onChange={handleSearch}/>
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
            <input className="agentMemberTags"type="number" value={agentMemberId} onChange={(e)=>setAgentMemberId(e.target.value)}/>
          </div>
          <div className="">
            <button className="pageSubmitbtn" type="submit">
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
            <tr key={index} className={highlightRow(data)}>
              <td className="agentMemberData">{data.agentMemberId}</td>
              <td className="agentMemberData">{data.agentMemberName}</td>
              <td className="agentMemberData">{data.agentMemberAge}</td>
              <td className="agentMemberData">{data.agentMemberAmount}</td>
              <td className="agentMemberData">{data.agentMemberPhoneNumber}</td>
              <td className="agentMemberData">{data.agentMemberAddress}</td>
              <td className="agentMemberData">
                <button  className="deleteButton" onClick={() => doubleMemberDelete(index)}>Delete</button>
                <img className="trashImg" onClick={() => doubleMemberDelete(index)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error" />
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
