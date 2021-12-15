import Header from '../Components/Header';
import {Link} from 'react-router-dom';
import pic from '../Components/DispensaryCardOne.png';
import pic2 from '../Components/carbon_add-filled.png';
import '../css/Sessions.css';

export default function Sessions () {
    return(
        <div className="session">
            <Header></Header>
            <p className="title">My Sessions</p>
            <Link to="NewSession">
               <img className="button" src={pic} />
            </Link>
            <p className="description2">Add a session</p>
            <hr></hr>
            <p className="description">You have no session records at this time</p>
            <Link to="NewSession">
               <img className="button2" src={pic2} />
            </Link>
        </div>
    );
}