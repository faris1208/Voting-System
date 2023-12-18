import james from "../img/Frame 36.svg";
import nigeria from "../img/download (3) 1.svg";
import miss from "../img/pagent 1.svg";
import bbn from "../img/bbn 1.svg";
import mtn from "../img/mtn 1.svg";

const Recent = () => {
    return ( 
        <div className="recent-container">
            <div className="recent-contents">
                <div className="james-contents">
                    <img src={james} alt="" className="james-image" width="100%" />
                    <h4>Hello James</h4>
                </div>
                <div className="kindly">
                    <h4>Join a Vote</h4>
                    <h6>Kindly select a vote you want to join</h6>
                </div>

                <div className="badge-container">
                    <div className="select">
                        <h4>Recent Polls </h4>
                        <p>See All</p>
                    </div>
                    <div className="badge-contents">
                        <div className="badge-wrapper">
                            <img src={nigeria} alt="" className="nigeria-image" width="100%" />
                            <a href="/nigeria">Nigeria 2023</a>
                            {/* <h4>Nigeria 2023</h4> */}
                        </div>
                        <div className="badge-wrapper">
                            <img src={miss} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">Nigeria 2023</a>
                            {/* <h4>Miss World</h4> */}
                        </div>
                        <div className="badge-wrapper">
                            <img src={bbn} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">Nigeria 2023</a>
                            {/* <h4>BBnaija Season 7</h4> */}
                        </div>
                        <div className="badge-wrapper">
                            <img src={mtn} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">Nigeria 2023</a>
                            {/* <h4>MTN Project Fame</h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Recent;