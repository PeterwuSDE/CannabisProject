import "../css/MyReports.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineUpload } from "react-icons/ai";

export default function MyReports() {
    return (
        <div className="myreports">
            <div className="Header">  
                    <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
                    <p className="TextHeader">DCRP</p>
            </div>
            <div className="report-options">
                <h1>My Reports</h1>
                <div className="new-report-monthly"> {/* this whole div will be clickable (as a button) */}
                    <div className="button-box">
                        <div className="cross"> &times; </div>
                    </div>
                    <h3>Generate Monthly Report</h3>
                </div>
                <div className="new-report-weekly">  {/* this whole div will be clickable (as a button) */}
                    <div className="button-box">
                        <div className="cross"> &times; </div>
                    </div>
                    <h3>Generate Weekly Report</h3>
                </div>
                <hr/>
            </div>
            <div className="report-section">
                <div className="report-date">
                    <p>Dec 2021</p>
                </div>
                <div className="report-box">
                    <GrDocumentPdf />
                    <div className="report-title">
                        My Dec. 2021 Report
                    </div>
                    <AiOutlineUpload />
                </div>
            </div>
            <div className="bottom-add-report-button">
                <div className="cross"> &times; </div>
            </div>
            
        </div>
    )
}



