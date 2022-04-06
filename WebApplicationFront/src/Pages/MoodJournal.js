import {React, Component} from 'react';
import Header from '../Components/Header';
import MoodBar from '../Components/MoodBar.js';
import '../css/MoodJournal.css';
import '../css/MoodJournal.css';

export default class NewSession extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <h1 className="greeting">Hi John, How is your day?</h1>
                <h2 className="category1">Pain Level</h2>
                <p className="title">Select your pain level today</p>
                <h2 className="category2">Anxiety</h2>
                <h2 className="category3">Depression</h2>
                <h2 className="category4">Energy Level</h2>
                <div className="bar1">
                    <MoodBar id="1"></MoodBar>
                </div>
                <div className="bar2">
                    <MoodBar id="2"></MoodBar>
                </div>
                <div className="bar3">
                    <MoodBar id="3"></MoodBar>
                </div>
                <div className="bar4">
                    <MoodBar id="4"></MoodBar>
                </div>
                <hr></hr>
                <p className="note">Notes</p>
                <input className="box" type="text"></input>
                <button className="submit">submit</button>
            </div>
        );
    }
}