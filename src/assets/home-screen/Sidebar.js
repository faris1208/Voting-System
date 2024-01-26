import dash from "../img/sidebar/home (1).svg";
import Vot from "../img/sidebar/Vector (1).svg";
import Stat from "../img/sidebar/ChartPieSlice.svg";
import Prof from "../img/sidebar/user (2).svg";
import out from "../img/Vector (3).svg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {

    const navigate = useNavigate()

    return ( 
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <div className="general">
                    <h3>Elect.NG</h3>
                </div>
                <div className="Prof">
                    <div className="Stat">
                        <img src={dash} alt="" className="dash-image" width="100%" />
                        <h4 onClick={() => {navigate("/recent")}}>Dashboard</h4>
                    </div>

                    <div className="Stat">
                        <img src={Vot} alt="" className="dash-image" width="100%" />
                        <h4 onClick={() => {navigate("/participated")}}>Votes</h4>
                    </div>

                    <div className="Stat">
                        <img src={Stat} alt="" className="dash-image" width="100%" />
                        <h4 onClick={() => {navigate("/presidential")}}>Statitics</h4>
                    </div>

                    <div className="Stat">
                        <img src={Prof} alt="" className="dash-image" width="100%" />
                        <h4 onClick={() => {navigate("/settings")}}>Profile Setting</h4>
                    </div>

                    <div className="out">
                        <img src={out} alt="" className="out-image" width="100%" />
                        <h5  onClick={() => {navigate("/login")}}>Log out</h5>
                    </div>
                </div>

             

            </div>
            
                <div className="new-child">{children}</div>
        </div>
     );
}
 
export default Sidebar;