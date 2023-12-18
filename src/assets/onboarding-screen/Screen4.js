import women from "../img/amico.svg";
import men from "../img/Group 68.svg";
import { useNavigate } from "react-router-dom";

const Screen4 = () => {

    const navigate = useNavigate()

    return ( 
        <div className="women-container">
               <div className="women-text"><h6>Skip</h6></div>
            <div className="women-img">
                <img src={women} alt="" className="women-image" width="100%" />
            </div>
            <div className="men-content">
                <h3>Stay Informed</h3>
                <p>Stay informed and get the latest news around you about your elections.</p>
                <img src={men} alt="" className="men-image" width="100%" />
            </div>
            <div className="men-btn">
                <button className="men-btn1"  onClick={() => {navigate("/create")}}>Create an Account</button>
                <button className="men1-btn1"  onClick={() => {navigate("/login")}}>Login</button>
            </div>
        </div>
     );
}
 
export default Screen4;