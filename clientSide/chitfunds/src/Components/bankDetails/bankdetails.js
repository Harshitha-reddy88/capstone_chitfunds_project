import React from 'react';
import './bankdetails.css';
function BankDetails(){
    return(
        <div>
            <div className='formDiv'>
                <div className='formName'>Bank Information Form</div>

                <div className='bankName BankDetails'>

                    <div>
                        <div className='details fontSize'>Bank Name</div>
                        <input  className="dataInputs" type="text"/>
                    </div>
                    
                    <div>
                        <div className='dataInputTags details fontSize'>Contact Details</div>
                        <input className="dataInputs dataInputTags" type="number"/>
                    </div>
                </div>

                <div className='BankDetails'>

                    <div>
                        <div className='topInputs details fontSize'>User First Name</div>
                        <input className="dataInputs" type="text"/>
                    </div>
                    
                    <div>
                        <div className="dataInputTags topInputs details fontSize">User Last Name</div>
                        <input className="dataInputs dataInputTags" type="text"/>
                    </div>
                </div>

                <div className='BankDetails'>
                   <div>
                      <div className='topInputs details fontSize'>Branch Name</div>
                      <input className="dataInputs" type="number"/>
                   </div>

                   <div>
                      <div className='topInputs details dataInputTags fontSize'>Branch Number</div>
                      <input className="dataInputs dataInputTags" type="number"/>
                   </div>
                </div>

                <div>
                    <div className='branchInputs details fontSize'>Branch Address</div>
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
    );
    
}
export default BankDetails;