import arrow from "../img/Group 23.svg";
import ten from "../img/Rectangle 10.svg";
import { useNavigate } from "react-router-dom";

const Presidential = () => {

    const navigate = useNavigate()
    return ( 
        <div className="Presidential-container">
            <div className="Presidential-head">
                <img src={arrow} alt="" className="new-arrow-image" width="100%" onClick={() => {navigate("/peter")}}/>
                <p>Nigeria 2023 Statistics</p>
            </div>

            <div className="Senetorial-head">
                <div className="Senetorial">
                    <img src={ten} alt="" className="ten-arrow-image" width="100%"/>
                    <p onClick={() => {navigate("/statistics")}} >Presidential</p>
                </div>

                <div className="Senetorial">
                    <img src={ten} alt="" className="ten-arrow-image" width="100%"/>
                    <p>Senetorial</p>
                </div>

                <div className="Senetorial">
                    <img src={ten} alt="" className="ten-arrow-image" width="100%"/>
                    <p>Govenorship</p>
                </div>

                <div className="Senetorial">
                    <img src={ten} alt="" className="ten-arrow-image" width="100%"/>
                    <p>House of Representataive</p>
                </div>
            </div>
        </div>
     );
}
 
export default Presidential;