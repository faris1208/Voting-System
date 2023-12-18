import rect from "../img/Rectangle 12.svg";
import eye from "../img/EyeSlash.svg";
import { useNavigate } from "react-router-dom";

const Sign = () => {

    const navigate = useNavigate()

    return ( 
        <div className="login-container">
            <div  className="login-wrapper">
                <div className="ng-text">
                    <h2>Elect.NG</h2>
                </div>
                <div className="welcome-text">
                    <h4>Welcome</h4>
                    <h3>Welcome Back !</h3>
                    <p>Welcome to <span className="ect">Elect.NG</span> Online Voting Platform</p>
                </div>
                <div className="eye-container">
                    {/* <input type="text" placeholder="Phone Number" className="eye-input" /> */}
                    <input type="text" placeholder="Admin ID No" className="eye-input" />
                    <input type="password" placeholder="Password" className="eye-input" />
                    <img src={eye} alt="" width="100%" className="eyelashes" />
                </div>
                <div className="password">
                    <div className="password-img">
                        <img src={rect} alt="" width="100%" className="rect-image" />
                        <a href="/">Remember Password</a>
                    </div>
                    <div className="forgot-password">
                        <a href="/">Forgot Password?</a>
                    </div>
                </div>
                <div className="login-box">
                    <button className="login-btn">Log In</button>
                    <a href="/login">Sign in with Number</a>
                </div>
                <div className="account-text">
                    <p>Don’t have an account? <span className="account" onClick={() => {navigate("/create")}}>Create Account</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Sign;