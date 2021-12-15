import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Sessions.css';

export default function NewSession () {
    return(
        <div>
            {/*<Header></Header>*/}
            <p>Today's Session</p>
            <p>Date and Time</p>
            <button>+ Add date and time</button>
        </div>
    );
}