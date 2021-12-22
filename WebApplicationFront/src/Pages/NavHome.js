import "../css/NavHome.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function NavHome() {
    return (
        <div className="navhome">
            <div className="Header">  
                    <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
                    <p className="TextHeader">DCRP</p>
            </div>
            <div className="intro-section">
                <p>
                    To keep track of your health
                    start adding cannabis products and tracking
                    your intake.
                </p>
            </div>
            <div className="feature-section">
                <div className="welcome-message">
                    <p>Good Morning, John!</p>
                </div>
                <Link to="productlist">
                    <div className="section-box1">
                        <p>My Products</p>
                    </div>
                </Link>
                <Link to="sessions">
                    <div className="section-box2">
                        <p>My Sessions</p>
                    </div>
                </Link>
                <Link to="moodjournal">
                    <div className="section-box3">
                        <p>Mood Journal</p>
                    </div>
                </Link>
                <Link to="myreports">
                    <div className="section-box4">
                        <p>My Reports</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
