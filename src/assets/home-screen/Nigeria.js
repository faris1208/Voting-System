import peter from "../img/peter obi 1.svg";
import labour from "../img/LP 1.svg";
import { useNavigate } from "react-router-dom";

const Nigeria = () => {

    const navigate = useNavigate()

    return ( 
        <div className="nigeria-container">
            <div className="nigeria-wrapper">
                <div className="nigeria-text">
                    <h4>Nigeria 2023</h4>
                    <h5>Presidential Election 2023</h5>
                </div>
                <div className="presidential">
                    <div className="presidential-container">
                        <div className="presidential-wrapper">
                            <img src={peter} alt="" className="peter-image" width="100%" />
                            <div className="peter-obi">
                                <h4>Peter Obi</h4>
                                <p>Labour Party (LP)</p>
                            </div>
                        </div>
                        <div className="labour">
                            <img src={labour} alt="" className="labour-image" width="100%" />
                        </div>
                    </div>

                    <div className="presidential-container">
                        <div className="presidential-wrapper">
                            <img src={peter} alt="" className="peter-image" width="100%" />
                            <div className="peter-obi">
                                <h4>Olusegun Obasanjo</h4>
                                <p>People Democractic Party</p>
                            </div>
                        </div>
                        <div className="labour">
                            <img src={labour} alt="" className="labour-image" width="100%" />
                        </div>
                    </div>

                    <div className="presidential-container">
                        <div className="presidential-wrapper">
                            <img src={peter} alt="" className="peter-image" width="100%" />
                            <div className="peter-obi">
                                <h4>Bola Ahmed Tinubu</h4>
                                <p>All Progressive Party</p>
                            </div>
                        </div>
                        <div className="labour">
                            <img src={labour} alt="" className="labour-image" width="100%" />
                        </div>
                    </div>

                    <div className="presidential-container">
                        <div className="presidential-wrapper">
                            <img src={peter} alt="" className="peter-image" width="100%" />
                            <div className="peter-obi">
                                <h4>Atiku Abubakar</h4>
                                <p>People Democractic Party</p>
                            </div>
                        </div>
                        <div className="labour">
                            <img src={labour} alt="" className="labour-image" width="100%" />
                        </div>
                    </div>
                </div>

                <div className="presidential-text">
                    <button className="presidential-btn"  onClick={() => {navigate("/ongoing")}}>Join A Vote</button>
                </div>
            </div>
        </div>
     );
}
 
export default Nigeria;