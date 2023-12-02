import React, { useEffect, useState } from "react";
import "./doubleChiti.css";
import Navbar from "../navbar/navbar";
import axios from "axios";

function DoubleChiti() 
{
    const [doubleDataid, setDoubleDataid] = useState('');
    const [doubleDataChitValue, setDoubleDataChitValue] = useState('');
    const [doubleDataMonths, setDoubleDataMonths] = useState('');
    const [doubleDataSubscription, setDoubleDataSubscription] = useState('');
    //const [doubleTableData, setDoubleTableData] = useState([]);
    const [doubleChitshowInputs,setDoubleChitShowInputs] = useState(true);

    const localStorageKey="doubleChitiData";
    const [doubleTableData, setDoubleTableData] = useState(()=>{
        const storedData=localStorage.getItem(localStorageKey);
        return storedData ? JSON.parse(storedData):[];
    });
    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(doubleTableData))
    },[doubleTableData]);

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(
            doubleDataid==="" || doubleDataid===" " || 
            doubleDataChitValue==="" || doubleDataChitValue===" " || 
            doubleDataMonths==="" || doubleDataMonths===" " || 
            doubleDataSubscription==="" || doubleDataSubscription===" "){
            alert("enter the data")
        }
        else{

            const newData = 
        {
            doubleDataid,
            doubleDataChitValue,
            doubleDataMonths,
            doubleDataSubscription,
        };
        try{
            const response= await axios.post("http://localhost:8080/DoubleData",newData);
            console.log("Data posted",response.data);

            setDoubleTableData([...doubleTableData, newData]);
            setDoubleDataid('');
            setDoubleDataChitValue('');
            setDoubleDataMonths('');
            setDoubleDataSubscription('');
        }
        catch(error){
            console.error("Error posting data",error);
        }

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
                    <input className="doubleTags"type="number"value={doubleDataid}onChange={(e) => setDoubleDataid(e.target.value)}/>
                </div>
                <div>
                    <button className="pageSubmitbtn"  type="submit">SUBMIT</button>
                </div>
            </div>
        

        <div className="doubleInputs inputDiv">
            <div className="doubleInputs">
                <div><h3>CHIT VALUE :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doubleDataChitValue}onChange={(e) => setDoubleDataChitValue(e.target.value)}/>
            </div>
        </div>

        <div className="doubleInputs inputGap">
            <div><h3>NUMBER OF MONTHS :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doubleDataMonths}onChange={(e) => setDoubleDataMonths(e.target.value)}/>
            </div>
        </div>

        <div className="doubleInputs inputGap">
            <div><h3>MONTHLY SUBSCRIPTION :</h3></div>
            <div>
                <input className="doubleTags"type="number"value={doubleDataSubscription}onChange={(e) => setDoubleDataSubscription(e.target.value)}/>
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
              <td className="doubleTableData">{data.doubleDataid}</td>
              <td className="doubleTableData">{data.doubleDataChitValue}</td>
              <td className="doubleTableData">{data.doubleDataMonths}</td>
              <td className="doubleTableData">{data.doubleDataSubscription}</td>
              <td className="doubleTableData trashTd">\
                <img className="trashImg" onClick={() => handleDelete(index)}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1zGS43FzKj0PaG7kKvf5GsH0YrbX_LKvow&usqp=CAU" alt="error"/>
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

