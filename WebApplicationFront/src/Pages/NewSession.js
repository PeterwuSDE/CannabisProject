import Header from '../Components/Header';
import '../css/NewSession.css';
import ListItem from '../Components/ListItem';
import {React, Component} from 'react';

export default class NewSession extends Component {
    state = {
        visible: true
    };

    render() {
        return(
            <div>
                {/*<Header></Header>*/}
                <p className="title">Add your Session</p>
                <p className="description">Date and Time</p>
                {this.state.visible ? <button id="add-button" onClick={() => {
                    this.setState({visible: false});
                }}>
                    + Add date and time
                </button> : <div id="add-session">Insert Session Date and Time</div>}
                <hr className="line1"></hr>
                <h2 className="subTitle">My cannabis products</h2>
                <p className="name1">Name</p>
                <p className="type1">Type</p>
                <ListItem name="Kush Redee" type="Distillate oil"></ListItem>
                <br></br>
                <ListItem name="Blue Dream" type="Sativa"></ListItem>
                <br></br>
                <ListItem name="Etiam Elit" type="Full spectrum oil"></ListItem>
                <br></br>
                <ListItem name="Ligula Inceptos" type="Edible"></ListItem>
                <br></br>
                <ListItem name="Ornare Venenatis Tellus" type="Tincture"></ListItem>
                <br></br>
                <hr className="line2"></hr>
            </div>
        );
    }
    
}




