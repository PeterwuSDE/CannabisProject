import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Header.css';
export default function Header () {
    return(
        <div className="Header">
            <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
            <p className="text">DCRP</p>
        </div>
    );
}