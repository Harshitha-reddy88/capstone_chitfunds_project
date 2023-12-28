// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/navbar";
// import "./doubleMember.css";
// import axios from "axios";

// function DoubleMember() {
//   const[doubleMemberId,setDoubleMemberId]=useState('');
//   const[doubleMemberName,setDoubleMemberName]=useState('');
//   const[doubleMemberAge,setDoubleMemberAge]=useState('');
//   const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
//   const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
//   const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
//   //const[doubleMembertableData, setDoubleMemberTableData] = useState([]);
//   const[doubleMembershowInputs,setDoubleMemberShowInputs] = useState(true);

//   const localStorageKey="doubleMemberData";
//   const[doubleMembertableData, setDoubleMemberTableData] = useState(()=>{
//     const storedData=localStorage.getItem(localStorageKey);
//     return storedData ? JSON.parse(storedData):[];
//   });

//   useEffect(()=>{
//     localStorage.setItem(localStorageKey,JSON.stringify(doubleMembertableData))
//   },[doubleMembertableData]);

//   const doubleMmeberSubmit = async(e)=>{
//     e.preventDefault();
//     if
//     (
//       doubleMemberId==="" || doubleMemberId===" "||
//         doubleMemberName==="" || doubleMemberName===" "||
//         doubleMemberAge==="" || doubleMemberAge===" "||
//         doubleMemberAddress==="" || doubleMemberAddress===" "||
//         doubleMemberAmount==="" || doubleMemberAmount===" "||
//         doubleMemberPhoneNumber==="" || doubleMemberPhoneNumber===" "
//     ){
//       alert("enter the data")
//     }
//     else{
//       const doubleMemberData =
//       {
//         doubleMemberId,
//         doubleMemberName,
//         doubleMemberAge,
//         doubleMemberAddress,
//         doubleMemberAmount,
//         doubleMemberPhoneNumber
//       };
//       try{
//         const response=await axios.post("http://localhost:8080/DoubleMember",doubleMemberData);
//         console.log("Data stored",response.data);

//         setDoubleMemberTableData([...doubleMembertableData,doubleMemberData]);
//         setDoubleMemberId('');
//         setDoubleMemberName('');
//         setDoubleMemberAge('');
//         setDoubleMemberAddress('');
//         setDoubleMemberAmount('');
//         setDoubleMemberPhoneNumber('');

//       }
//       catch(error){
//         console.error("Error posting data",error);
//       }

//     }
//   };


//   const doubleMemberDelete = (index) => {
//     const newData = [...doubleMembertableData];
//     newData.splice(index, 1);
//     setDoubleMemberTableData(newData);
//   };

//   const doubleMemberEnd =()=>{
//     setDoubleMemberShowInputs(false)
//   }




  

//   const[searchQuery,setSearchQuery]=useState("")
//   const filterData=doubleMembertableData.filter(
//     (data)=>data.doubleMemberName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(()=>{
//     if(filterData>0 && searchQuery!==''){
//       alert(`Name "${searchQuery}" found in the table!`)
//     }
//   },[filterData,searchQuery])

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
//         <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
//         <input className="searchingName" placeholder="serch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
//       </div>

//       <div className="doubleMemberHeading">
//         <h1>
//           <u>* Double Chiti Member Data*</u>
//         </h1>
//       </div>

//       {doubleMembershowInputs &&(
//         <form onSubmit={doubleMmeberSubmit}>
//         <div className="doubleMember doubleMemberMargin">
//           <div>
//             <h3>S.NO :</h3>
//           </div>
//           <div>
//             <input className="auctionMemberTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
//           </div>
//           <div className="">
//             <button className="pageSubmitbtn" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <div className="doubleMember auctionMemberGap">
//           <div className="doubleMember">
//             <div>
//               <h3>NAME :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AGE :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AMOUNT :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>PHONE NUMBER :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>ADDRESS :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
//             </div>
//           </div>
//         </div>
//       </form>

//       )}
      
//       <div className="doubleMemberTable">

//       <table border="1" className="table">
//         <thead>
//           <tr>
//             <th className="doubleMemberRow">S.No</th>
//             <th className="doubleMemberRow">Name</th>
//             <th className="doubleMemberRow">Age</th>
//             <th className="doubleMemberRow">Amount</th>
//             <th className="doubleMemberRow">Phone Number</th>
//             <th className="doubleMemberRow">Address</th>
//             <th className="doubleMemberRow">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doubleMembertableData.map((data, index) => (
//             <tr key={index}>
//               <td className="doubleMemberData">{data.doubleMemberId}</td>
//               <td className="doubleMemberData">{data.doubleMemberName}</td>
//               <td className="doubleMemberData">{data.doubleMemberAge}</td>
//               <td className="doubleMemberData">{data.doubleMemberAmount}</td>
//               <td className="doubleMemberData">{data.doubleMemberPhoneNumber}</td>
//               <td className="doubleMemberData">{data.doubleMemberAddress}</td>
//               <td className="doubleMemberData trashTd">
//                 <img className="trashImg" onClick={() => doubleMemberDelete(index)}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// }

// export default DoubleMember;



// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/navbar";
// import "./doubleMember.css";
// import axios from "axios";
// function DoubleMember() {
//   const[doubleMemberId,setDoubleMemberId]=useState('');
//   const[doubleMemberName,setDoubleMemberName]=useState('');
//   const[doubleMemberAge,setDoubleMemberAge]=useState('');
//   const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
//   const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
//   const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
//   //const[doubleMembertableData, setDoubleMemberTableData] = useState([]);
//   const[doubleMembershowInputs,setDoubleMemberShowInputs] = useState(true);
//   const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);

//   const[formSubmitted,setFormSubmitted]=useState(false);
//   const updateInputValue = (setStateFunction,value)=>{
//     if(!formSubmitted){
//       setStateFunction(value);
//     }
//   }
  

//   const [formData, setFormData] = useState({
//     doubleMemberId: '',
//     doubleMemberName: '',
//     doubleMemberAge: '',
//     doubleMemberAddress: '',
//     doubleMemberAmount: '',
//     doubleMemberPhoneNumber: ''
//   });
//   const saveFormDataToLocalStorage = () => {
//     localStorage.setItem('doubleMemberFormData', JSON.stringify(formData));
//   };

//   const loadFormDataFromLocalStorage = () => {
//     const storedFormData = localStorage.getItem('doubleMemberFormData');
//     if (storedFormData) {
//       setFormData(JSON.parse(storedFormData));
//     }
//   };

//   useEffect(() => {
//     loadFormDataFromLocalStorage();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };


//   const localStorageKey="doubleMemberData";
//   const[doubleMembertableData, setDoubleMemberTableData] = useState(()=>{
//     const storedData=localStorage.getItem(localStorageKey);
//     return storedData ? JSON.parse(storedData):[];
//   });

//   useEffect(()=>{
//     localStorage.setItem(localStorageKey,JSON.stringify(doubleMembertableData))
//   },[doubleMembertableData]);

//   const doubleMmeberSubmit = async(e)=>{
//     e.preventDefault();
//     if
//     (
//       doubleMemberId==="" || doubleMemberId===" "||
//         doubleMemberName==="" || doubleMemberName===" "||
//         doubleMemberAge==="" || doubleMemberAge===" "||
//         doubleMemberAddress==="" || doubleMemberAddress===" "||
//         doubleMemberAmount==="" || doubleMemberAmount===" "||
//         doubleMemberPhoneNumber==="" || doubleMemberPhoneNumber===" "
//     ){
//       alert("enter the data")
//     }
//     else{
//       const doubleMemberData =
//       {
//         doubleMemberId,
//         doubleMemberName,
//         doubleMemberAge,
//         doubleMemberAddress,
//         doubleMemberAmount,
//         doubleMemberPhoneNumber
//       };
//       saveFormDataToLocalStorage();
//       try{
//         const response=await axios.post("http://localhost:8080/DoubleMember",doubleMemberData);
//         console.log("Data stored",response.data);

//         setDoubleMemberTableData([...doubleMembertableData,doubleMemberData]);
//         setDoubleMemberId('');
//         setDoubleMemberName('');
//         setDoubleMemberAge('');
//         setDoubleMemberAddress('');
//         setDoubleMemberAmount('');
//         setDoubleMemberPhoneNumber('');
//         setFormSubmitted(true);

//       }
//       catch(error){
//         console.error("Error posting data",error);
//       }

//     }
//   };


//   const doubleMemberDelete = (index) => {
//     const newData = [...doubleMembertableData];
//     newData.splice(index, 1);
//     setDoubleMemberTableData(newData);
//   };

//   const doubleMemberEnd =()=>{
//     setDoubleMemberShowInputs(false)
//   }

//   const[searchQuery,setSearchQuery]=useState("")
//   const filterData=doubleMembertableData.filter(
//     (data)=>data.doubleMemberName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(()=>{
//     if(filterData>0 && searchQuery!==''){
//       alert(`Name "${searchQuery}" found in the table!`)
//     }
//   },[filterData,searchQuery])

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
//         <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
//         <input className="searchingName" placeholder="serch" value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}/>
//       </div>

//       <div className="doubleMemberHeading">
//         <h1>
//           <u>* Double Chiti Member Data*</u>
//         </h1>
//       </div>

//       {doubleMembershowInputs &&(
//         <form onSubmit={doubleMmeberSubmit}>
//         <div className="doubleMember doubleMemberMargin">
//           <div>
//             <h3>S.NO :</h3>
//           </div>
//           <div>
//             <input className="auctionMemberTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
//           </div>
//           <div className="">
//             <button className="pageSubmitbtn" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <div className="doubleMember auctionMemberGap">
//           <div className="doubleMember">
//             <div>
//               <h3>NAME :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AGE :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AMOUNT :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>PHONE NUMBER :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}onFocus={() => setIsPhoneNumberFocused(true)}
//                 onBlur={() => setIsPhoneNumberFocused(false)}/>
//               {isPhoneNumberFocused && (
//                 <button className="doubleVerify">Verify</button>
//               )}
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>ADDRESS :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
//             </div>
//           </div>
//         </div>
//       </form>

//       )}
      
//       <div className="doubleMemberTable">

//       <table border="1" className="table">
//         <thead>
//           <tr>
//             <th className="doubleMemberRow">S.No</th>
//             <th className="doubleMemberRow">Name</th>
//             <th className="doubleMemberRow">Age</th>
//             <th className="doubleMemberRow">Amount</th>
//             <th className="doubleMemberRow">Phone Number</th>
//             <th className="doubleMemberRow">Address</th>
//             <th className="doubleMemberRow">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//         {filterData.map((data, index) => (
//             <tr key={index}>
//               <td className="doubleMemberData">{data.doubleMemberId}</td>
//               <td className="doubleMemberData">{data.doubleMemberName}</td>
//               <td className="doubleMemberData">{data.doubleMemberAge}</td>
//               <td className="doubleMemberData">{data.doubleMemberAmount}</td>
//               <td className="doubleMemberData">{data.doubleMemberPhoneNumber}</td>
//               <td className="doubleMemberData">{data.doubleMemberAddress}</td>
//               <td className="doubleMemberData trashTd">
//                 <img
//                   className="trashImg"
//                   onClick={() => doubleMemberDelete(index)}
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU"
//                   alt="error"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// }

// export default DoubleMember;

// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/navbar";
// import "./doubleMember.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function DoubleMember() {
//   const[doubleMemberId,setDoubleMemberId]=useState('');
//   const[doubleMemberName,setDoubleMemberName]=useState('');
//   const[doubleMemberAge,setDoubleMemberAge]=useState('');
//   const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
//   const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
//   const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
//   const[doubleMembershowInputs,setDoubleMemberShowInputs] = useState(true);
//   const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);


//   const { id } = useParams();

//   React.useEffect(() => {
//     const storedData = localStorage.getItem(`doubleMemberData${id}`);
//     const parsedData = storedData ? JSON.parse(storedData) : [];
//     setDoubleMemberTableData(parsedData);
//   }, [id]);


//   const localStorageKey="doubleMemberData";
//   const[doubleMembertableData, setDoubleMemberTableData] = useState(()=>{
//     const storedData=localStorage.getItem(localStorageKey);
//     return storedData ? JSON.parse(storedData):[];
//   });
//   useEffect(()=>{
//     localStorage.setItem(localStorageKey,JSON.stringify(doubleMembertableData))
//   },[doubleMembertableData])
  

//   const doubleMmeberSubmit = async(e)=>{
//     e.preventDefault();
//     if
//     (
//         doubleMemberId==="" || doubleMemberId===" "||
//         doubleMemberName==="" || doubleMemberName===" "||
//         doubleMemberAge==="" || doubleMemberAge===" "||
//         doubleMemberAddress==="" || doubleMemberAddress===" "||
//         doubleMemberAmount==="" || doubleMemberAmount===" "||
//         doubleMemberPhoneNumber==="" || doubleMemberPhoneNumber===" "
//     ){
//       alert("enter the data")
//     }
//     else{
//       const doubleMemberData =
//       {
//         doubleMemberId,
//         doubleMemberName,
//         doubleMemberAge,
//         doubleMemberAddress,
//         doubleMemberAmount,
//         doubleMemberPhoneNumber
//       };
//       // saveFormDataToLocalStorage();
//       try{
//         const response=await axios.post("http://localhost:8080/DoubleMember",doubleMemberData);
//         console.log("Data stored",response.data);

//         setDoubleMemberTableData([...doubleMembertableData,doubleMemberData]);
//         setDoubleMemberId('');
//         setDoubleMemberName('');
//         setDoubleMemberAge('');
//         setDoubleMemberAddress('');
//         setDoubleMemberAmount('');
//         setDoubleMemberPhoneNumber('');
//         // setFormSubmitted(true);
//         localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify([...doubleMembertableData, doubleMemberData]));

//       }
//       catch(error){
//         console.error("Error posting data",error);
//       }

//     }
//   };


//   const doubleMemberDelete = (index) => {
//     const newData = [...doubleMembertableData];
//     newData.splice(index, 1);
//     setDoubleMemberTableData(newData);
//     localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify(newData));
//   };

//   // const doubleMemberEnd =()=>{
//   //   setDoubleMemberShowInputs(false)
//   // }

//   const[searchQuery,setSearchQuery]=useState("")
//   const filterData=doubleMembertableData.filter(
//     (data)=>data.doubleMemberName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(()=>{
//     if(filterData>0 && searchQuery!==''){
//       alert(`Name "${searchQuery}" found in the table!`)
//     }
//   },[filterData,searchQuery])

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
//         <input className="searchingName" placeholder="serch" value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}/>
//       </div>

//       <div className="doubleMemberHeading">
//         <h1>
//           <u>* Double Chiti Member Data*</u>
//         </h1>
//       </div>

//         <form onSubmit={doubleMmeberSubmit}>
//         <div className="doubleMember doubleMemberMargin">
//           <div>
//             <h3>S.NO :</h3>
//           </div>
//           <div>
//             <input className="auctionMemberTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
//           </div>
//           <div className="">
//             <button className="pageSubmitbtn" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <div className="doubleMember auctionMemberGap">
//           <div className="doubleMember">
//             <div>
//               <h3>NAME :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AGE :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AMOUNT :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>PHONE NUMBER :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}/>

//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>ADDRESS :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
//             </div>
//           </div>
//         </div>
//       </form>
      
//       <div className="doubleMemberTable">

//       <table border="1" className="table">
//         <thead>
//           <tr>
//             <th className="doubleMemberRow">S.No</th>
//             <th className="doubleMemberRow">Name</th>
//             <th className="doubleMemberRow">Age</th>
//             <th className="doubleMemberRow">Amount</th>
//             <th className="doubleMemberRow">Phone Number</th>
//             <th className="doubleMemberRow">Address</th>
//             <th className="doubleMemberRow">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//         {doubleMembertableData.map((data, index) => (
//             <tr key={index}>
//               <td className="doubleMemberData">{data.doubleMemberId}</td>
//               <td className="doubleMemberData">{data.doubleMemberName}</td>
//               <td className="doubleMemberData">{data.doubleMemberAge}</td>
//               <td className="doubleMemberData">{data.doubleMemberAmount}</td>
//               <td className="doubleMemberData">{data.doubleMemberPhoneNumber}</td>
//               <td className="doubleMemberData">{data.doubleMemberAddress}</td>
//               <td className="doubleMemberData trashTd">
//                 <img
//                   className="trashImg"
//                   onClick={() => doubleMemberDelete(index)}
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU"
//                   alt="error"
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// }

// export default DoubleMember;








// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/navbar";
// import "./doubleMember.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function DoubleMember() {
//   const[doubleMemberId,setDoubleMemberId]=useState('');
//   const[doubleMemberName,setDoubleMemberName]=useState('');
//   const[doubleMemberAge,setDoubleMemberAge]=useState('');
//   const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
//   const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
//   const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
//   const[doubleMembershowInputs,setDoubleMemberShowInputs] = useState(true);



//   const { id } = useParams(); // Get the ID from the URL parameter
//   const resetFormFields = () => {
//     setDoubleMemberId('');
//     setDoubleMemberName('');
//     setDoubleMemberAge('');
//     setDoubleMemberAddress('');
//     setDoubleMemberAmount('');
//     setDoubleMemberPhoneNumber('');
//   };


//   // React.useEffect(() => {
//   //   const storedData = localStorage.getItem(`doubleMemberData${id}`);
//   //   const parsedData = storedData ? JSON.parse(storedData) : [];
//   //   setDoubleMemberTableData(parsedData);
//   // }, [id]);

//   React.useEffect(() => {
//     const storedData = localStorage.getItem(`doubleMemberData_${id}`);
//     const parsedData = storedData ? JSON.parse(storedData) : [];
//     setDoubleMemberTableData(parsedData);
//   }, [id]);
  

//   const localStorageKey="doubleMemberData";
//   const[doubleMembertableData, setDoubleMemberTableData] = useState(()=>{
//     const storedData=localStorage.getItem(localStorageKey);
//     return storedData ? JSON.parse(storedData):[];
//   });

//   useEffect(()=>{
//     localStorage.setItem(localStorageKey,JSON.stringify(doubleMembertableData))
//   },[doubleMembertableData]);


//   const doubleMmeberSubmit = async(e)=>{
//     e.preventDefault();
//     if
//     (
//         doubleMemberId==="" || doubleMemberId===" "||
//         doubleMemberName==="" || doubleMemberName===" "||
//         doubleMemberAge==="" || doubleMemberAge===" "||
//         doubleMemberAddress==="" || doubleMemberAddress===" "||
//         doubleMemberAmount==="" || doubleMemberAmount===" "||
//         doubleMemberPhoneNumber==="" || doubleMemberPhoneNumber===" "
//     ){
//       alert("enter the data")
//     }
//     else{
//       const doubleMemberData =
//       {
//         doubleMemberId,
//         doubleMemberName,
//         doubleMemberAge,
//         doubleMemberAddress,
//         doubleMemberAmount,
//         doubleMemberPhoneNumber
//       };
//       try{
//         const response=await axios.post("http://localhost:8080/DoubleMember",doubleMemberData);
//         console.log("Data stored",response.data);

//         setDoubleMemberTableData([...doubleMembertableData,doubleMemberData]);
//         setDoubleMemberId('');
//         setDoubleMemberName('');
//         setDoubleMemberAge('');
//         setDoubleMemberAddress('');
//         setDoubleMemberAmount('');
//         setDoubleMemberPhoneNumber('');
//         localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify([...doubleMembertableData, doubleMemberData]));

//       }
//       catch(error){
//         console.error("Error posting data",error);
//       }

//     }
//   };


//   // const doubleMemberDelete = (index) => {
//   //   const newData = [...doubleMembertableData];
//   //   newData.splice(index, 1);
//   //   setDoubleMemberTableData(newData);
//   //   localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify(newData));
//   // };

//   const doubleMemberDelete = (index) => {
//     const newData = [...doubleMembertableData];
//     newData.splice(index, 1);
//     setDoubleMemberTableData(newData);
    
//     // Update local storage after deleting
//     localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify(newData));
//   };
//   const clearDataForCurrentID = () => {
//     localStorage.removeItem(`doubleMemberData_${id}`);
//   };

//   const doubleMemberEnd =()=>{
//     setDoubleMemberShowInputs(false)
//   }




  

//   const[searchQuery,setSearchQuery]=useState("")
//   const filterData=doubleMembertableData.filter(
//     (data)=>data.doubleMemberName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   useEffect(()=>{
//     if(filterData>0 && searchQuery!==''){
//       alert(`Name "${searchQuery}" found in the table!`)
//     }
//   },[filterData,searchQuery])

//   return (
//     <div>
//       <div className="navPage">
//         <Navbar />
//       </div>

//       <div>
//         <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
//         <button className="auctionActions endButton font" onClick={doubleMemberEnd}>End</button>
//         <input className="searchingName" placeholder="serch" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
//       </div>

//       <div className="doubleMemberHeading">
//         <h1>
//           <u>* Double Chiti Member Data*</u>
//         </h1>
//       </div>

//       {doubleMembershowInputs &&(
//         <form onSubmit={doubleMmeberSubmit}>
//         <div className="doubleMember doubleMemberMargin">
//           <div>
//             <h3>S.NO :</h3>
//           </div>
//           <div>
//             <input className="auctionMemberTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
//           </div>
//           <div className="">
//             <button className="pageSubmitbtn" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </div>

//         <div className="doubleMember auctionMemberGap">
//           <div className="doubleMember">
//             <div>
//               <h3>NAME :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AGE :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>AMOUNT :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>PHONE NUMBER :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}/>
//             </div>
//           </div>

//           <div className="doubleMember auctiongap">
//             <div>
//               <h3>ADDRESS :</h3>
//             </div>
//             <div>
//               <input className="doubleMemberTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
//             </div>
//           </div>
//         </div>
//       </form>

//       )}
      
//       <div className="doubleMemberTable">

//       <table border="1" className="table">
//         <thead>
//           <tr>
//             <th className="doubleMemberRow">S.No</th>
//             <th className="doubleMemberRow">Name</th>
//             <th className="doubleMemberRow">Age</th>
//             <th className="doubleMemberRow">Amount</th>
//             <th className="doubleMemberRow">Phone Number</th>
//             <th className="doubleMemberRow">Address</th>
//             <th className="doubleMemberRow">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doubleMembertableData.map((data, index) => (
//             <tr key={index}>
//               <td className="doubleMemberData">{data.doubleMemberId}</td>
//               <td className="doubleMemberData">{data.doubleMemberName}</td>
//               <td className="doubleMemberData">{data.doubleMemberAge}</td>
//               <td className="doubleMemberData">{data.doubleMemberAmount}</td>
//               <td className="doubleMemberData">{data.doubleMemberPhoneNumber}</td>
//               <td className="doubleMemberData">{data.doubleMemberAddress}</td>
//               <td className="doubleMemberData trashTd">
//                 <img className="trashImg" onClick={() => doubleMemberDelete(index)}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// }

// export default DoubleMember;


import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./doubleMember.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DoubleMember() {
  const[doubleMemberId,setDoubleMemberId]=useState('');
  const[doubleMemberName,setDoubleMemberName]=useState('');
  const[doubleMemberAge,setDoubleMemberAge]=useState('');
  const[doubleMemberAddress,setDoubleMemberAddress]=useState('');
  const[doubleMemberAmount,setDoubleMemberAmount]=useState('');
  const[doubleMemberPhoneNumber,setDoubleMemberPhoneNumber]=useState('');
  const[showForm,setShowFrom]=useState(false);



  const { id } = useParams(); // Get the ID from the URL parameter
  const resetFormFields = () => {
    setDoubleMemberId('');
    setDoubleMemberName('');
    setDoubleMemberAge('');
    setDoubleMemberAddress('');
    setDoubleMemberAmount('');
    setDoubleMemberPhoneNumber('');
  };

  const doublenavigateOtp=useNavigate();
  const doubleOtpPage = () => {
    doublenavigateOtp("/doubleOtp", { state: { phoneNumber: doubleMemberPhoneNumber } });
  };

  React.useEffect(() => {
    const storedData = localStorage.getItem(`doubleMemberData_${id}`);
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setDoubleMemberTableData(parsedData);
  }, [id]);
  

  const localStorageKey="doubleMemberData";
  const[doubleMembertableData, setDoubleMemberTableData] = useState(()=>{
    const storedData=localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData):[];
  });

  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(doubleMembertableData))
  },[doubleMembertableData]);


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
        localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify([...doubleMembertableData, doubleMemberData]));

      }
      catch(error){
        console.error("Error posting data",error);
      }

    }
  };

  const toggleVisibility=()=>{
    setShowFrom(!showForm);
  }

  const doubleMemberDelete = (index) => {
    const newData = [...doubleMembertableData];
    newData.splice(index, 1);
    setDoubleMemberTableData(newData);
    
    // Update local storage after deleting
    localStorage.setItem(`doubleMemberData_${id}`, JSON.stringify(newData));
  };
  const clearDataForCurrentID = () => {
    localStorage.removeItem(`doubleMemberData_${id}`);
  };

  const[showCard,setShowCard]=useState(!!doubleMembertableData.length);


  




  

  const [searchInput, setSearchInput] = useState('');
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const highlightRow = (data) => {
    if (searchInput && data.doubleMemberName.toLowerCase().includes(searchInput.toLowerCase())) {
      return 'highlighted';
    }
    return ''; 
  };

const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  const filtered = doubleMembertableData.filter(
    (data) =>
      data.doubleMemberName.toLowerCase().includes(searchInput.toLowerCase())
  );
  setFilteredData(filtered);
}, [searchInput, doubleMembertableData]);
  


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
        <a href="/double"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
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
              <div  className="inputDiv">


              <div>
                <input placeholder="Enter S.NO"className="agentTags"type="number" value={doubleMemberId} onChange={(e)=>setDoubleMemberId(e.target.value)}/>
              </div>

              <div className="chitDataMainDiv">
                  <div>
                    <input placeholder="Enter Name" className="agentTags"type="text" value={doubleMemberName} onChange={(e)=>setDoubleMemberName(e.target.value)}/>
                  </div>
              </div>

              <div className="chitDataMainDiv">
                <div>
                  <input placeholder="Enter Age"  className="agentTags"type="number" value={doubleMemberAge} onChange={(e)=>setDoubleMemberAge(e.target.value)}/>
                </div>
              </div>

              <div className="chitDataMainDiv">
                <div>
                  <input placeholder="Enter Amount" className="agentTags"type="number" value={doubleMemberAmount} onChange={(e)=>setDoubleMemberAmount(e.target.value)}/>
                </div>
              </div>

              <div className="chitDataMainDiv">
                <div>
                  <input placeholder="Enter Phone NUmber" className="agentTags"type="number" value={doubleMemberPhoneNumber} onChange={(e)=>setDoubleMemberPhoneNumber(e.target.value)}/>
                  <button onClick={doubleOtpPage}>verify</button> 
                </div>
              </div>

              <div className="chitDataMainDiv">
                <div>
                  <input placeholder="Enter Address" className="agentTags"type="text" value={doubleMemberAddress} onChange={(e)=>setDoubleMemberAddress(e.target.value)}/>
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
                <td className="doubleMemberData trashTd">
                  <img className="trashImg" onClick={() => doubleMemberDelete(index)}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
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
                    <p>S.No: {data.doubleMemberId}</p>
                    <p>Name: {data.doubleMemberName}</p>
                    <p>Age: {data.doubleMemberAge}</p>
                    <p>Amount: {data.doubleMemberAmount}</p>
                    <p>Phone Number: {data.doubleMemberPhoneNumber}</p>
                    <p>Address: {data.doubleMemberAddress}</p>
                    
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

export default DoubleMember;



