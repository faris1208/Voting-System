import arro from "../img/Group 23.svg";
import mag from "../img/MagnifyingGlass (1).svg";
import linet from "../img/Line 3.svg";
import lineo from "../img/Line 3 (1).svg";
import election from "../img/election 1.svg";
import pet from "../img/peter obi 1.svg";
import chartline from "../img/clock.svg";
import chart from "../img/ChartLine.svg";
import { useNavigate } from "react-router-dom";

const Participated = () => {

    const navigate = useNavigate()

    return ( 
        <div className="Participated-container">
             <div className="Participated-head">
                    <img src={arro} alt="" className="arro-image" width="100%" />
                    <p>Nigeria 2023</p>
                </div>
                <div className="New-input-head">
                    <img src={mag} alt="" className="mag-image" width="100%" />
                    <input type="text" placeholder="Search" className="New-input" />
                </div>
                <div className="going">
                    <h5>Ongoing</h5>
                    <p>Participated </p>
                </div>

                <div className="greenline">
                    <img src={linet} alt="" className="linet-image" width="100%" />
                    <img src={lineo} alt="" className="lineo-image" width="100%" />
                </div>

                <div className="Election-Container">
                    <div className="Election-Wrapper">
                        <img src={election} alt="" className="election-image" width="100%" />
                        <div className="twenty">
                            <h5>Presidential Election 2023</h5>
                            <h5>Candidates: 4</h5>
                        </div>
                        <div className="election-peter-head">
                            <div className="election-peter">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter1">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter2">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter3">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                        </div>

                        <div className="Chartline-header">
                            <div className="Chartline-head">
                                <div>
                                    <div className="Chartline-contents">
                                        <img src={chartline} alt="" className="chartline-image" width="100%" />
                                        <p>Voting ends in 8 hours</p>
                                    </div>
                                    <div className="Chartline-contents">
                                        <img src={chart} alt="" className="chartline-image" width="100%" />
                                        <p>40,320,261 votes</p>
                                    </div>
                                </div>
                                <div className="Last-vote">
                                    <button className="Vote-Btn" onClick={() => {navigate("/ongoing")}}>Vote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="Election-Container">
                    <div className="Election-Wrapper">
                        <img src={election} alt="" className="election-image" width="100%" />
                        <div className="twenty">
                            <h5>Presidential Election 2023</h5>
                            <h5>Candidates: 4</h5>
                        </div>
                        <div className="election-peter-head">
                            <div className="election-peter">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter1">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter2">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                            <div className="election-peter3">
                                <img src={pet} alt="" className="pet-image" width="100%" />
                            </div>
                        </div>

                        <div className="Chartline-header">
                            <div className="Chartline-head">
                                <div>
                                    <div className="Chartline-contents">
                                        <img src={chartline} alt="" className="chartline-image" width="100%" />
                                        <p>Voting ends in 8 hours</p>
                                    </div>
                                    <div className="Chartline-contents">
                                        <img src={chart} alt="" className="chartline-image" width="100%" />
                                        <p>40,320,261 votes</p>
                                    </div>
                                </div>
                                <div className="Last-vote">
                                    <button className="Vote-Btn2">Voted</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Participated;