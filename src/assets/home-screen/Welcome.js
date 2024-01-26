import { useNavigate } from "react-router-dom";
import magnify from "../img/MagnifyingGlass (1).svg";
import dot from "../img/Group 100.svg";
import jay from "../img/J.svg";

const Welcome = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="welcome-container">
            <div className="welcome-wrapper">
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
                
                <div className="welcome-contents">
                    <h1>Welcome! </h1>
                    <p>Welcome to <span className="p-span">ELECT.NG</span> Online Voting System Your account has been created successfully Let’s Get Started</p>
                </div>
                <div className="join-poll">
                    <button className="btn-poll" onClick={() => {navigate("/poll")}}>Create A Poll</button>
                    <button className="btn-join" onClick={() => {navigate("/recent")}}>Join A Vote</button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Welcome;