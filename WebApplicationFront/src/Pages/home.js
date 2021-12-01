import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCannabis, faBars } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/open-sans";
import {
  Link
} from "react-router-dom";
library.add(fab, faCannabis,faBars);

function home() {
  return (
    <div className="App">
      <div className="Header">
        <FontAwesomeIcon className="IconHeader" icon= {['fas', 'bars']} size="2x"/>
        <p className="TextHeader">DCRP</p>
      </div>
      <a className="MainIcon"><FontAwesomeIcon icon= {['fas', 'cannabis']} size="5x"/></a>
      <h1 className="Title">DCRP</h1>
      <p className="Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium habitant maecenas non odi</p>
      <Link to="/Login">
        <button className="b1">Sign in</button>
      </Link>
      <Link to="/Register">
        <button className="b2">Create New Account</button>
      </Link>
    </div>
  );
}

export default home;
