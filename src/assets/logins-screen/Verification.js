import { useNavigate } from "react-router-dom";

const Verification = () => {

    const navigate = useNavigate()

    return ( 
        <div className="verification-container">
            <div className="verification-wrapper">
            <div className="new-elect">
                    <h2>Elect.NG</h2>
                    <h6>Phone Number Verification</h6>
                    <p>We’ve sent a 6- digit OTP code to 09139*****1 Please input the code here to verify your phone number.</p>
                </div>
                <div className="otp-contents">
                    <input type="text" placeholder="" className="otp-input" />
                    <p>OTP expires in <span className="number">3:54</span></p>
                </div>
                <div className="phone-number">
                    <button className="btn-phone"  onClick={() => {navigate("/success")}}>Verify Phone Number</button>
                </div>
            </div>
        </div>
     );
}
 
export default Verification;