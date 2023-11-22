// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import NavBar from "../navbar/navbar";

// function DoubleChiti(){

//     const[doubleNumber,setDoubleNumber]=useState("");
//     const[doubleChitValue,setDoubleChitValue]=useState("");
//     const[doubleMonths,setDoubleMonths]=useState("");
//     const[doubleSubscription,setDoubleSubscription]=useState("");

//     return(
//         <div>

//             <div>
//                 <NavBar/>
//             </div>


//             <div>
//                 <input placeholder="S.NO" value={doubleNumber} onChange={(e)=>setDoubleNumber(e.target.value)}/>
//                 <input placeholder="chitValue" value={doubleChitValue} onChange={(e)=>setDoubleChitValue(e.target.value)}/>
//                 <input placeholder="months" value={doubleMonths} onChange={(e)=>setDoubleMonths(e.target.value)}/>
//                 <input placeholder="monthlySubscription" value={doubleSubscription} onChange={(e)=>setDoubleSubscription(e.target.value)}/>
//                 <button>SUBMIT</button>
//             </div>
            
//         </div>
//     )
// }

// export default DoubleChiti;





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";

// function DoubleChiti() {
//     const [auctionId, setAuctionId] = useState("");
//     const [chitValue, setChitValue] = useState("");
//     const [durationMonths, setDurationMonths] = useState("");
//     const [subscriptionAmount, setSubscriptionAmount] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [tableData, setTableData] = useState([]);
//     const [showInputForm, setShowInputForm] = useState(true);
//     const [showDeleteButtons, setShowDeleteButtons] = useState(true);

//     const link = useNavigate();

//     const redirectToChitMemberDetails = () => {
//         link("/chitMemberDetails");
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (auctionId === "" || chitValue === "" || durationMonths === "" || subscriptionAmount === "" || phoneNumber === "") {
//             alert("Please enter all the data");
//         } else {
//             try {
//                 const response = await axios.post("http://localhost:8080/DoubleData", {
//                     auctionId,
//                     chitValue,
//                     durationMonths,
//                     subscriptionAmount,
//                     phoneNumber,
//                 });
//                 console.log("Data sent:", response.data);

//                 const dataWithId = { ...response.data, auctionId };
//                 setTableData([...tableData, dataWithId]);

//                 setAuctionId("");
//                 setChitValue("");
//                 setDurationMonths("");
//                 setSubscriptionAmount("");
//                 setPhoneNumber("");
//             } catch (error) {
//                 console.error("Error sending data:", error);
//             }
//         }
//     };

//     const handleDelete = (index) => {
//         const updatedData = [...tableData];
//         updatedData.splice(index, 1);
//         setTableData(updatedData);
//     };

//     const handleEndAuction = () => {
//         setShowInputForm(false);
//         setShowDeleteButtons(false);
//     };

//     return (
//         <div>
//             <div className="auctionButton">
//                 <div>
//                     <button className="auctionSubmit chitBtn" onClick={redirectToChitMemberDetails}>
//                         Chit Member Details
//                     </button>
//                 </div>
//                 <div>
//                     <button className="auctionSubmit endBtn" onClick={handleEndAuction}>
//                         End Auction
//                     </button>
//                 </div>
//             </div>

//             <div className="auctionHeading">
//                 <h1>
//                     <u> *AUCTION DETAILS* </u>
//                 </h1>
//             </div>

//             {showInputForm && (
//                 <div className="auctionData">
//                     <form onSubmit={handleSubmit}>
//                         <input type="number" className="dataInput" placeholder="Auction ID" value={auctionId} onChange={(e) => setAuctionId(e.target.value)} />
//                         <input type="number" className="dataInput" placeholder="Chit Value" value={chitValue} onChange={(e) => setChitValue(e.target.value)} />
//                         <input type="number" className="dataInput" placeholder="Duration in Months" value={durationMonths} onChange={(e) => setDurationMonths(e.target.value)} />
//                         <input type="number" className="dataInput" placeholder="Subscription Amount" value={subscriptionAmount} onChange={(e) => setSubscriptionAmount(e.target.value)} />
//                         <input type="text" className="dataInput" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                         <button type="submit" className="auctionSubmit">Submit</button>
//                     </form>
//                 </div>
//             )}

//             <table cellSpacing="0" border="1" className="table">
//                 <thead>
//                     <tr>
//                         <th className="tableData">Auction ID</th>
//                         <th className="tableData">Chit Value</th>
//                         <th className="tableData">Duration (Months)</th>
//                         <th className="tableData">Subscription Amount</th>
//                         <th className="tableData">Phone Number</th>
//                         {showDeleteButtons && <th className="tableData">Action</th>}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((rowData, index) => (
//                         <tr key={index}>
//                             <td className="data">{rowData.auctionId}</td>
//                             <td className="data">{rowData.chitValue}</td>
//                             <td className="data">{rowData.durationMonths}</td>
//                             <td className="data">{rowData.subscriptionAmount}</td>
//                             <td className="data">{rowData.phoneNumber}</td>
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

// export default DoubleChiti;


import React, { useState } from "react";
import "./doubleChiti.css";
import Navbar from "../navbar/navbar";

function DoubleChiti() 
{
    const [doubleChitisno, setDoubleChitiSno] = useState('');
    const [doublechitValue, setDoubleChitValue] = useState('');
    const [doubleNumMonths, setDoubleNumMonths] = useState('');
    const [doubleMonthlySubscription, setDoubleMonthlySubscription] = useState('');
    const [doubleTableData, setDoubleTableData] = useState([]);
    const [doubleChitshowInputs,setDoubleChitShowInputs] = useState(true);

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        if(doubleChitisno==="" || doubleChitisno===" " || doublechitValue==="" || doublechitValue===" " || doubleNumMonths==="" || doubleNumMonths===" " || doubleMonthlySubscription==="" || doubleMonthlySubscription===" "){
            alert("enter the data")
        }
        else{

            const newData = 
        {
            doubleChitisno,
            doublechitValue,
            doubleNumMonths,
            doubleMonthlySubscription,
        };

        setDoubleTableData([...doubleTableData, newData]);

        setDoubleChitiSno('');
        setDoubleChitValue('');
        setDoubleNumMonths('');
        setDoubleMonthlySubscription('');

        }
    };
    const handleDelete = (index) => {
        const updatedData = [...doubleTableData];
        updatedData.splice(index, 1);
        setDoubleTableData(updatedData);
    };

    const handleEnd =()=>{
        setDoubleChitShowInputs(false);
    }
    
    

    return (
        <div className="auctioBody">
            <div className="navPage">
                <Navbar />
            </div>

            <div className="doubleInputs">
                <a  className="memberLink" href="/doubleMember"><div className="auctionActions auctionMemberBtn">Chit Member Data</div></a>
                <div className="auctionActions endButton" onClick={handleEnd}>End</div>
            </div>

            <h1 className="doubleData"><u>*DOUBLE CHITI*</u></h1>

           {doubleChitshowInputs &&(
          <form onSubmit={handleSubmit}>

            <div className="doubleInputs inputMargin">
            
                <div><h3>S.NO :</h3></div>
                <div>
                    <input className="doubleTags"type="number"value={doubleChitisno}onChange={(e) => setDoubleChitiSno(e.target.value)}/>
                </div>
                <div>
                    <button className="submitbtn"  type="submit">SUBMIT</button>
                </div>
            </div>
        

        <div className="doubleInputs inputDiv">
            <div className="doubleInputs">
                <div><h3>CHIT VALUE :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doublechitValue}onChange={(e) => setDoubleChitValue(e.target.value)}/>
            </div>
        </div>

        <div className="doubleInputs inputGap">
            <div><h3>NUMBER OF MONTHS :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doubleNumMonths}onChange={(e) => setDoubleNumMonths(e.target.value)}/>
            </div>
        </div>

        <div className="doubleInputs inputGap">
            <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doubleMonthlySubscription}onChange={(e) => setDoubleMonthlySubscription(e.target.value)}/>
            </div>
        </div>
        </div>
    </form>

           )}
            
    <div className="tableDiv">
            <table  border="1" className="table">
                <thead>
                    <tr>
                        <th className="doubleTableRow">S.NO</th>
                        <th className="doubleTableRow">CHIT VALUE</th>
                        <th className="doubleTableRow">NUMBER OF MONTHS</th>
                        <th className="doubleTableRow">MONTHLY SUBSCRIPTION</th>
                        <th className="doubleTableRow">ACTIONS</th>
                    </tr>
                </thead>
            <tbody>
            {doubleTableData.map((data, index) => (
            <tr key={index}>
              <td className="doubleTableData">{data.doubleChitisno}</td>
              <td className="doubleTableData">{data.doublechitValue}</td>
              <td className="doubleTableData">{data.doubleNumMonths}</td>
              <td className="doubleTableData">{data.doubleMonthlySubscription}</td>
              <td className="doubleTableData">
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

export default DoubleChiti;

