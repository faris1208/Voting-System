import ellipse1 from "../img/Ellipse 1.svg";
import ellipse2 from "../img/Ellipse 1 (1).svg";
import ellipse12 from "../img/Ellipse 1 (2).svg";
import ellipse4 from "../img/Ellipse 2.svg";
import Box1 from "../img/BALLOT 1.svg";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {

    const navigate = useNavigate()

    return ( 
        <div className="ellipse1-container">
            <div className="ellipse1-wrapper">
                <div className="home-container">
                    <div className="home-elect">
                        <h2>Elect.NG</h2>
                    </div>
                    <div className="home-list">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>FAQS</li>
                        </ul>
                    </div>
                    <div className="home-login">
                        <button className="btn3">Login</button>
                        <button className="btn4">Register</button>
                    </div>
                </div>
                <div className="ellipse1-img">
                    <img src={ellipse1} alt="" className="ellipse1-image" width="100%" />
                    <img src={ellipse12} alt="" className="ellipse12-image" width="100%" />
                </div>
                <div className="elect-ng">
                    <h6>Welcome to</h6>
                    <h2>Elect.NG</h2>
                    <p>An online voting app</p>
                </div>
                <div className="Box1-img">
                    <img src={Box1} alt="" className="Box1-image" width="100%" />
                </div>
                {/* <div className="button1">
                    <button className="btn1">Register as a voter</button>
                    <button className="btn2">Register as an admin</button>
                </div> */}
                <div className="solution">
                    <div className="ellipse2-img">
                        <img src={ellipse2} alt="" className="ellipse2-image" width="100%" />
                        <img src={ellipse4} alt="" className="ellipse4-image" width="100%" />
                    </div>
                    <div className="button1">
                        <button className="btn1" onClick={() => {navigate("/screen2")}}>Register as a voter</button>
                        <button className="btn2">Register as an admin</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Screen1;