import '../css/ProfileSettings1.css';
import { Link } from "react-router-dom";

export default function ProfileSettings1() {
    return(
        <div className='profilesSettings1' id="profileSettings1">
            <h1 className="profileheading">Profile</h1>
            <div className="slidecontainer">
                <input className="start" type="range" min="0" max="100" value="0" class="slider" id="myRange"/>
            </div>
            <div className="flex-container">
                <div className="profilephoto">
                    <div className="cross"> &times; </div>
                </div>
                <h2 className="uploadphoto">Upload Photo</h2>
                <div className="name">
                    <form>
                        <label for="name"/>
                        <input type="text" id="name" name="name" placeholder="Enter name"/>
                    </form>
                </div>
                <div className="age">
                    <form>
                        <label for="age">Enter Age</label>
                        <input type="number" id="age" age="age"/>
                    </form>
                </div>
                <div className="gender">
                    <form>
                        <label for="age">Select Gender</label>
                        <select id="gender" name="gender">
                            <option value="" selected disabled hidden></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </form>
                </div>
                <div className="ethnicity">
                    <form>
                        <label for="age">Ethnicity</label>
                        <select id="ethnicity" name="ethnicity">
                            <option value="" selected disabled hidden></option>
                            <option value="americanindian">American Indian</option>
                            <option value="asian">Asian</option>
                            <option value="black">Black</option>
                            <option value="hispanic">Hispanic or Latino</option>
                            <option value="pacificislander">Pacific Islander</option>
                            <option value="white">White</option>
                        </select>
                    </form>
                </div>
                <div className="next">
                    <Link to="profileSettings2">
                        <button className="nextButton">Next</button>
                    </Link>
                </div>
                <div className="back">
                    <Link to="register">
                        <button className="backButton">back</button>
                    </Link>
                </div>
            </div>

        </div>
        
    );
}