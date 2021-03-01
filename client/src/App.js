import './App.css';
import Signin from './compenents/signin/signin';
import Signup from './compenents/signup/signup';
import Browsing from './compenents/browsing/browsing'
import Profile from './compenents/profile/profile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signin}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/browsing" exact component={Browsing}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
