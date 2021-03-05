import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../components/browsing/browsing';
import Profile from '../components/profile/profile';
import confirme from '../containers/emailConfirmation';
import NotFoundPage from '../NotFoundPage';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/signup" component={RegisterUser} />
                <Route exact path="/signin" component={loginUser}/>
                <Route exact path="/browsing" component={Browser}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/confirme/:token" component={confirme}/>
                <Route exact path="/resetPassword/:token"  component={ResetPassword}/>
                <Route exact path="/forgotPassword"  component={ForgotPassword}/>
                <Route exact path="/" component={loginUser}/>
                <Route exact path="" component={NotFoundPage}/>
            </Switch>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);