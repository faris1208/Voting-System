import woman from "../img/Group 71.svg";
import man from "../img/Group 67.svg";
import { useNavigate } from "react-router-dom";

const Screen3 = () => {

    const navigate = useNavigate()

    return ( 
        <div className="woman-container">
            <div className="woman-text"><h6>Skip</h6></div>
            <div className="woman-img">
                <img src={woman} alt="" className="woman-image" width="100%" />
            </div>
            <div className="man-content">
                <h3>Make Your Vote Count</h3>
                <p>Register and vote from anywhere around the world</p>
                <img src={man} alt="" className="man-image" width="100%" />
            </div>
            <div className="man-btn">
                <button className="man-btn1"  onClick={() => {navigate("/screen4")}}>Next</button>
            </div>
        </div>
     );
}
 
export default Screen3;