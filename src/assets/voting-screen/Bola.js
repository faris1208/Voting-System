import arrow from "../img/Group 23.svg";
import three from "../img/peter obi 1.svg";
import four from "../img/x.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Bola = () => {

    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive((open) => !open)
    }

    const navigate = useNavigate()

    return ( 
        <div className="peter-container">
            <div className="peter-wrapper">
                <div className="peter-head">
                    <img src={arrow} alt="" className="arrow-image" width="100%" onClick={() => {navigate("/ongoing")}} />
                    <h4>Bola Ahmed Tinubu</h4>
                </div>
                <div className="peter-obi-head">
                    <img src={three} alt="" className="peter-obi-image" width="100%" />
                </div>
                <div className="graphy">
                    <h5>Bola Ahmed Tinubu</h5>
                    <p>All Progressive Party</p>
                </div>
                <div className="Biography">
                    <h5>Biography</h5>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit tincidunt neque
                         fringilla odio leo ac. Gravida iaculis amet lorem ac a volutpat
                          amet urna. Felis duis ultricies tortor amet ultrices bibendum est
                           volutpat. Eget orci porta est sollicitudin blandit. Tortor mauris
                            lorem interdum odio elementum praesent condimentum dictum a. Pretium
                             quam nec malesuada cursus volutpat mattis. Feugiat arcu ut euismod auctor
                              senectus facilisis.
                    </p>
                </div>
                <div className="bio-head">
                    <button className="boi-btn" onClick={toggleMenu}>Cast Vote</button>
                </div>

                <div className={`warning ${active ? "is-open" : ""}`}>
                    <div className="cancel">
                        <img src={four} alt="" className="cancel-image" width="100%"  onClick={() => {navigate("/ongoing")}} />
                    </div>
                    <h5>Warning!!!</h5>
                    <p>Are you sure you want to vote for this candidates? Once confirmed this action cannot be reversed.....</p>
                    <div className="confirm">
                        <button className="confirm-btn" onClick={() => {navigate("/votes")}}>Confirm </button>
                        <button className="cancel-btn" onClick={() => {navigate("/ongoing")}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Bola;