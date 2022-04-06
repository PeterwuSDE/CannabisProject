import face1 from '../Components/1.png';
import face2 from '../Components/2.png';
import face3 from '../Components/3.png';
import face4 from '../Components/4.png';
import face5 from '../Components/5.png';
import '../css/MoodBar.css';
import {React} from 'react';

export default function MoodBar() {
    return (
        <div>
            <img className="face1" src={face1} />
            <img className="face2" src={face2} />
            <img className="face3" src={face3} />
            <img className="face4" src={face4} />
            <img className="face5" src={face5} />
        </div>
    );
}