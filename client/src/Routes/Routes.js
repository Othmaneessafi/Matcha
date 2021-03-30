import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import Browser from '../containers/Browsing';
// import Browser from '../components/browsing/browsing';
import Infos from '../containers/Infos';
import Profile from '../containers/Profile';
import confirme from '../containers/emailConfirmation';
import notFound from '../components/shared/404';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';
import Chat from '../containers/Chats';
import Activity from '../containers/activity';


const Routes = (props) => {
    const {user} = props;
    return (
            <Switch>
                <Route exact path="/signup" component={user === null ? RegisterUser  : (user.step === 3 ? Browser : Infos)} />
                <Route exact path="/signin" component={user === null ? loginUser  : (user.step === 3 ? Browser : Infos)}/>
                <Route exact path="/browsing" component={user === null ? loginUser : (user.step === 3 ? Browser : Infos)}/>
                <Route exact path="/profile"  component={user === null ? loginUser : (user.step === 3 ? Profile : Infos) }/>
                <Route exact path="/infos"  component={user === null ? loginUser :  Infos}/>
                <Route exact path="/chat" component={user !== null  ? (user.step === 3 ? Chat : Infos) : loginUser }/>
                <Route exact path="/activity" component={Activity}/>
                <Route exact path="/confirme/:token" component={confirme}/>
                <Route exact path="/resetPassword/:token"  component={ResetPassword}/>
                <Route exact path="/forgotPassword"  component={ForgotPassword}/>
                <Route exact path="/" component={user === null ? loginUser  : (user.step === 3 ? Browser : Profile)} />
                <Route exact path="" component={notFound}/>
            </Switch>
    )
}
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);