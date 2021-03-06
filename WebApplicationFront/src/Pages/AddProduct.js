import "../css/AddProduct.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { SmokingSubtypes } from './../Components/SmokingSubtypes';
import { VapingSubtypes } from "../Components/VapingSubtypes";
import { OralsSubtypes } from "../Components/OralsSubtypes";
import "animate.css"; //for pending checkmark animation
import { animateScroll as scroll } from "react-scroll";

export default function AddProduct () {
    
    const [selectedRadioBtn, setSelectedRadioBtn] = useState(""); //remember to turn back to empty string
    const isRadioSelected = (value) => selectedRadioBtn === value;
    const handleRadioClick = (e) => setSelectedRadioBtn(e.currentTarget.value);

        return (   
            <div className="addproduct"> 
                <div className="Header">  
                    <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
                    <p className="TextHeader">DCRP</p>
                </div>
                <div className="AddProduct__heading">
                    <h1>Add Cannabis Product</h1>
                </div>
                
                <div className ="flex-container__photo">
                    <h2>Upload picture of your <br></br>cannabis product:</h2>
                    <FontAwesomeIcon className="camera" icon={faCamera} size="1x" />
                </div>
                <div className ="flex-container__type">
                    <h1>Select Type:</h1>
                    <div className="x"> &times; </div>
                    <form className="type-selection">
                        <label className="container" for="smoking">Smoking/Flower
                            <input 
                                type="radio" 
                                name="type" 
                                id="smoking" 
                                value="smoking"
                                className="subtype-input"
                                checked={isRadioSelected("smoking")}
                                onChange={handleRadioClick}
                            />   
                            <span className="checkmark"></span>
                        </label>
                        <label className="container" for="topical"> Topical {/* no substype for this type */}
                            <input 
                                type="radio" 
                                name="type" 
                                id="topical" 
                                value="topical"
                                className="subtype-input"
                                checked={isRadioSelected("topical")}
                                onChange={handleRadioClick}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container"for="vaping">Vaping
                            <input 
                                type="radio" 
                                name="type" 
                                id="vaping" 
                                value="vaping"
                                className="subtype-input"
                                checked={isRadioSelected("vaping")}
                                onChange={handleRadioClick}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="orals-container" for="orals">Orals
                            <input 
                                type="radio" 
                                name="type" 
                                id="orals" 
                                value="orals"
                                className="subtype-input"
                                checked={isRadioSelected("orals")}
                                onChange={handleRadioClick}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </form>
                </div>
                
                { (selectedRadioBtn!=="" && 
                    <div className="flex-container__subtype">
                        <h1>Select Subtype:</h1>
                        <div className="x"> &times; </div>
                        { (selectedRadioBtn==="smoking" && <SmokingSubtypes />) || 
                        (selectedRadioBtn==="vaping" && <VapingSubtypes />) ||
                        (selectedRadioBtn==="orals" && <OralsSubtypes />) ||
                        (selectedRadioBtn==="topical" && 
                            <h2 className="topical-subtype__heading">
                            There are no subtypes for topical products, please continue to the next section.
                            </h2>)}

                    </div>) 
                }

                { selectedRadioBtn!==""&&selectedRadioBtn!=="topical" && 
                    (<div className="flex-container__strain" >
                        <div className="x"> &times; </div>
                        <div className="strain-selection">
                            <label for="strain-choice">Select Strain:</label>
                            <input list="strains" id="strain-choice" name="strain-choice" />
                            <datalist id="strains">
                                    <option value="Cinderella 99"/>
                                    <option value="Hindu Kush"/>
                                    <option value="Mango Kush"/>
                                    <option value="$100 OG"/>
                                    <option value="NYC Diesel"/>
                                    <option value="Tahoe OG Kush"/>
                                    <option value="Death Star"/>
                                    <option value="Bubble Gum"/>
                                    <option value="Skywalker OG"/>
                                    <option value="Purple Haze"/>
                                    <option value="G13"/>
                                    <option value="Lemon Kush"/>
                                    <option value="God's Gift"/>
                                    <option value="Purple Urkle"/>
                                    <option value="Skywalker"/>
                                    <option value="Amnesia Haze"/>
                                    <option value="Cherry Pie"/>
                                    <option value="Chocolope"/>
                                    <option value="LA Confidential"/>
                                    <option value="White Rhino"/>
                                    <option value="Maui Waui"/>
                                    <option value="Afghan Kush"/>
                                    <option value="Super Lemon Haze"/>
                                    <option value="Master Kush"/>
                                    <option value="Cheese"/>
                                    <option value="Blueberry"/>
                                    <option value="Grape Ape"/>
                                    <option value="Strawberry Cough"/>
                                    <option value="Blackberry Kush"/>
                                    <option value="Alaskan Thunder Fuck"/>
                                    <option value="Blue Dream"/>
                                    <option value="Northern Lights" />
                                    <option value="Trainwreck" />
                                    <option value="AK47"/>
                                    <option value="Bubba Kush"/>
                                    <option value="Jack Herer"/>
                                    <option value="White Widow"/>
                                    <option value="Granddaddy Purple"/>
                                    <option value="Girl Scout Cookies"/>
                                    <option value="Green Crack"/>
                                    <option value="OG Kush"/>
                                    <option value="Sour Diesel"/>
                                    <option value="Lemon Haze"/>
                                    <option value="Super Silver Haze"/>
                                    <option value="Durban Poison"/>
                                    <option value="Chemdawg"/>
                                    <option value="Purple Kush"/>
                                    <option value="Pineapple Express"/>
                                    <option value="Headband"/>
                                    <option value="Blue Cheese"/>
                                    <option value="Blackberry Kush" />
                            </datalist>
                            <h3>Add Chemo Type:</h3>
                            <label for="thc">THC</label>
                            <input type="number" id="thc" name="thc" min="0" max="100" placeholder="          %"/> 
                            <label for="cbd">CBD</label>
                            <input type="number" id="cbd" name="cbd" min="0" max="100" placeholder="          %"/> 
                            
                        </div>
                    </div> ) 
                }
                <Link to="home">
                    <button className="exit-button">Exit</button>
                </Link>
                <Link to="productlist">
                    <button id="_onclick" className="next-button">Next</button>
                </Link>
                <img className="checkmark-complete__img" src="assets/images/Check_icon.png" />
            </div>
        );
    }


