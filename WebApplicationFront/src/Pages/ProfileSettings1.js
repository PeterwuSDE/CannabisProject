import '../css/ProfileSettings1.css';
/* too verbose of a title? wanted to make it clear which page. 
This being the first of two profile settings pages, after the registration page */

export default function ProfileSettings1() {
    return(
        <div className='profilesSettings1' id="profileSettings1">
            <h1>Profile</h1>
            <div class="slidecontainer">
                <input type="range" min="0" max="100" value="0" class="slider" id="myRange"></input>
            </div>
            <div class="flex-container">
                <div class="photo">
                    <div class="cross"> &times; </div>
                </div>
                <h2>Upload Photo</h2>
                {/* <div class="name">
                    <form>
                        <label for="age">Enter Name</label>
                        <input type="text" id="name" age="name"></input>
                    </form>
                </div> */}
                {/* <div class="age">
                    <form>
                        <label for="age">Enter Age</label>
                        <input type="number" id="age" age="age"></input>
                    </form>
                </div> */}
                {/* <div class="gender">Select Gender</div>
                <div class="ethnicity">Ethnicity</div> */}
                <div class="next">
                    {/* <button className="nextButton">Next</button> */}
                </div>
                <div class="back">
                    {/* <button className="backButton">Back</button> */}
                </div>
            </div>

        </div>
        
    );
}