import { useNavigate } from "react-router-dom";

const Welcome = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="welcome-container">
            <div className="welcome-wrapper">
                <div className="welcome-contents">
                    <h1>Welcome!</h1>
                    <p>Welcome to <span className="p-span">ELECT.NG</span> Online Voting System Your account has been created successfully Let’s Get Started</p>
                </div>
                <div className="join-poll">
                    <button className="btn-poll" onClick={() => {navigate("/poll")}}>Create A Poll</button>
                    <button className="btn-join" onClick={() => {navigate("/recent")}}>Join A Vote</button>
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;