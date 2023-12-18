import voters from "../img/Group 2.svg";
import seventy from "../img/Group 69.svg";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {

    const navigate = useNavigate()

    return ( 
        <div className="voters-container">
            <div className="voter-text"><h6>Skip</h6></div>
            <div className="voters-img">
                <img src={voters} alt="" className="voters-image" width="100%" />
            </div>
            <div className="voters-content">
                <h3>Cast Your Vote</h3>
                <p>Exercise your voting right, let your voice be heard with the right vote</p>
                <img src={seventy} alt="" className="seventy-image" width="100%" />
            </div>
            <div className="next-btn">
                <button className="next-btn1"  onClick={() => {navigate("/screen3")}}>Next</button>
            </div>
        </div>
     );
}
 
export default Screen2;