import eighteen from "../img/Group 118.svg";
import { useNavigate } from "react-router-dom";

const Done = () => {

    const navigate = useNavigate()


    return ( 
        <div className="Done-container">
            <div className="Done-wrapper">
                <img src={eighteen} alt="" className="eighteen-image" width="100%" />
            </div>
            <div className="submitted">
                <h2>Vote Successful</h2>
                <p>Your vote has been successfully submitted</p>
            </div>
            <div className="Done-btn">
                <button className="Done-real" onClick={() => {navigate("/presidential")}}>Done</button>
                <button className="Live-real"onClick={() => {navigate("/presidential")}}>Check live Stat</button>
            </div>
        </div>
     );
}
 
export default Done;