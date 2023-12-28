import React, { useEffect,useState } from "react";
import Navbar from "../navbar/navbar";
import "./agentMember.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function AgentMember() {
  const[agentMemberId,setAgentMemberId]=useState('');
  const[agentMemberName,setAgentMemberName]=useState('');
  const[agentMemberAge,setAgentMemberAge]=useState('');
  const[agentMemberAddress,setAgentMemberAddress]=useState('');
  const[agentMemberAmount,setAgentMemberAmount]=useState('');
  const[agentMemberPhoneNumber,setAgentMemberPhoneNumber]=useState('');
  const[showForm,setShowFrom]=useState(false);




  const navigateOtp=useNavigate();
  const otpPage = () => {
    navigateOtp("/doubleOtp", { state: { phoneNumber: agentMemberPhoneNumber } });
  };
  
  
  

  const { id } = useParams(); // Get the ID from the URL parameter
  const resetFormFields = () => {
    setAgentMemberId('');
    setAgentMemberName('');
    setAgentMemberAge('');
    setAgentMemberAddress('');
    setAgentMemberAmount('');
    setAgentMemberPhoneNumber('');
  };

  React.useEffect(() => {
    const storedData = localStorage.getItem(`agentMemberData_${id}`);
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setAgentMemberTableData(parsedData);
  }, [id]);
  
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
        localStorage.setItem(`agentMemberData_${id}`, JSON.stringify([...agentMembertableData, agentMemberData]));
    

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
    localStorage.setItem(`agentMemberData_${id}`, JSON.stringify(newData));
  };
  const clearDataForCurrentID = () => {
    localStorage.removeItem(`agentMemberData_${id}`);
  };

  
  

  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const highlightRow = (data) => {
    if (searchInput && data.agentMemberName.toLowerCase().includes(searchInput.toLowerCase())) {
      return 'highlighted';
    }
    return ''; 
  };
  
  const toggleVisibility=()=>{
    setShowFrom(!showForm);
  }
  const[showCard,setShowCard]=useState(!!agentMembertableData.length);

  

  const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  const filtered = agentMembertableData.filter(
    (data) =>
      data.agentMemberName.toLowerCase().includes(searchInput.toLowerCase())
  );
  setFilteredData(filtered);
}, [searchInput, agentMembertableData]);




const [showTable, setShowTable] = useState(true); // State to manage table visibility
const [showTableMember, setShowTableMember] = useState(false);

const tableToggleVisibility = () => {
  setShowTable(!showTable);
  setShowTableMember(false); // Hide tableMember when showing the table
};

const tableMemberToggleVisibility = () => {
  setShowTableMember(!showTableMember);
  setShowTable(false); // Hide the table when showing tableMember
};

  
  return (
    <div>
      <div className="navPage">
        <Navbar />
      </div>

      <div className="chitiDataBanner"></div>

      
      <div>
        <a href="/agentChiti"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>

        <div className="searching">
          <input className="searchingName" placeholder="serach Name" value={searchInput}onChange={handleSearch}/>
          {showTable && (
            <h3 onClick={tableMemberToggleVisibility}className="searchingIcon" >&#x1f50d;</h3>
          )}
          
        </div>
        
      </div>

      {showForm &&(
      <div className="formMainDiv">
        
          <form className="formData" onSubmit={doubleMmeberSubmit}>
            <div>
              <h2 className="cross" onClick={toggleVisibility}>&#xd7;</h2>
            </div>

            <div>
              <div className="inputDiv">
                <div>
                  <input placeholder="Enter S.NO"className="agentTags"type="number" value={agentMemberId} onChange={(e)=>setAgentMemberId(e.target.value)}/>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Name" className="agentTags"type="text" value={agentMemberName} onChange={(e)=>setAgentMemberName(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Age" className="agentTags"type="number" value={agentMemberAge} onChange={(e)=>setAgentMemberAge(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Amount" className="agentTags"type="number" value={agentMemberAmount} onChange={(e)=>setAgentMemberAmount(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Phone NUmber" className="agentTags"type="number" value={agentMemberPhoneNumber} onChange={(e)=>setAgentMemberPhoneNumber(e.target.value)}/>
                    <button onClick={otpPage}>verify</button> 
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Address" className="agentTags"type="text" value={agentMemberAddress} onChange={(e)=>setAgentMemberAddress(e.target.value)}/>
                  </div>
                </div>

                <div>
                  <button  className="pageSubmitbtn" type="submit">SUBMIT</button>
                </div>

              </div>
            </div>
            
          </form>
        
      </div>
      )}


      {!showTableMember &&(
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
                  <img className="trashImg" onClick={() => doubleMemberDelete(index)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      )}
      
      


      {showTableMember && (
      <div className="tableMember">
          
            <>
              <h2 className="tableCross" onClick={tableToggleVisibility}>
              &#xd7;
              </h2>
              {filteredData.map((data, index) => (
                <div key={index}>
                  <div key={index}>
                    <p>S.No: {data.agentMemberId}</p>
                    <p>Name: {data.agentMemberName}</p>
                    <p>Age: {data.agentMemberAge}</p>
                    <p>Amount: {data.agentMemberAmount}</p>
                    <p>Phone Number: {data.agentMemberPhoneNumber}</p>
                    <p>Address: {data.agentMemberAddress}</p>
                    
                  </div>
                </div>
              ))}
            </>
          
      </div>
      )}

      <div>
          {(!showCard || !showForm) && (
            <div className="addBtn">
              <h2 onClick={toggleVisibility}>&#43; add</h2>
            </div>
          )}
      </div>

    </div>
  );
}

export default AgentMember;







