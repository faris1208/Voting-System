import { useNavigate } from "react-router-dom";

const Poll = () => {

    const navigate = useNavigate()

    return (
         
        <div className="poll-container">
            <div className="poll-wrapper">
                <div className="poll-contents">
                    <h5>Create A Poll</h5>
                    <p>Fill in the fields belows to create a poll</p>
                </div>
                <div className="poll-title-contents">
                    <div className="poll-title">
                        <h5>Poll Title</h5>
                        <input type="text" placeholder="Type your poll title " className="type-input" />
                    </div>
                    <div className="poll-title">
                        <h5>Poll Images</h5>
                        <input type="text" placeholder="Upload image" className="type-input" />
                    </div>
                    <div className="poll-title">
                        <h5>Voting Type</h5>
                        <input type="text" placeholder="" className="type-input" />
                    </div>
                </div>

                    <form className="poll-form">
                        <div className="start-container">
                            <div className="start-contents">
                                <label>Start Date</label>
                                <input type="date" name="dd /mm/yr" className="start-input" />
                            </div>
                            <div className="time-label1">
                                <label>Time</label>
                                <input type="time" name="00:00" placeholder="00:00" className="time-input" />
                            </div>
                        </div>

                        <div className="start-container">
                            <div className="start-contents">
                                <label>End Date</label>
                                <input type="date" name="dd /mm/yr" className="start-input" />
                            </div>
                            <div className="time-label2">
                                <label>Time</label>
                                <input type="time" name="00:00" placeholder="00:00" className="time-input" />
                            </div>
                        </div>
                    </form>

                    <div className="restrictions">
                        <h5>Voting Restrictions</h5>
                        <input type="text" placeholder="One vote per IP address" className="restrictions-input" />
                    </div>
                    <div className="create-pollbtn">
                        <button className="create-poll-btn" onClick={() => {navigate("/upload")}}>Create Poll</button>
                    </div>
            </div>
        </div>
        
     );
}
 
export default Poll;