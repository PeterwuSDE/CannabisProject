import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCannabis, faBars } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/open-sans";
import { Link } from "react-router-dom";
library.add(fab, far, fab, faCannabis,faBars);

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
      <Link to="/login">
        <button className="b1">Sign in</button>
      </Link>
      <Link to="/register">
        <button className="b2">Create New Account</button>
      </Link>
    </div>
  );
}

export default home;
