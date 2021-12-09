import  '../css/ProfileSetting2.css';

export default function ProfileSettings2() {
    return(
        <div className="background">
            <p className="title">Profile</p>
            <form className="form1">
                <p className="label1">Are you treating pain with cannabis?</p>
                <input className="yesSelection" type="radio" id="yes" name="choice" value="YES"/>
                <label className="yesLabel" for="html">Yes</label>
                <input className="noSelection" type="radio" id="no" name="choice" value="NO"/>
                <label className="noLabel" for="html">No</label>
            </form>
            <form className="form2">
                <label className="q1Label" for="q1">Where is your pain located?</label>
                <select className="q1Options" name="q1" id="q1">
                    <option value="head">Head</option>
                    <option value="shoulder">Shoulder</option>
                    <option value="hip">Hip</option>
                    <option value="feet">Feet</option>
                </select>
                <label className="q2Label" for="q2">Primary pain related condition for Cannabis</label>
                <select className="q2Options" name="q2" id="q2">
                    <option value="condition a">condition a</option>
                    <option value="condition b">condition b</option>
                </select>
                <label className="q3Label" for="q3">Secondary pain related condition for Cannabis</label>
                <select className="q3Options" name="q3" id="q3">
                    <option value="condition a">condition a</option>
                    <option value="condition b">condition b</option>
                </select>
                <label className="q4Label">How long you have been using cannabis to treat pain?</label>
                <input className="q4Options" type="range" min="0" max="36" id="myRange"/>
                <input className="submit" type="submit" value="Submit"/>
                <a className="back">back</a>
            </form>
        </div>
        
    );
}