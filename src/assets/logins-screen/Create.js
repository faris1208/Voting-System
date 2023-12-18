import eyelashes from "../img/EyeSlash.svg";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const navigate = useNavigate()

    return ( 
        <div className="create-container">
            <div className="create-contents">
                <div className="ng-elect">
                    <h2>Elect.NG</h2>
                </div>
                <div className="few"> 
                    <div className="user-admin">
                        <button className="btn-user">User</button>
                        <button className="btn-admin" onClick={() => {navigate("/admin")}}>Admin</button>
                    </div>
                </div>
                <div className="create-account">
                    <h3>Create Account </h3>
                </div>
                <div className="admin-form">
                    <input type="text" placeholder="Full Name" className="admin-input" />
                    <input type="text" placeholder="Phone Number" className="admin-input" />
                    <input type="text" placeholder="Voter's identification Number (optional)" className="admin-input" />
                    <input type="password" placeholder="Password" className="admin-input" />
                    <input type="password" placeholder="Re-enter Password" className="admin-input" />
                    <img src={eyelashes} alt="" width="100%" className="eyelashes-two" />
                    <img src={eyelashes} alt="" width="100%" className="eyelashes-three" />
                </div>
                <div className="createaccountbtn">
                    <button className="createaccount-btn" onClick={() => {navigate("/verification")}}>Create Account</button>
                </div>
                <div className="more-text">
                    <p>Already have an account? <span className="more" onClick={() => {navigate("/login")}}>Log In</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Create;