                           
// import React, { useEffect, useState } from "react";
// import "./chitData.css";
// import Navbar from "../navbar/navbar";
// import axios from "axios";

// function ChitData() 
// {
//     const [sno, setSno] = useState('');
//     const [chitValue, setChitValue] = useState('');
//     const [numMonths, setNumMonths] = useState('');
//     const [monthlySubscription, setMonthlySubscription] = useState('');
//     //const [tableData, setTableData] = useState([]);
//     const [showInputs,setShowInputs] = useState(true);

//     const localStorageKey="auctionChitiData";
//     const [tableData, setTableData] = useState(()=>{
//         const storedData=localStorage.getItem(localStorageKey);
//         return storedData ? JSON.parse(storedData):[];
//     });
//     useEffect(()=>{
//         localStorage.setItem(localStorageKey,JSON.stringify(tableData))
//     },[tableData]);

//     const handleSubmit = async (e) => 
//     {
//         e.preventDefault();
//         if(
//             sno==="" || sno===" " || 
//             chitValue==="" || chitValue===" " || 
//             numMonths==="" || numMonths===" " || 
//             monthlySubscription==="" || monthlySubscription===" ")
//         {
//             alert("enter the data")
//         }
//         else{

//             const newData = 
//         {
//             sno,
//             chitValue,
//             numMonths,
//             monthlySubscription,
//         };
//         try{

//             const response= await axios.post("http://localhost:8080/addData",newData);
//             console.log("data posted to database",response.data);
//             setTableData([...tableData, newData]);
//             setSno('');
//             setChitValue('');
//             setNumMonths('');
//             setMonthlySubscription('');

//         }
//         catch(error){
//             console.error("error while posting data",error);
//         }

//         }
//     };
//     const handleDelete = (index) => {
//         const updatedData = [...tableData];
//         updatedData.splice(index, 1);
//         setTableData(updatedData);
//     };

//     const handleEnd =()=>{
//         setShowInputs(false);
//     }
    
    

//     return (
//         <div className="auctioBody">
//             <div className="navPage">
//                 <Navbar />
//             </div>

//             <div className="auctionInputs">
//                 <a  className="memberLink" href="/auctionMember"><div className="auctionActions auctionMemberBtn">Chit Member Data</div></a>
//                 <div className="auctionActions endButton" onClick={handleEnd}>End</div>
//             </div>

//             <h1 className="Auctiondata"><u>*AUCTION CHITI*</u></h1>

//            {showInputs &&(
//           <form onSubmit={handleSubmit}>

//             <div className="auctionInputs inputMargin">
            
//                 <div><h3>S.NO :</h3></div>
//                 <div>
//                     <input className="auctionTags"type="number"value={sno}onChange={(e) => setSno(e.target.value)}/>
//                 </div>
//                 <div>
//                     <button className="pageSubmitbtn"  type="submit">SUBMIT</button>
//                 </div>
//             </div>
        

//         <div className="auctionInputs inputDiv">
//             <div className="auctionInputs">
//                 <div><h3>CHIT VALUE :</h3></div>
//             <div>
//                 <input className="auctionTags"type="number"value={chitValue}onChange={(e) => setChitValue(e.target.value)}/>
//             </div>
//         </div>

//         <div className="auctionInputs inputGap">
//             <div><h3>NUMBER OF MONTHS :</h3></div>
//             <div>
//                 <input className="auctionTags"type="number"value={numMonths}onChange={(e) => setNumMonths(e.target.value)}/>
//             </div>
//         </div>

//         <div className="auctionInputs inputGap">
//             <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
//             <div>
//                 <input className="auctionTags"type="number"value={monthlySubscription}onChange={(e) => setMonthlySubscription(e.target.value)}/>
//             </div>
//         </div>
//         </div>
//     </form>

//            )}
            
//     <div className="tableDiv">
//             <table  border="1" className="table">
//                 <thead>
//                     <tr>
//                         <th className="auctionTableRow">S.NO</th>
//                         <th className="auctionTableRow">CHIT VALUE</th>
//                         <th className="auctionTableRow">NUMBER OF MONTHS</th>
//                         <th className="auctionTableRow">MONTHLY SUBSCRIPTION</th>
//                         <th className="auctionTableRow">ACTIONS</th>
//                     </tr>
//                 </thead>
//             <tbody>
//             {tableData.map((data, index) => (
//             <tr key={index}>
//               <td className="auctionTableData">{data.sno}</td>
//               <td className="auctionTableData">{data.chitValue}</td>
//               <td className="auctionTableData">{data.numMonths}</td>
//               <td className="auctionTableData">{data.monthlySubscription}</td>
//               <td className="auctionTableData trashTd">
//                 {/* <button className="deleteButton" onClick={() => handleDelete(index)}>Delete</button> */}
//                 <img onClick={() => handleDelete(index)}className="trashImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
            
//     </div>
//   );
// }

// export default ChitData;

                           
import React, { useEffect, useState } from "react";
import "./chitData.css";
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function ChitData() 
{
    const [sno, setSno] = useState('');
    const [chitValue, setChitValue] = useState('');
    const [numMonths, setNumMonths] = useState('');
    const [monthlySubscription, setMonthlySubscription] = useState('');

    const[showForm,setShowFrom]=useState(false);

    const localStorageKey="auctionChitiData";
    const [tableData, setTableData] = useState(()=>{
        const storedData=localStorage.getItem(localStorageKey);
        return storedData ? JSON.parse(storedData):[];
    });
    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(tableData))
    },[tableData]);

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(
            sno==="" || sno===" " || 
            chitValue==="" || chitValue===" " || 
            numMonths==="" || numMonths===" " || 
            monthlySubscription==="" || monthlySubscription===" ")
        {
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
        try{

            const response= await axios.post("http://localhost:8080/addData",newData);
            console.log("data posted to database",response.data);
            setTableData([...tableData, newData]);
            setSno('');
            setChitValue('');
            setNumMonths('');
            setMonthlySubscription('');

        }
        catch(error){
            console.error("error while posting data",error);
        }

        }
        toggleVisibility();
        setShowCard(true);
    };

    const toggleVisibility=()=>{
        setShowFrom(!showForm);
    }


    const [showCard, setShowCard] = useState(!!tableData.length);

    const [agentDataIndex, setAgentDataIndex] = useState(1);

    const redirectToNextauctonMember = () => {
        setAgentDataIndex((prevIndex) => prevIndex + 1);
    };


    
    

    return (
        <div className="auctioBody">
            <div className="navPage">
                <Navbar />
            </div>


            <div className="chitiDataBanner"></div>


            {showForm &&(
                <div className="formMainDiv">

                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2 className="cross" onClick={toggleVisibility}>&#xd7;</h2>
                        </div>

                        <div>
                            <div className="inputDiv">

                                <div className="chitDataMainDiv">
                                    <div>
                                        <input placeholder="Enter S.NO" className="agentTags"type="number"value={sno}onChange={(e) => setSno(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="chitDataMainDiv">
                                    <div>
                                        <div>
                                            <input placeholder="Chiti Value"className="agentTags"type="number"value={chitValue}onChange={(e) => setChitValue(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="chitDataMainDiv">
                                    <div>
                                        <div>
                                            <input placeholder="Number Of Months" className="agentTags"type="number"value={numMonths}onChange={(e) => setNumMonths(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="chitDataMainDiv">
                                    <div>
                                        <div>
                                            <input placeholder="Monthly Subscription" className="agentTags"type="number"value={monthlySubscription}onChange={(e) => setMonthlySubscription(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button className="pageSubmitbtn"  type="submit">SUBMIT</button>
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
                            {tableData.map((data, index) => (
                                <div className="chitDataCard" key={index}>
                                    <h3 className="dataHeading ">ChitFund Data {index + 1}</h3>
                                    <p className="chitData">S.NO : <span className="cardData">{data.sno}</span></p>
                                    <p className="chitiData">Chit Value : <span className="cardData">{data.chitValue}</span></p>
                                    <p className="chitiData">Number of Months : <span className="cardData">{data.numMonths}</span></p>
                                    <p className="chitiData">Monthly Subscription : <span className="cardData">{data.monthlySubscription}</span></p>
                                    <Link to={`/auctionMember/${index + agentDataIndex}`}>
                                        <button className="landingBtn cardBtn btn animation" onClick={redirectToNextauctonMember}>Start</button>
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

export default ChitData;

