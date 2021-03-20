import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../containers/Browsing';
import Infos from '../containers/Infos';
import Profile from '../containers/Profile';
import confirme from '../containers/emailConfirmation';
import notFound from '../components/shared/404';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';
import Chat from '../components/chat/chat';
import Activity from '../components/activity/activity';


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/signup" component={RegisterUser} />
                <Route exact path="/signin" component={loginUser}/>
                <Route exact path="/browsing" component={Browser}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/infos" component={Infos}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/activity" component={Activity}/>
                <Route exact path="/confirme/:token" component={confirme}/>
                <Route exact path="/resetPassword/:token"  component={ResetPassword}/>
                <Route exact path="/forgotPassword"  component={ForgotPassword}/>
                <Route exact path="/" component={loginUser}/>
                <Route exact path="" component={notFound}/>
            </Switch>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);