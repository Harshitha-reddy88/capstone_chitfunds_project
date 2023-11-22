
// import axios from "axios";
// import useState from "react";
// import { useNavigate } from "react-router";

// function ChitData() {
//     const [chitValue, setChitValue] = useState("");
//     const [months, setMonths] = useState("");
//     const [subscription, setSubscription] = useState("");
//     const [tableData, setTableData] = useState([]);
//     const [showInputForm, setShowInputForm] = useState(true);
//     const [showDeleteButtons, setShowDeleteButtons] = useState(true);

//     const link=useNavigate()
//     const changing=()=>{
//         link("/auctionMember")
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (chitValue === "" || months === "" || subscription === "") {
//             alert("Please enter all the data");
//         } else {
//             try {
//                 const response = await axios.post("http://localhost:8080/addData", {
//                     chitValue,
//                     months,
//                     subscription
//                 });
//                 console.log("Data sent:", response.data);
    
//                 // Add submitted data to tableData state
//                 setTableData([...tableData, response.data]);
                
//                 // Clear input fields after submission
//                 setChitValue("");
//                 setMonths("");
//                 setSubscription("");
//             } catch (error) {
//                 console.error("Error sending data:", error);
//             }
//         }
//     };

//     const handleDelete = (index) => {
//         // Remove row at the specified index
//         const updatedData = [...tableData];
//         updatedData.splice(index, 1);
//         setTableData(updatedData);
//     };

//     const handleEndChit = () => {
//         setShowInputForm(false); // Hide the input form
//         setShowDeleteButtons(false); // Hide the delete buttons
//     };

//     return (
//         <div>
//             <div>
//                 <Navbar/>
//             </div>
//             <div className="auctionButton">
//                 <div>
//                     <button className="auctionSubmit chitBtn" onClick={changing}>Chit member Details</button>
//                 </div>
//                 <div>
//                     <button className="auctionSubmit endBtn" onClick={handleEndChit}>End Chit</button>
//                 </div>
//             </div>

//             <div className="auctionHeading">
//                 <h1><u> *AUCTION CHITI DETAILS* </u></h1>
//             </div>

//             {showInputForm && (
//                 <div className="auctionData">
//                     <form onSubmit={handleSubmit}>
//                         <input type="number" className="dataInput" placeholder="chitvalue" value={chitValue} onChange={(e) => setChitValue(e.target.value)}/>
//                         <input type="number" className="dataInput" placeholder="months" value={months} onChange={(e) => setMonths(e.target.value)}/>
//                         <input type="number" className="dataInput" placeholder="subscription" value={subscription} onChange={(e) => setSubscription(e.target.value)}/>
//                         <button type="submit" className="auctionSubmit">Submit</button>
//                     </form>
//                 </div>
//             )}
            
//             <table cellSpacing="0" border="1" className="table">
//                 <thead>
//                     <tr>
//                         <th className="tableData">Chit Value</th>
//                         <th className="tableData">Months</th>
//                         <th className="tableData">Subscription</th>
//                         {showDeleteButtons && <th className="tableData">Action</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((rowData, index) => (
//                         <tr key={index}>
//                             <td className="data">{rowData.chitValue}</td>
//                             <td className="data">{rowData.months}</td>
//                             <td className="data">{rowData.subscription}</td>
//                             {showDeleteButtons && (
//                                 <td className="data">
//                                     <button onClick={() => handleDelete(index)}>Delete</button>
//                                 </td>
//                             )}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ChitData;

// import React from "react";
// import "./chitData.css"
// import Navbar from "../navbar/navbar";

// function ChitData(){
//     return(
//         <div>
//             <div>
//                 <Navbar/>
//             </div>
//             <h1 className="Auctiondata"><u>*AUCTION CHITI*</u></h1>

//             <div className="auctionInputs inputMargin">
//                 <div><h3>S.NO :</h3></div>
//                     <div><input className="auctionTags" type="number"/></div>
//                 <div>
//                     <button className="auctionSubmit">SUBMIT</button>
//                 </div>
//             </div>
//             <div className="auctionInputs inputDiv">

//                 <div className="auctionInputs">
//                     <div><h3>CHIT VALUE :</h3></div>
//                     <div><input className="auctionTags" type="number"/></div>
//                 </div>

//                 <div className="auctionInputs inputGap">
//                     <div><h3>NUMBER OF MONTHS :</h3></div>
//                     <div><input className="auctionTags" type="number"/></div>
//                 </div>

//                 <div className="auctionInputs inputGap">
//                     <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
//                     <div><input className="auctionTags" type="number"/></div>
//                 </div>
//             </div>




//         </div>
//     )
// }
// export default ChitData;

import React, { useState } from "react";
import "./chitData.css";
import Navbar from "../navbar/navbar";

function ChitData() 
{
    const [sno, setSno] = useState('');
    const [chitValue, setChitValue] = useState('');
    const [numMonths, setNumMonths] = useState('');
    const [monthlySubscription, setMonthlySubscription] = useState('');
    const [tableData, setTableData] = useState([]);
    const [showInputs,setShowInputs] = useState(true);

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(sno==="" || sno===" " || chitValue==="" || chitValue===" " || numMonths==="" || numMonths===" " || monthlySubscription==="" || monthlySubscription===" "){
            alert("enter the data")
        }
        else{

            const newData = 
        {
            sno,
            chitValue,
            numMonths,
            monthlySubscription,
        };

        setTableData([...tableData, newData]);

        setSno('');
        setChitValue('');
        setNumMonths('');
        setMonthlySubscription('');

        }
    };
    const handleDelete = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1);
        setTableData(updatedData);
    };

    const handleEnd =()=>{
        setShowInputs(false);
    }
    
    

    return (
        <div className="auctioBody">
            <div className="navPage">
                <Navbar />
            </div>

            <div className="auctionInputs">
                <a  className="memberLink" href="/auctionMember"><div className="auctionActions auctionMemberBtn">Chit Member Data</div></a>
                <div className="auctionActions endButton" onClick={handleEnd}>End</div>
            </div>

            <h1 className="Auctiondata"><u>*AUCTION CHITI*</u></h1>

           {showInputs &&(
          <form onSubmit={handleSubmit}>

            <div className="auctionInputs inputMargin">
            
                <div><h3>S.NO :</h3></div>
                <div>
                    <input className="auctionTags"type="number"value={sno}onChange={(e) => setSno(e.target.value)}/>
                </div>
                <div>
                    <button className="submitbtn"  type="submit">SUBMIT</button>
                </div>
            </div>
        

        <div className="auctionInputs inputDiv">
            <div className="auctionInputs">
                <div><h3>CHIT VALUE :</h3></div>
            <div>
                <input className="auctionTags"type="number"value={chitValue}onChange={(e) => setChitValue(e.target.value)}/>
            </div>
        </div>

        <div className="auctionInputs inputGap">
            <div><h3>NUMBER OF MONTHS :</h3></div>
            <div>
                <input className="auctionTags"type="number"value={numMonths}onChange={(e) => setNumMonths(e.target.value)}/>
            </div>
        </div>

        <div className="auctionInputs inputGap">
            <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
            <div>
                <input className="auctionTags"type="number"value={monthlySubscription}onChange={(e) => setMonthlySubscription(e.target.value)}/>
            </div>
        </div>
        </div>
    </form>

           )}
            
    <div className="tableDiv">
            <table  border="1" className="table">
                <thead>
                    <tr>
                        <th className="auctionTableRow">S.NO</th>
                        <th className="auctionTableRow">CHIT VALUE</th>
                        <th className="auctionTableRow">NUMBER OF MONTHS</th>
                        <th className="auctionTableRow">MONTHLY SUBSCRIPTION</th>
                        <th className="auctionTableRow">ACTIONS</th>
                    </tr>
                </thead>
            <tbody>
            {tableData.map((data, index) => (
            <tr key={index}>
              <td className="auctionTableData">{data.sno}</td>
              <td className="auctionTableData">{data.chitValue}</td>
              <td className="auctionTableData">{data.numMonths}</td>
              <td className="auctionTableData">{data.monthlySubscription}</td>
              <td className="auctionTableData">
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

export default ChitData;

