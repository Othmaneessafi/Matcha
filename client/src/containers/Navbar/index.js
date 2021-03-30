import React, {useState, useEffect}  from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import Nav from '../../components/navbar/navbar';
import MyMenu from '../../components/shared/menu';
import {OpenNotif} from '../../actions/notifAction';
import NotifList from "../../components/Notif/index";
import {getPic} from '../../actions/uploadAction';

const NavBarContainer = (props) => {
    const {user,openNotif, notifList,getPic, images, handleLogout} = props;
    useEffect(() => {
        if(user){
            getPic(user.id);
        }
    }, [getPic, user]);

    const [state, setState] = useState({
        open: false,
    });
    const handleNotifListOpen = (e) => {
        openNotif();
        setState({open: true, anchor: e.currentTarget});
    }
    const handleClose = () => {
        setState({open: false, anchor: null});
    }
    let i = 0;
    notifList && notifList.forEach(e => {
        if(e.seen === 0)
            i++;
    });
    return(
        <>
        <Nav unseenNotif={i} handleNotifListOpen={handleNotifListOpen} handleLogout={handleLogout} user={user} images={images}/>
        <MyMenu  state={state} handleClose={handleClose}>
            <NotifList notifList={notifList}/>
        </MyMenu>
        </>

    )
}

const mapStateToProps = (state) => (
{
    user : state.user,
    notifList: state.notif.notifications,
    images : state.images,
});
const mapDispatchToProps = {
    logoutAction: LogoutAction,
    openNotif: OpenNotif,
    getPic: getPic,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 