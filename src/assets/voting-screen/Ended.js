import count from "../img/Group 189.svg";
import ended from "../img/peter obi 1.svg";

const Ended = () => {
    
    return ( 
        <div className="Ended-container">
            <div>
                <img src={count} alt="" className="count2-image" width="100%" />
            </div>
            <div className="eight-hours">
                <h5>Total votes</h5>
                <h6>50,320,261 votes</h6>
                <p>Voting has ended</p>
            </div>

            <div className="Winner">
                <p>Winner</p>
            </div>

            <div className="ended-bola">
                <div className="ended-green">
                    <img src={ended} alt="" className="ended-image" width="100%" />
                </div>
                <div className="ended-tinubu">
                    <h5>Bola Ahmed Tinubu</h5>
                    <p>All Progressive Party</p>
                </div>
            </div>
            <div className="you">
                <p>You voted for</p>
            </div>

            <div className="ended-obi">
                <div className="ended-green">
                    <img src={ended} alt="" className="ended-image" width="100%" />
                </div>
                <div className="ended-tinubu">
                    <h5>Peter Obi</h5>
                    <p>Labour Party (LP)</p>
                </div>
            </div>

        </div>
     );
}
 
export default Ended;