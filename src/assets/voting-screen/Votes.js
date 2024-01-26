// import verified from "../img/Group 42.svg";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Votes = () => {

    const navigate = useNavigate()

    return ( 
        
        <div className="success-container">
            <div className="success-wrapper">
                <div className="verified-box">
                    {/* <h2>Elect.NG</h2> */}
                    {/* <img src={verified} alt="" className="verified-image" width="100%" /> */}
                    <MdVerified className="verified-image" />
                </div>
                <div className="verification-successful">
                    <h1>Vote Successful</h1>
                    <p>Your vote has been successfully submitted</p>
                </div>
                <div className="go-home">
                    <button className="go-home-btn" onClick={() => {navigate("/")}}>Done</button>
                    <button className="check-btn" onClick={() => {navigate("/")}}>Check Live Stat</button>
                </div>
            </div>
        </div>
     );
}
 
export default Votes;