import React from "react";
import "./footer.css"
function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="footerText">
                    <div className="footerLine footerAuction"></div>
                    <div>
                        <div><h3 className="footerHeading">Auction Chiti</h3></div>
                        <div className="footerPara">
                            <h4>&#10524; Registration</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Bidding</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Monthly Contribution</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Chit Closed</h4>
                        </div>
                    </div>

                    <div className="footerLine footerDouble"></div>
                    <div>
                        <div><h3 className="footerHeading">Agent Chiti</h3></div>
                        <div className="footerPara">
                            <h4>&#10524; Registration</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Managing</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Distribution</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Data Entry</h4>
                        </div>
                    </div>


                    <div className="footerLine footerDouble"></div>
                    <div>
                        <div><h3 className="footerHeading">Double Chiti</h3></div>
                        <div className="footerPara">
                            <h4>&#10524; Form group</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Chiti Agrement</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Contribution</h4>
                        </div>
                        <div className="footerPara">
                            <h4>&#10524; Incoming</h4>
                        </div>
                    </div>
                </div>
                <div className="imagesFooter">
                    <div>
                        <img className="footerImg" src="../resourses/twitter.jpg" alt="error"/>
                    </div>
                    <div>
                        <img className="instaImg" src="../resourses/insta.jpg" alt="error"/>
                    </div>
                    <div>
                        <img className="instaImg" src="../resourses/facebook.jpg" alt="error"/>
                    </div>
                    <div>
                        <img className="instaImg" src="../resourses/google.jpg" alt="error"/>
                    </div>
                    <div>
                        <img className="instaImg" src="../resourses/mail.jpg" alt="error"/>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}
export default Footer;