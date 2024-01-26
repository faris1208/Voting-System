import browser from "../img/peter obi 1.svg";
import browsers from "../img/obasanjo 2 1.svg";
import browserss from "../img/atiku 1.svg";
import { useNavigate } from "react-router-dom";

const Uploading = () => {

    const navigate = useNavigate()

    return ( 
        <div className="Uploading-container">
            <div className="Uploading-contents">
                <h5>Upload Files</h5>
                <p>UPLOADING</p>
            </div>

            <div className="Photo">
                <div className="browser1">
                    <img src={browser} alt="" className="browser-image1" width="100%" />
                </div>
                <div className="Photo-one">
                    <h5>Photo 1.jpg</h5>
                    <p>2.7MB of 5MB</p>
                </div>
                <div className="eighty">
                    <p>80%</p>
                </div>
            </div>

            <div className="Photo">
                <div className="browser">
                    <img src={browserss} alt="" className="browser-image" width="100%" />
                </div>
                <div className="Photo-one">
                    <h5>Photo 2.jpg</h5>
                    <p>Queued...</p>
                </div>
            </div>

            <div className="Photo">
                <div className="browser">
                    <img src={browsers} alt="" className="browser-image" width="100%" />
                </div>
                <div className="Photo-one">
                    <h5>Photo 2.jpg</h5>
                    <p>Queued...</p>
                </div>
            </div>

            <div className="COMPLETED">
                <p>COMPLETED</p>
            </div>

            <div className="Photo">
                <div className="browser">
                    <img src={browserss} alt="" className="browser-image" width="100%" />
                </div>
                <div className="Photo-one">
                    <h5>Photo 2.jpg</h5>
                    <p>2min ago</p>
                </div>
            </div>

            <div className="dusted">
                <button className="dusted-btn" onClick={() => {navigate("/successfully")}}>Done</button>
            </div>

        </div>
     );
}
 
export default Uploading;