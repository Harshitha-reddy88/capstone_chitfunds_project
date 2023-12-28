import React from "react";
import "./ChitiPage.css";
import Navbar from "../navbar/navbar";
function ChitiPage(){
    return(
        <div>
            <div className="navPage">
                <Navbar />
            </div>

            <div className="howChiti howTopGap">

                    <div>
                        <div className="howMargin">
                            <h1 className="howHeading">How The Chit Work</h1>
                        </div>

                        <div className="howChiti howMargin">
                            <div>
                                <img className="howSmallImg" src="https://kapilchits.com/img/chitvalue-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Chit value</h2>
                                <h4 className="howSmallText">There is a new chit group that is commencing. The value of <br></br>
                                the chit is 500,000. This amount is known as the Chit Value.</h4>
                            </div>
                        </div>

                        <div className="howChiti howMargin">
                            <div>
                                <img className="howSmallImg"src="https://kapilchits.com/img/timeperiod-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Chit period</h2>
                                <h4 className="howSmallText">For the purpose of this illustration, we will consider the<br></br>
                                duration of the chit to be 50 months. This is known as term<br></br>
                                period for the chit group.
                                </h4>
                            </div>
                        </div>

                        <div className="howChiti howMargin">
                            <div>
                                <img className="howSmallImg"src="https://kapilchits.com/img/subscribers-icon.png" alt="error"/>
                            </div>
                            <div className="howText">
                                <h2 className="howHeading">Subscribers</h2>
                                <h4 className="howSmallText">The Foreman or Chit Fund Company has to gather 50 people <br></br>
                                who are interested in investing in this chit group. These 50<br></br>
                                persons are called Subscribers.
                                </h4>
                            </div>
                        </div>
                        

                    </div>


                    <div className="rupeeDiv">
                        <img className="rupeeImg"src="https://kapilchits.com/img/rupee-works.png" alt="error"/>
                    </div>
            </div>

            <div className="formanMainDiv">
                <div className="formanDiv">
                    <div>
                        <img className="formanImg" src="https://kapilchits.com/img/foreman.png" alt="error"/>
                    </div>
                    <div className="formanText">
                        <h1 className="chitiPageHeding formanHeading">Foreman responsibility</h1>
                        <h3 className="subHeading">Once the chit group commences</h3>
                        <p className="formanPara">&#10524; The foreman has to register the chit with the registrar of chits.</p>
                        <p className="formanPara">&#10524; The foreman has to pay 100% of the chit value as security.</p>
                        <p className="formanPara">&#10524; This amount can be withdrawn only after the said chit group closes and every</p>
                        <p className="forMan">subscriber is paid what is due to him or her.</p>
                        <p className="formanPara">&#10524; This regulation protects the interests of the subscriber to a certain extent.</p>
                    </div>
                </div>
            </div>
            

            <div className="monthsMainDiv">
                <div className="formanDiv">
                    <div className="formanText">
                        <h1 className="chitiPageHeding formanHeading">Monthly subscriptions</h1>
                        <h3 className="subHeading">Once the chit group commences</h3>
                        <p className="formanPara">&#10524; The amount to be saved every month by the Subscriber is Chit value/No of</p>
                        <p className="forMan">person’s i.e. 500,000/50 = 10,000.</p>
                        <p className="formanPara">&#10524; This is also known as Monthly Subscription. It may be noted here that the </p>
                        <p className="forMan">number of persons investing in a chit and the duration</p>
                        <p className="formanPara">&#10524; The maximum monthly contribution or Subscription Amount that a Subscriber</p>
                        <p className="forMan">will pay is 10,000.</p>
                        <p className="formanPara">&#10524; The Subscriber does not always pay the entire Subscription amount every month.</p>
                    </div>
                    <div>
                        <img className="formanImg monthsImg" src="https://kapilchits.com/img/monthly-subscriptions.png" alt="error"/>
                    </div>
                    
                </div>
            </div>

            <div className="formanMainDiv lastThird">
                <div className="formanDiv">
                    <div>
                        <img className="formanImg discountImg" src="https://kapilchits.com/img/chit-discount.png" alt="error"/>
                    </div>
                    <div className="discountDiv">
                        <h1 className="chitiPageHeding">Chit Discounts</h1>
                        <p className="discountText">The Subscriber does not always pay the entire Subscription amount every month.<br></br>
                        Let us find out how and why he does not have to pay the entire amount.
                        </p>

                        <p className="discountText">The maximum discount or maximum bid permitted ranges from 30-40%. For the <br></br>
                        purpose of this illustration we will assume that a Subscriber has bid 35% of the <br></br>
                        chit value. 35% of 500,000 is 175,000. This amount is known as Chit Discount.
                        </p>
                        
                    </div>
                </div>
            </div>

            <div className="monthsMainDiv">
                <div className="formanDiv">
                    <div className="formanText">
                        <h1 className="chitiPageHeding formanHeading">Chit Discount example</h1>
                        <p className="discountText">The foreman charges 5% of chit value as commission. In this illustration,that would<br></br>
                        amount to 25,000. This is deducted from Chit Discount i.e.175,000-25000=150,000. <br></br>
                        This amount is available for equal distribution among the subscribers.
                        </p>
                        <p className="discountText">In our example, 150,000 would be divided equally among 50 subscribers.Each subscriber<br></br>
                        would geta discount of 150,000/50 = 3000. This amount is known as Dividend.</p>

                        <p className="discountText">In the following month, all subscribers would have to only pay 7,000 instead of 10,000.<br></br>
                        This is because they have earned a chit discount of 3000.</p>
                    </div>
                    <div>
                        <img className="formanImg monthsImg" src="https://kapilchits.com/img/chit-discount-example.png" alt="error"/>
                    </div>
                    
                </div>
            </div>

            <div className="formanMainDiv monthsMainDiv">
                <div className="formanDiv">
                    <div>
                        <img className="formanImg monthsImg" src="https://kapilchits.com/img/conclusion.png" alt="error"/>
                    </div>
                    <div className="formanText">
                        <h1 className="chitiPageHeding formanHeading">Conclusion</h1>
                        <p className="discountText">The Subscriber does not always pay the entire Subscription amount every month. Let us<br></br>
                        find out how and why he does not have to pay the entire amount.
                        </p>
                        <p className="discountText">The maximum discount or maximum bid permitted ranges from 30-40%. For the purpose<br></br>
                        of this llustration we will assume that a Subscriber has bid 35% of the chit value.<br></br>
                        35% of 500,000 is 175,000. This amount is known as Chit Discount.<br></br>
                        </p>

                        
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default ChitiPage;