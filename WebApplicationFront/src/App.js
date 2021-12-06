import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link
} from "react-router-dom";
import home from "./Pages/home.js";
import Login from "./Pages/Login.js";
import ProfileSetting2 from "./Pages/ProfileSetting2.js";
import Register from "./Pages/Register.js";


function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/profile2" exact component={ProfileSetting2}></Route>
        </Switch>
      </Router>
    );
  }
  
  export default App;
  