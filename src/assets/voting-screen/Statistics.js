import Pres from "../img/Group 23.svg";
import fifty from "../img/Group 47.svg";
import blue from "../img/Line 6.svg";
import red from "../img/Line 6 (1).svg";
import brown from "../img/Line 7.svg";
import green from "../img/Line 8 (1).svg";
import { useNavigate } from "react-router-dom";

const Statistics = () => {

    const navigate = useNavigate()

    return ( 
        <div className="Statistics-container">
             <div className="Statistics-head">
                <img src={Pres} alt="" className="Pres-arrow-image" width="100%" onClick={() => {navigate("/presidential")}}/>
                <p>Presidential</p>
            </div>

            <div className="fifty">
                <img src={fifty} alt="" className="fifty-arrow-image" width="100%"/>
                <p>50,320,261 </p>
            </div>

            <div className="CANDIDATES">
                <p>CANDIDATES</p>
                <p>VOTES</p>
            </div>

            <div className="sive">
                <div className="Progressive">
                    <div className="Progressive-head">
                        <h5 onClick={() => {navigate("/ended")}}>Bola Ahmed Tinubu</h5>
                        <p>All Progressive Party</p>
                    </div>
                    <div className="eight">
                        <p>8,564,690</p>
                        <img src={blue} alt="" className="blue-arrow-image" width="100%"/>
                    </div>
                </div>

                <div className="Progressive">
                    <div className="Progressive-head">
                        <h5 onClick={() => {navigate("/ended")}}>Peter Obi</h5>
                        <p>Labour Party (LP)</p>
                    </div>
                    <div className="eight">
                        <p>764,123</p>
                        <img src={red} alt="" className="red-arrow-image" width="100%"/>
                    </div>
                </div>

                <div className="Progressive">
                    <div className="Progressive-head">
                        <h5 onClick={() => {navigate("/ended")}}>Atiku Abubakar</h5>
                        <p>People Democractic Party</p>
                    </div>
                    <div className="eight">
                        <p>445,840</p>
                        <img src={brown} alt="" className="brown-arrow-image" width="100%"/>
                    </div>
                </div>

                <div className="Progressive">
                    <div className="Progressive-head">
                        <h5 onClick={() => {navigate("/ended")}}>Olusegun Obasanjo</h5>
                        <p>People Democractic Party</p>
                    </div>
                    <div className="eight">
                        <p>334,467</p>
                        <img src={green} alt="" className="green-arrow-image" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Statistics;