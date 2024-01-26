import browse from "../img/UploadSimple (1).svg";
import { useNavigate } from "react-router-dom";

const Upload = () => {

    const navigate = useNavigate()

    return ( 
        <div className="Upload-container">
            <div className="Upload-contents">
                <h5>Create A Poll</h5>
                <p>Fill in the fields belows to create a poll</p>
            </div>

            <div className="Upload-title">
                <h5>Poll Title</h5>
                <input type="text" placeholder="Type your poll title " className="Upload-input" />
            </div>

            <div className="Upload-title2">
                <h5>Poll Description</h5>
                <input type="text" className="Upload-input2" />
            </div>
            <div className="Browse-head-contents">
                <div className="Browse-head">
                    <div className="Browse">
                        <img src={browse} alt="" className="browse-image" width="100%" />
                        <p>Drag files to upload</p>
                    </div>
                    <div className="Browse-btn-head">
                        <button className="Browse-btn">Browse files</button>
                    </div>
                </div>

                <div className="Browse-head">
                    <div className="Browse">
                        <img src={browse} alt="" className="browse-image" width="100%" />
                        <p>Drag files to upload</p>
                    </div>
                    <div className="Browse-btn-head">
                        <button className="Browse-btn">Browse files</button>
                    </div>
                </div>

                <div className="Browse-head">
                    <div className="Browse">
                        <img src={browse} alt="" className="browse-image" width="100%" />
                        <p>Drag files to upload</p>
                    </div>
                    <div className="Browse-btn-head">
                        <button className="Browse-btn">Browse files</button>
                    </div>
                </div>

                <div className="Browse-head">
                    <div className="Browse">
                        <img src={browse} alt="" className="browse-image" width="100%" />
                        <p>Drag files to upload</p>
                    </div>
                    <div className="Browse-btn-head">
                        <button className="Browse-btn">Browse files</button>
                    </div>
                </div>
            </div>

            <div className="FILE">
                <button className="FILE-btn" onClick={() => {navigate("/uploading")}}>Add A File</button>
            </div>

        </div>
     );
}
 
export default Upload;