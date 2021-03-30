import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Profile from "../../components/profile/profile";
import {getTags} from '../../actions/infosAction'
import {getPic} from '../../actions/uploadAction';
import {resetStep} from '../../actions/resetStateAction';

const ViewProfileContainer = (props) => {
    const {user,images, getPic, getTags, resetStep} = props;
    useEffect(() => {
        if(user){
            getPic(user.id);
            getTags();
        }
    }, [getPic, getTags, user]);
    return (
        <div>
            <Profile resetStep={resetStep} user={user} images={images}/>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});

const mapDispatchToProps = {
    getTags : getTags,
    getPic: getPic,
    resetStep: resetStep
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileContainer);