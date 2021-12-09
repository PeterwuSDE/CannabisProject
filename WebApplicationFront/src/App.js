import { Profiler } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link
} from "react-router-dom";
import home from "./Pages/home.js";
import Login from "./Pages/Login.js";
import ProfileSettings2 from "./Pages/ProfileSettings2.js";
import Register from "./Pages/Register.js";
import ProfileSettings1 from "./Pages/ProfileSettings1"

function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/profileSettings2" exact component={ProfileSettings2}></Route>
          <Route path="/profileSettings1" exact component={ProfileSettings1}></Route> {/*added route for 1st profile settings page*/}
        </Switch>
      </Router>
    );
  }
  
  export default App;
  