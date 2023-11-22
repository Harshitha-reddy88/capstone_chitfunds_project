// import React from "react";

// function AuctionMember(){
//     return(
//         <div>
//             <input placeholder="S.NO"/>
//             <input placeholder="name"/>
//             <input placeholder="age"/>
//             <input placeholder="address"/>
//             <input placeholder="amount"/>
//             <input placeholder="phoneNumber"/>
//         </div>
//     )
// }
// export default AuctionMember;

// import React, { useState } from "react";

// function AuctionMember() {
//   const [formData, setFormData] = useState({
//     SNO: "",
//     name: "",
//     age: "",
//     address: "",
//     amount: "",
//     phoneNumber: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8080/postAuction", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         // Perform any actions upon successful submission
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle errors if any
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="S.NO"
//           name="SNO"
//           value={formData.SNO}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Age"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Amount"
//           name="amount"
//           value={formData.amount}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AuctionMember;

// import React from "react";
// import Navbar from "../navbar/navbar";
// import "./auctionMember.css";
// function AuctionMember(){
//   return(
//     <div>

//       <div className="navPage">
//         <Navbar/>
//       </div>

//       <div>
//         <button className="backBtn">Back</button>
//       </div>

//       <div className="auctionMemberHeaging">
//         <h1><u>*Chiti Member Data*</u></h1>
//       </div>

//       <form>
//         <div className="auctionMember auctionMemberMargin">
//           <div><h3>S.NO :</h3></div>
//             <div>
//               <input className="auctionMemberTags"type="number"/>
//             </div>
//             <div className="">
//               <button className="submitbtn" type="submit">SUBMIT</button>
//             </div>
//         </div>

//         <div className="auctionMember auctionMemberGap">
//           <div className="auctionMember">
//             <div><h3>NAME :</h3></div>
//             <div>
//               <input className="auctionMemberTags"type="text"/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div><h3>AGE :</h3></div>
//             <div>
//               <input className="auctionMemberTags"type="number"/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div><h3>AMOUNT :</h3></div>
//             <div>
//               <input className="auctionMemberTags"type="number"/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//             <div><h3>PHONE NUMBER :</h3></div>
//             <div>
//               <input className="auctionMemberTags"type="number"/>
//             </div>
//           </div>

//           <div className="auctionMember auctiongap">
//           <div><h3>ADDRESS :</h3></div>
//           <div>
//             <input className="auctionMemberTags"type="text"/>
//           </div>
//         </div>

//         </div>

//       </form>
      

//     </div>
//   )
// }
// export default AuctionMember;

import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./auctionMember.css";

function AuctionMember() {
  const[auctionMemberSno,setAuctionauctionMemberSno]=useState('');
  const[auctionMemberName,setAuctionauctionMemberName]=useState('');
  const[auctionMemberAge,setAuctionMemberAge]=useState('');
  const[auctionMemberAddress,setAuctionMemberAddress]=useState('');
  const[auctionMemberAmount,setAuctionMemberAmount]=useState('');
  const[auctionMemberPhoneNumber,setAuctionMemberPhoneNumber]=useState('');
  const [auctionMembertableData, setAuctionMemberTableData] = useState([]);
  const [auctionMembershowInputs,setAuctionMemberShowInputs] = useState(true);

  const auctionMmeberSubmit =(e)=>{
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
      setAuctionMemberTableData([...auctionMembertableData,auctionMemberData]);

      setAuctionauctionMemberSno('');
      setAuctionauctionMemberName('');
      setAuctionMemberAge('');
      setAuctionMemberAddress('');
      setAuctionMemberAmount('');
      setAuctionMemberPhoneNumber('');

    }
  };


  const auctionMemberDelete = (index) => {
    const newData = [...auctionMembertableData];
    newData.splice(index, 1);
    setAuctionMemberTableData(newData);
  };

  const auctionMemberEnd =()=>{
    setAuctionMemberShowInputs(false)
  }

  return (
    <div>
      <div className="navPage">
        <Navbar />
      </div>

      <div>
        <a href="/chitData"><button className="auctionActions auctionMemberBtn font">Back To chit data</button></a>
        <button className="auctionActions endButton font" onClick={auctionMemberEnd}>End</button>
      </div>

      <div className="auctionMemberHeading">
        <h1>
          <u>* Auction Chiti Member Data*</u>
        </h1>
      </div>

      {auctionMembershowInputs &&(
        <form onSubmit={auctionMmeberSubmit}>
        <div className="auctionMember auctionMemberMargin">
          <div>
            <h3>S.NO :</h3>
          </div>
          <div>
            <input className="auctionMemberTags"type="number" value={auctionMemberSno} onChange={(e)=>setAuctionauctionMemberSno(e.target.value)}/>
          </div>
          <div className="">
            <button className="submitbtn" type="submit">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="auctionMember auctionMemberGap">
          <div className="auctionMember">
            <div>
              <h3>NAME :</h3>
            </div>
            <div>
              <input className="auctionMemberTags"type="text" value={auctionMemberName} onChange={(e)=>setAuctionauctionMemberName(e.target.value)}/>
            </div>
          </div>

          <div className="auctionMember auctiongap">
            <div>
              <h3>AGE :</h3>
            </div>
            <div>
              <input className="auctionMemberTags"type="number" value={auctionMemberAge} onChange={(e)=>setAuctionMemberAge(e.target.value)}/>
            </div>
          </div>

          <div className="auctionMember auctiongap">
            <div>
              <h3>AMOUNT :</h3>
            </div>
            <div>
              <input className="auctionMemberTags"type="number" value={auctionMemberAmount} onChange={(e)=>setAuctionMemberAmount(e.target.value)}/>
            </div>
          </div>

          <div className="auctionMember auctiongap">
            <div>
              <h3>PHONE NUMBER :</h3>
            </div>
            <div>
              <input className="auctionMemberTags"type="number" value={auctionMemberPhoneNumber} onChange={(e)=>setAuctionMemberPhoneNumber(e.target.value)}/>
            </div>
          </div>

          <div className="auctionMember auctiongap">
            <div>
              <h3>ADDRESS :</h3>
            </div>
            <div>
              <input className="auctionMemberTags"type="text" value={auctionMemberAddress} onChange={(e)=>setAuctionMemberAddress(e.target.value)}/>
            </div>
          </div>
        </div>
      </form>

      )}
      
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
            <tr key={index}>
              <td className="auctionMemberData">{data.auctionMemberSno}</td>
              <td className="auctionMemberData">{data.auctionMemberName}</td>
              <td className="auctionMemberData">{data.auctionMemberAge}</td>
              <td className="auctionMemberData">{data.auctionMemberAmount}</td>
              <td className="auctionMemberData">{data.auctionMemberPhoneNumber}</td>
              <td className="auctionMemberData">{data.auctionMemberAddress}</td>
              <td className="auctionMemberData">
                <button  className="deleteButton" onClick={() => auctionMemberDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    </div>
  );
}

export default AuctionMember;
