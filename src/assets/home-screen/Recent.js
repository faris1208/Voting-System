import james from "../img/Frame 36.svg";
import nigeria from "../img/download (3) 1.svg";
import miss from "../img/pagent 1.svg";
import bbn from "../img/bbn 1.svg";
import mtn from "../img/mtn 1.svg";
import magnify from "../img/MagnifyingGlass (1).svg";
import dot from "../img/Group 100.svg";
import jay from "../img/J.svg";

const Recent = () => {
    return ( 
        <div className="recent-container">
               <div className="welcome-input-head">
                    <div className="magnify">
                        <img src={magnify} alt="" className="magnify-image" width="100%" />
                        <input type="text" placeholder="Search" className="magnify-input" />
                    </div>
                    <div className="dot-jay">
                        <img src={dot} alt="" className="dot-image" width="100%" />
                        <div className="jay-head">
                            <img src={jay} alt="" className="jay-image" width="100%" />
                        </div>
                    </div>
                </div>

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
                        </div>
                        <div className="badge-wrapper">
                            <img src={miss} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">Miss World</a>
                        </div>
                        <div className="badge-wrapper">
                            <img src={bbn} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">BBnaija Season 7</a>
                        </div>
                        <div className="badge-wrapper">
                            <img src={mtn} alt="" className="nigeria-image" width="100%" />
                            <a href="/login">MTN Project Fame</a>
                            {/* <h4>MTN Project Fame</h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Recent;