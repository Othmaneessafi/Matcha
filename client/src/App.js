import './App.css';
import Signin from './compenents/signin/signin';
import Signup from './compenents/signup/signup';
import Browsing from './compenents/browsing/browsing'
import Navbar from './compenents/navbar/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/browsing" exact component={Browsing}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
