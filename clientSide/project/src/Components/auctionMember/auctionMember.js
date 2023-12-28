// import React, { useState,useEffect } from "react";
// import Navbar from "../navbar/navbar";
// import "./auctionMember.css";
// import axios from "axios";

// function AuctionMember() {
//   const[auctionMemberSno,setAuctionauctionMemberSno]=useState('');
//   const[auctionMemberName,setAuctionauctionMemberName]=useState('');
//   const[auctionMemberAge,setAuctionMemberAge]=useState('');
//   const[auctionMemberAddress,setAuctionMemberAddress]=useState('');
//   const[auctionMemberAmount,setAuctionMemberAmount]=useState('');
//   const[auctionMemberPhoneNumber,setAuctionMemberPhoneNumber]=useState('');
//   //const [auctionMembertableData, setAuctionMemberTableData] = useState([]);
//   const [auctionMembershowInputs,setAuctionMemberShowInputs] = useState(true);

//   //const [editableIndex, setEditableIndex] = useState(-1);

//   const localStorageKey = "auctionMemberData";

//    const [auctionMembertableData, setAuctionMemberTableData] = useState(() => {
//      const storedData = localStorage.getItem(localStorageKey);
//      return storedData ? JSON.parse(storedData) : [];
//    });

//    useEffect(() => {
//      localStorage.setItem(localStorageKey, JSON.stringify(auctionMembertableData));
//    }, [auctionMembertableData]);



//   const auctionMmeberSubmit =async(e)=>{
//     e.preventDefault();
//     if
//     (
//       auctionMemberSno==="" || auctionMemberSno===" "||
//       auctionMemberName==="" || auctionMemberName===" "||
//       auctionMemberAge==="" || auctionMemberAge===" "||
//       auctionMemberAddress==="" || auctionMemberAddress===" "||
//       auctionMemberAmount==="" || auctionMemberAmount===" "||
//       auctionMemberPhoneNumber==="" || auctionMemberPhoneNumber===" "
//     ){
//       alert("enter the data")
//     }
//     else{
//       const auctionMemberData =
//       {
//         auctionMemberSno,
//         auctionMemberName,
//         auctionMemberAge,
//         auctionMemberAddress,
//         auctionMemberAmount,
//         auctionMemberPhoneNumber
//       };
//       try{
//         const response=await axios.post("http://localhost:8080/postAuction",auctionMemberData);
//         console.log("Data added",response.data);

//         setAuctionMemberTableData([...auctionMembertableData,auctionMemberData]);
//         setAuctionauctionMemberSno('');
//         setAuctionauctionMemberName('');
//         setAuctionMemberAge('');
//         setAuctionMemberAddress('');
//         setAuctionMemberAmount('');
//         setAuctionMemberPhoneNumber('');

//       }
//       catch(error){
//         console.error("error data posting",error);
//       }
//     }
//   };

//   const auctionMemberDelete = (index) => {
//     const newData = [...auctionMembertableData];
//     newData.splice(index, 1);
//     setAuctionMemberTableData(newData);
//   };

//   const auctionMemberEnd =()=>{
//     setAuctionMemberShowInputs(false)
//   }


//   const [searchInput, setSearchInput] = useState('');
//   const handleSearch = (e) => {
//     setSearchInput(e.target.value);
//   };
//   const highlightRow = (data) => {
//     if (searchInput && data.auctionMemberName.toLowerCase().includes(searchInput.toLowerCase())) {
//       return 'highlighted';
//     }
//     return 'not found';
//   };

    

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/chitData"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
//         <button className="auctionActions endButton font" onClick={auctionMemberEnd}>End</button>
//         <input className="searchingName" placeholder="serch" value={searchInput}onChange={handleSearch}/>
//       </div>

//       <div className="auctionMemberHeading">
//         <h1>
//           <u>* Auction Chiti Member Data*</u>
//         </h1>
//       </div>

//       {auctionMembershowInputs &&(
//         <form onSubmit={auctionMmeberSubmit}>
//         <div className="auctionMember auctionMemberMargin">
//           <div>
//             <h3>S.NO :</h3>
//           </div>
//           <div>
//             <input className="auctionMemberTags"type="number" value={auctionMemberSno} onChange={(e)=>setAuctionauctionMemberSno(e.target.value)}/>
//           </div>
//           <div className="">
//             <button className="pageSubmitbtn" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <div className="auctionMember auctionMemberGap">
//           <div className="auctionMember">
//             <div>
//               <h3>NAME :</h3>
//             </div>
//             <div>
//               <input className="auctionMemberTags"type="text" value={auctionMemberName} onChange={(e)=>setAuctionauctionMemberName(e.target.value)}/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div>
//               <h3>AGE :</h3>
//             </div>
//             <div>
//               <input className="auctionMemberTags"type="number" value={auctionMemberAge} onChange={(e)=>setAuctionMemberAge(e.target.value)}/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div>
//               <h3>AMOUNT :</h3>
//             </div>
//             <div>
//               <input className="auctionMemberTags"type="number" value={auctionMemberAmount} onChange={(e)=>setAuctionMemberAmount(e.target.value)}/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div>
//               <h3>PHONE NUMBER :</h3>
//             </div>
//             <div>
//               <input className="auctionMemberTags"type="number" value={auctionMemberPhoneNumber} onChange={(e)=>setAuctionMemberPhoneNumber(e.target.value)}/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div>
//               <h3>ADDRESS :</h3>
//             </div>
//             <div>
//               <input className="auctionMemberTags"type="text" value={auctionMemberAddress} onChange={(e)=>setAuctionMemberAddress(e.target.value)}/>
//             </div>
//           </div>
//         </div>
//       </form>

//       )}
      
//       <div className="auctionMemberTable">

//       <table border="1" className="table">
//         <thead>
//           <tr>
//             <th className="auctionMemberRow">S.No</th>
//             <th className="auctionMemberRow">Name</th>
//             <th className="auctionMemberRow">Age</th>
//             <th className="auctionMemberRow">Amount</th>
//             <th className="auctionMemberRow">Phone Number</th>
//             <th className="auctionMemberRow">Address</th>
//             <th className="auctionMemberRow">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {auctionMembertableData.map((data, index) => (
//             <tr key={index} className={highlightRow(data)}>
//               <td className="auctionMemberData">{data.auctionMemberSno}</td>
//               <td className="auctionMemberData">{data.auctionMemberName}</td>
//               <td className="auctionMemberData">{data.auctionMemberAge}</td>
//               <td className="auctionMemberData">{data.auctionMemberAmount}</td>
//               <td className="auctionMemberData">{data.auctionMemberPhoneNumber}</td>
//               <td className="auctionMemberData">{data.auctionMemberAddress}</td>
//               <td className="auctionMemberData trashTd">
//                 <img onClick={() => auctionMemberDelete(index)} className="trashImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
//               </td>
    
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// }

// export default AuctionMember;


// import React, { useState, useEffect } from "react";
// import Navbar from "../navbar/navbar";
// import "./auctionMember.css";
// import axios from "axios";

// function AuctionMember() {
//   const [auctionMemberSno, setAuctionauctionMemberSno] = useState('');
//   const [auctionMemberName, setAuctionauctionMemberName] = useState('');
//   const [auctionMemberAge, setAuctionMemberAge] = useState('');
//   const [auctionMemberAddress, setAuctionMemberAddress] = useState('');
//   const [auctionMemberAmount, setAuctionMemberAmount] = useState('');
//   const [auctionMemberPhoneNumber, setAuctionMemberPhoneNumber] = useState('');

//   const [auctionMembershowInputs, setAuctionMemberShowInputs] = useState(true);
//   const localStorageKey = "auctionMemberData";

//   const [auctionMembertableData, setAuctionMemberTableData] = useState(() => {
//     const storedData = localStorage.getItem(localStorageKey);
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem(localStorageKey, JSON.stringify(auctionMembertableData));
//   }, [auctionMembertableData]);

//   const auctionMmeberSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       auctionMemberSno === "" ||
//       auctionMemberName === "" ||
//       auctionMemberAge === "" ||
//       auctionMemberAddress === "" ||
//       auctionMemberAmount === "" ||
//       auctionMemberPhoneNumber === ""
//     ) {
//       alert("Enter all the required data");
//     } else {
//       const newEntry = {
//         auctionMemberSno,
//         auctionMemberName,
//         auctionMemberAge,
//         auctionMemberAddress,
//         auctionMemberAmount,
//         auctionMemberPhoneNumber
//       };

//       setAuctionMemberTableData([...auctionMembertableData, newEntry]);

//       setAuctionauctionMemberSno('');
//       setAuctionauctionMemberName('');
//       setAuctionMemberAge('');
//       setAuctionMemberAddress('');
//       setAuctionMemberAmount('');
//       setAuctionMemberPhoneNumber('');
//     }
//   };

//   const auctionMemberDelete = (index) => {
//     const newData = [...auctionMembertableData];
//     newData.splice(index, 1);
//     setAuctionMemberTableData(newData);
//   };

//   const auctionMemberEnd = () => {
//     setAuctionMemberShowInputs(false);
//   };

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/chitData">
//           <button className="auctionActions auctionMemberBtn font">Back To chit data</button>
//         </a>
//         <button className="auctionActions endButton font" onClick={auctionMemberEnd}>End</button>
//       </div>

//       <div className="auctionMemberHeading">
//         <h1><u>* Auction Chiti Member Data*</u></h1>
//       </div>

//       {auctionMembershowInputs && (
//         <form onSubmit={auctionMmeberSubmit}>
//           <div className="auctionMember auctionMemberMargin">
//             <div><h3>S.NO :</h3></div>
//             <div><input className="auctionMemberTags" type="number" value={auctionMemberSno} onChange={(e) => setAuctionauctionMemberSno(e.target.value)} /></div>
//             <div><button className="pageSubmitbtn" type="submit">SUBMIT</button></div>
//           </div>

//           <div className="auctionMember auctionMemberGap">
//             <div className="auctionMember">
//               <div><h3>NAME :</h3></div>
//               <div><input className="auctionMemberTags" type="text" value={auctionMemberName} onChange={(e) => setAuctionauctionMemberName(e.target.value)} /></div>
//             </div>

//             <div className="auctionMember auctiongap">
//               <div><h3>AGE :</h3></div>
//               <div><input className="auctionMemberTags" type="number" value={auctionMemberAge} onChange={(e) => setAuctionMemberAge(e.target.value)} /></div>
//             </div>

//             <div className="auctionMember auctiongap">
//               <div><h3>AMOUNT :</h3></div>
//               <div><input className="auctionMemberTags" type="number" value={auctionMemberAmount} onChange={(e) => setAuctionMemberAmount(e.target.value)} /></div>
//             </div>

//             <div className="auctionMember auctiongap">
//               <div><h3>PHONE NUMBER :</h3></div>
//               <div><input className="auctionMemberTags" type="number" value={auctionMemberPhoneNumber} onChange={(e) => setAuctionMemberPhoneNumber(e.target.value)} /></div>
//             </div>

//             <div className="auctionMember auctiongap">
//               <div><h3>ADDRESS :</h3></div>
//               <div><input className="auctionMemberTags" type="text" value={auctionMemberAddress} onChange={(e) => setAuctionMemberAddress(e.target.value)} /></div>
//             </div>
//           </div>
//         </form>
//       )}

//       <div className="auctionMemberTable">
//         <table border="1" className="table">
//           <thead>
//             <tr>
//               <th className="auctionMemberRow">S.No</th>
//               <th className="auctionMemberRow">Name</th>
//               <th className="auctionMemberRow">Age</th>
//               <th className="auctionMemberRow">Amount</th>
//               <th className="auctionMemberRow">Phone Number</th>
//               <th className="auctionMemberRow">Address</th>
//               <th className="auctionMemberRow">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {auctionMembertableData.map((data, index) => (
//               <tr key={index}>
//                 <td className="auctionMemberData">{data.auctionMemberSno}</td>
//                 <td className="auctionMemberData">{data.auctionMemberName}</td>
//                 <td className="auctionMemberData">{data.auctionMemberAge}</td>
//                 <td className="auctionMemberData">{data.auctionMemberAmount}</td>
//                 <td className="auctionMemberData">{data.auctionMemberPhoneNumber}</td>
//                 <td className="auctionMemberData">{data.auctionMemberAddress}</td>
//                 <td className="auctionMemberData">
//                   <button className="deleteButton" onClick={() => auctionMemberDelete(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AuctionMember;



import React, { useState,useEffect } from "react";
import Navbar from "../navbar/navbar";
import "./auctionMember.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function AuctionMember() {
  const[auctionMemberSno,setAuctionauctionMemberSno]=useState('');
  const[auctionMemberName,setAuctionauctionMemberName]=useState('');
  const[auctionMemberAge,setAuctionMemberAge]=useState('');
  const[auctionMemberAddress,setAuctionMemberAddress]=useState('');
  const[auctionMemberAmount,setAuctionMemberAmount]=useState('');
  const[auctionMemberPhoneNumber,setAuctionMemberPhoneNumber]=useState('');
  const[showForm,setShowFrom]=useState(false);




  const { id } = useParams(); // Get the ID from the URL parameter
  const resetFormFields = () => {
    setAuctionauctionMemberSno('');
    setAuctionauctionMemberName('');
    setAuctionMemberAge('');
    setAuctionMemberAddress('');
    setAuctionMemberAmount('');
    setAuctionMemberPhoneNumber('');
  };


  React.useEffect(() => {
    const storedData = localStorage.getItem(`auctionMemberData_${id}`);
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setAuctionMemberTableData(parsedData);
  }, [id]);


  const localStorageKey = "auctionMemberData";
   const [auctionMembertableData, setAuctionMemberTableData] = useState(() => {
     const storedData = localStorage.getItem(localStorageKey);
     return storedData ? JSON.parse(storedData) : [];
   });

   useEffect(() => {
     localStorage.setItem(localStorageKey, JSON.stringify(auctionMembertableData));
   }, [auctionMembertableData]);

   const toggleVisibility=()=>{
    setShowFrom(!showForm);
  }



  const auctionMmeberSubmit =async(e)=>{
    e.preventDefault();
    if
    (
      auctionMemberSno==="" || auctionMemberSno===" "||
      auctionMemberName==="" || auctionMemberName===" "||
      auctionMemberAge==="" || auctionMemberAge===" "||
      auctionMemberAddress==="" || auctionMemberAddress===" "||
      auctionMemberAmount==="" || auctionMemberAmount===" "||
      auctionMemberPhoneNumber==="" || auctionMemberPhoneNumber===" "
    ){
      alert("enter the data")
    }
    else{
      const auctionMemberData =
      {
        auctionMemberSno,
        auctionMemberName,
        auctionMemberAge,
        auctionMemberAddress,
        auctionMemberAmount,
        auctionMemberPhoneNumber
      };
      try{
        const response=await axios.post("http://localhost:8080/postAuction",auctionMemberData);
        console.log("Data added",response.data);

        setAuctionMemberTableData([...auctionMembertableData,auctionMemberData]);
        setAuctionauctionMemberSno('');
        setAuctionauctionMemberName('');
        setAuctionMemberAge('');
        setAuctionMemberAddress('');
        setAuctionMemberAmount('');
        setAuctionMemberPhoneNumber('');
        localStorage.setItem(`auctionMemberData_${id}`, JSON.stringify([...auctionMembertableData, auctionMemberData]));

      }
      catch(error){
        console.error("error data posting",error);
      }
    }
  };

  const auctionMemberDelete = (index) => {
    const newData = [...auctionMembertableData];
    newData.splice(index, 1);
    setAuctionMemberTableData(newData);
    localStorage.setItem(`auctionMemberData_${id}`, JSON.stringify(newData));
  };

  const clearDataForCurrentID = () => {
    localStorage.removeItem(`doubleMemberData_${id}`);
  };

  const[showCard,setShowCard]=useState(!!auctionMembertableData.length)

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


  

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = auctionMembertableData.filter(
      (data) =>
        data.auctionMemberName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchInput, auctionMembertableData]);
    
  
  
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
        <a href="/chitData"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
        <div className="searching">
          <input className="searchingName" placeholder="serach Name" value={searchInput}onChange={handleSearch}/>
          {showTable && (
            <h3 onClick={tableMemberToggleVisibility}className="searchingIcon" >&#x1f50d;</h3>
          )}
          
        </div>
      </div>


      {showForm &&(
        <div>
        <form className="formMainDiv" onSubmit={auctionMmeberSubmit}>

            <div>
              <h2 className="cross" onClick={toggleVisibility}>&#xd7;</h2>
            </div>

            <div>
              <div className="inputDiv">

                <div>
                  <input placeholder="Enter S.NO" className="agentTags"type="number" value={auctionMemberSno} onChange={(e)=>setAuctionauctionMemberSno(e.target.value)}/>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Name" className="agentTags"type="text" value={auctionMemberName} onChange={(e)=>setAuctionauctionMemberName(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Age" className="agentTags"type="number" value={auctionMemberAge} onChange={(e)=>setAuctionMemberAge(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Amount" className="agentTags"type="number" value={auctionMemberAmount} onChange={(e)=>setAuctionMemberAmount(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Phone NUmber" className="agentTags"type="number" value={auctionMemberPhoneNumber} onChange={(e)=>setAuctionMemberPhoneNumber(e.target.value)}/>
                  </div>
                </div>

                <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Address" className="agentTags"type="text" value={auctionMemberAddress} onChange={(e)=>setAuctionMemberAddress(e.target.value)}/>
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
        <div className="auctionMemberTable">

        <table border="1" className="table">
          <thead>
            <tr>
              <th className="auctionMemberRow">S.No</th>
              <th className="auctionMemberRow">Name</th>
              <th className="auctionMemberRow">Age</th>
              <th className="auctionMemberRow">Amount</th>
              <th className="auctionMemberRow">Phone Number</th>
              <th className="auctionMemberRow">Address</th>
              <th className="auctionMemberRow">Action</th>
            </tr>
          </thead>
          <tbody>
            {auctionMembertableData.map((data, index) => (
              <tr key={index} className={highlightRow(data)}>
                <td className="auctionMemberData">{data.auctionMemberSno}</td>
                <td className="auctionMemberData">{data.auctionMemberName}</td>
                <td className="auctionMemberData">{data.auctionMemberAge}</td>
                <td className="auctionMemberData">{data.auctionMemberAmount}</td>
                <td className="auctionMemberData">{data.auctionMemberPhoneNumber}</td>
                <td className="auctionMemberData">{data.auctionMemberAddress}</td>
                <td className="auctionMemberData trashTd">
                  <img onClick={() => auctionMemberDelete(index)} className="trashImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
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
                    <p>S.No: {data.auctionMemberSno}</p>
                    <p>Name: {data.auctionMemberName}</p>
                    <p>Age: {data.auctionMemberAge}</p>
                    <p>Amount: {data.auctionMemberAmount}</p>
                    <p>Phone Number: {data.auctionMemberPhoneNumber}</p>
                    <p>Address: {data.auctionMemberAddress}</p>
                    
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

export default AuctionMember;



