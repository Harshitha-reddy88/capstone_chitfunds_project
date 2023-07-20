import React from 'react';
import './bankdetails.css';
import { bankData } from '../constant/bankdetailsConst';
function BankDetails(){
    return(
        <div>

            <div>
                
                <div className='formDiv'>
                <div className='formName'>Bank Information Form</div>

                <div className='bankName BankDetails'>
                    <div>
                        <p className='details fontSize'>{bankData[0]}</p>
                        <input  className="dataInputs" type="text"/>
                    </div>
                    
                    <div>
                        <p className='dataInputTags details fontSize'>{bankData[1]}</p>
                        <input className="dataInputs dataInputTags" type="number"/>
                    </div>
                </div>

                <div className='BankDetails'>

                    <div>
                        <p className='topInputs details fontSize'>{bankData[2]}</p>
                        <input className="dataInputs" type="text"/>
                    </div>
                    
                    <div>
                        <p className='dataInputTags topInputs details fontSize'>{bankData[3]}</p>
                        <input className="dataInputs dataInputTags" type="text"/>
                    </div>
                </div>

                <div className='BankDetails'>
                   <div>
                      <p className='topInputs details fontSize'>{bankData[4]}</p>
                      <input className="dataInputs" type="number"/>
                   </div>

                   <div>
                      <p className='topInputs details dataInputTags fontSize'>{bankData[5]}</p>
                      <input className="dataInputs dataInputTags" type="number"/>
                   </div>
                </div>

                <div>
                    <p className='branchInputs details fontSize'>{bankData[5]}</p>
                    <div>
                        <input className="dataInputs branch" type="text" placeholder='Street Address'/>
                    </div>


                    <div className='BankDetails'>
                        <div>
                            <input className=" branchaddress topInput" type="text" placeholder='City'/>
                        </div>
                        <div>
                            <input className=" branchaddress dataInputTags topInput" type="text" placeholder='Region'/>
                        </div>
                    </div>

                    <div className='AccountDiv'>
                        <div className='fontSize'>Account Type</div>
                        <div className="accountInputs">
                            <div>
                               <input  type="radio"/>
                               <label>Savings</label>
                            </div>
                            <div>
                               <input className="radioButton" type="radio"/>
                               <label>Checking</label>
                            </div>
                            <div>
                               <input className="radioButton"type="radio" width="40px"/>
                               <label className='label'>Others</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sendBankDetails'>
                    <div>
                        <button className='sendButton'>SEND</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
    
}
export default BankDetails;