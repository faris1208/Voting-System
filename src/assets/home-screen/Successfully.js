// import verified from "../img/Group 42.svg";
import { useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Successfully = () => {

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
                    <h1>Poll Created Successfully</h1>
                </div>
                <div className="go-home">
                    <button className="go-home-btn" onClick={() => {navigate("/welcome")}}>Done</button>
                </div>
            </div>
        </div>
     );
}
 
export default Successfully;