import eyelashes from "../img/EyeSlash.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Admin = () => {

    const navigate = useNavigate()

    const [show,setShow] = useState(false)
    
    const handleShow=() =>{
        setShow(!show)
    }

    return ( 
        <div className="admin-container">
            <div className="admin-contents">
                <div className="admin-elect">
                    <h2>Elect.NG</h2>
                </div>
                <div className="admin"> 
                    <div className="admin-admin1">
                        <button className="admin-user2" onClick={() => {navigate("/create")}}>User</button>
                        <button className="admin-admin2">Admin</button>
                    </div>
                </div>
                <div className="admin-account">
                    <h3>Create Account </h3>
                </div>
                <div className="admin-form">
                    <input type="text" placeholder="Full Name" className="admin-input" />
                    <input type="text" placeholder="Phone Number" className="admin-input" />
                    <input type="text" placeholder="Admin ID No" className="admin-input" />
                    <input type="password" placeholder="Password" className="admin-input" />
                    <input type="password" placeholder="Re-enter Password" className="admin-input" />
                    <img src={eyelashes} alt="" width="100%" className="eyelashes-two" onClick={handleShow} />
                    <img src={eyelashes} alt="" width="100%" className="eyelashes-three" onClick={handleShow} />
                </div>
                <div className="adminbtn-btn">
                    <button className="admin-btn">Create Account</button>
                </div>

                
                <div className="admin-text">
                    <p>Already have an account? <span className="admin-log"  onClick={() => {navigate("/login")}}>Log In</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Admin;