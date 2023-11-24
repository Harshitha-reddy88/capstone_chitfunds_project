import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./doubleMember.css";
import axios from "axios";

function DoubleMember() {
  const[doubleMemberId,setDoubleMemberId]=useState('');
  const[doubleMemberName,setDoubleMemberName]=useState('');
  const[doubleMemberAge,setDoubleMemberAge]=useState('');
  const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
  const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
  const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
  const[doubleMembertableData, setDoubleMemberTableData] = useState([]);
  const[doubleMembershowInputs,setDoubleMemberShowInputs] = useState(true);

  const doubleMmeberSubmit = async(e)=>{
    e.preventDefault();
    if
    (
      doubleMemberId==="" || doubleMemberId===" "||
        doubleMemberName==="" || doubleMemberName===" "||
        doubleMemberAge==="" || doubleMemberAge===" "||
        doubleMemberAddress==="" || doubleMemberAddress===" "||
        doubleMemberAmount==="" || doubleMemberAmount===" "||
        doubleMemberPhoneNumber==="" || doubleMemberPhoneNumber===" "
    ){
      alert("enter the data")
    }
    else{
      const doubleMemberData =
      {
        doubleMemberId,
        doubleMemberName,
        doubleMemberAge,
        doubleMemberAddress,
        doubleMemberAmount,
        doubleMemberPhoneNumber
      };
      try{
        const response=await axios.post("http://localhost:8080/DoubleMember",doubleMemberData);
        console.log("Data stored",response.data);

        setDoubleMemberTableData([...doubleMembertableData,doubleMemberData]);
        setDoubleMemberId('');
        setDoubleMemberName('');
        setDoubleMemberAge('');
        setDoubleMemberAddress('');
        setDoubleMemberAmount('');
        setDoubleMemberPhoneNumber('');

      }
      catch(error){
        console.error("Error posting data",error);
      }

    }
  };


  const doubleMemberDelete = (index) => {
    const newData = [...doubleMembertableData];
    newData.splice(index, 1);
    setDoubleMemberTableData(newData);
  };

  const doubleMemberEnd =()=>{
    setDoubleMemberShowInputs(false)
  }

  return (
    <div>
      <div className="navPage">
        <Navbar />
      </div>

      <div>
        <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
        <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
      </div>

      <div className="doubleMemberHeading">
        <h1>
          <u>* Double Chiti Member Data*</u>
        </h1>
      </div>

      {doubleMembershowInputs &&(
        <form onSubmit={doubleMmeberSubmit}>
        <div className="doubleMember doubleMemberMargin">
          <div>
            <h3>S.NO :</h3>
          </div>
          <div>
            <input className="auctionMemberTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
          </div>
          <div className="">
            <button className="submitbtn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="doubleMember auctionMemberGap">
          <div className="doubleMember">
            <div>
              <h3>NAME :</h3>
            </div>
            <div>
              <input className="doubleMemberTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
            </div>
          </div>

          <div className="doubleMember auctiongap">
            <div>
              <h3>AGE :</h3>
            </div>
            <div>
              <input className="doubleMemberTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
            </div>
          </div>

          <div className="doubleMember auctiongap">
            <div>
              <h3>AMOUNT :</h3>
            </div>
            <div>
              <input className="doubleMemberTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
            </div>
          </div>

          <div className="doubleMember auctiongap">
            <div>
              <h3>PHONE NUMBER :</h3>
            </div>
            <div>
              <input className="doubleMemberTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}/>
            </div>
          </div>

          <div className="doubleMember auctiongap">
            <div>
              <h3>ADDRESS :</h3>
            </div>
            <div>
              <input className="doubleMemberTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
            </div>
          </div>
        </div>
      </form>

      )}
      
      <div className="doubleMemberTable">

      <table border="1" className="table">
        <thead>
          <tr>
            <th className="doubleMemberRow">S.No</th>
            <th className="doubleMemberRow">Name</th>
            <th className="doubleMemberRow">Age</th>
            <th className="doubleMemberRow">Amount</th>
            <th className="doubleMemberRow">Phone Number</th>
            <th className="doubleMemberRow">Address</th>
            <th className="doubleMemberRow">Action</th>
          </tr>
        </thead>
        <tbody>
          {doubleMembertableData.map((data, index) => (
            <tr key={index}>
              <td className="doubleMemberData">{data.doubleMemberId}</td>
              <td className="doubleMemberData">{data.doubleMemberName}</td>
              <td className="doubleMemberData">{data.doubleMemberAge}</td>
              <td className="doubleMemberData">{data.doubleMemberAmount}</td>
              <td className="doubleMemberData">{data.doubleMemberPhoneNumber}</td>
              <td className="doubleMemberData">{data.doubleMemberAddress}</td>
              <td className="doubleMemberData">
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

export default DoubleMember;
