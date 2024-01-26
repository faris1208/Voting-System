import magnify from "../img/MagnifyingGlass (1).svg";
import dot from "../img/Group 100.svg";
import jay from "../img/J.svg";
import dit from "../img/Vector (2).svg";
import account from "../img/Account.svg";
import secure from "../img/Secure.svg";
import globe from "../img/Globe.svg";
import bell from "../img/Bell (1).svg";
import fourty from "../img/Group 148.svg";
import conditions from "../img/Terms and Conditions.svg";
import fourties from "../img/Group 141.svg";

const Settings = () => {

    return ( 
        <div className="Settings-container">
              <div className="welcome-input-head">
                    <div className="magnify">
                        <img src={magnify} alt="" className="magnify-image" width="100%" />
                        <input type="text" placeholder="Search" className="magnify-input" />
                    </div>
                    <div className="dot-jay">
                        <img src={dot} alt="" className="dot-image" width="100%" />
                        <div className="jay-head">
                            <img src={jay} alt="" className="jay-image" width="100%" />
                        </div>
                    </div>
                </div>

                <div className="vector-contents">
                    <div className="vector-head">
                        <img src={jay} alt="" className="jay2-image" width="100%" />
                    </div>
                    <div className="Vector-james">
                        <p>Uzor James</p>
                        <div className="Vector-edit">
                            <p>Edit profile</p>
                            <img src={dit} alt="" className="Vector-image" width="100%" />
                        </div>
                    </div>
                </div>

                <div className="Terms-container">
                    <div className="Terms-wrapper">
                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={account} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header">
                                <h5>Personal details</h5>
                                <p>Verification complete</p>
                            </div>
                        </div>

                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={secure} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header">
                                <h5>Change Password</h5>
                            </div>
                        </div>

                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={globe} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header">
                                <h5>Language</h5>
                            </div>
                        </div>

                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={bell} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header2">
                                <h5>Notification</h5>
                                <img src={fourties} alt="" className="fourties-image" width="100%" />
                            </div>
                        </div>

                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={fourty} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header">
                                <h5>Get Help</h5>
                            </div>
                        </div>

                        <div className="Terms-contents">
                            <div className="Terms-head">
                                <img src={conditions} alt="" className="account-image" width="100%" />
                            </div>
                            <div className="Terms-header">
                                <h5>Terms & Conditions</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Settings;