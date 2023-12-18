import count from "../img/Group 189.svg";
import obi from "../img/peter obi 1.svg";
import obj from "../img/obasanjo 2 1.svg";
import bat from "../img/obasanjo 2 1.svg";
import atik from "../img/atiku 1.svg";
import { useNavigate } from "react-router-dom";

const Ongoing = () => {

    const navigate = useNavigate()

    return ( 
        <div className="ongoing-container">
            <div className="ongoing-wrapper">
                <div className="ongoing-head">
                    <img src={count} alt="" className="count-image" width="100%" />
                    <h5>Ongoing votes</h5>
                    <h6>40,320,261 votes</h6>
                    <p>Voting ends in 8 hours</p>
                </div>

                <div className="ongoing-new">
                    <div className="ongoing-contents">
                        <div className="obi-head">
                            <img src={obi} alt="" className="obi-image" width="100%" />
                            <div className="party">
                                <h5>Peter Obi</h5>
                                <p>Labour Party</p>
                            </div>
                        </div>
                        <div className="obi-vote">
                            <button className="obi-btn" onClick={() => {navigate("/peter")}}>Vote</button>
                        </div>
                    </div>

                    <div className="ongoing-contents">
                        <div className="obi-head">
                            <img src={obj} alt="" className="obi-image" width="100%" />
                            <div className="party">
                                <h5>Olusegun Obasanjo</h5>
                                <p>People Democractic Party</p>
                            </div>
                        </div>
                        <div className="obi-vote">
                            <button className="obi-btn"  onClick={() => {navigate("/olusegun")}}>Vote</button>
                        </div>
                    </div>

                    <div className="ongoing-contents">
                        <div className="obi-head">
                            <img src={bat} alt="" className="obi-image" width="100%" />
                            <div className="party">
                                <h5>Bola Ahmed Tinubu</h5>
                                <p>All Progressive Party</p>
                            </div>
                        </div>
                        <div className="obi-vote">
                            <button className="obi-btn" onClick={() => {navigate("/bola")}}>Vote</button>
                        </div>
                    </div>

                    <div className="ongoing-contents">
                        <div className="obi-head">
                            <img src={atik} alt="" className="obi-image" width="100%" />
                            <div className="party">
                                <h5>Atiku Abubakar</h5>
                                <p>People Democractic Party</p>
                            </div>
                        </div>
                        <div className="obi-vote">
                            <button className="obi-btn" onClick={() => {navigate("/atiku")}}>Vote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Ongoing;