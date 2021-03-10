import  Profile from '../../components/profile/profile';
import {InfosAction} from '../../actions/infosAction';
import {connect} from "react-redux";
import {reduxForm } from 'redux-form';


const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'first_name',
        'last_name',
        'bio',
        'birth',
        'gender',
        'intrest',
    ];

    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    if(values.first_name && !/^[a-z0-9_-\s]{2,20}$/.test(values.first_name))
    errors.first_name = 'first name can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if(values.last_name && !/^[a-z0-9_-\s]{2,20}$/.test(values.last_name))
    errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if(values.p_username && !/^[a-z0-9_-]{2,20}$/.test(values.p_username))
        errors.p_username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if (values.p_email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.p_email = "Invalid email address !";
    if(values.pass && !/\d/.test(values.pass))
        errors.pass = "Password must contain a number !"
    else if(values.pass && !/[A-Z]/.test(values.pass))
        errors.pass = "Password must contain an uppercase letter !"
    else if(values.pass && !/[a-z]/.test(values.pass))
        errors.pass = "Password must contain a lowercase letter !"
    else if(values.pass && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.pass))
        errors.pass = "Password must contain a special character !"
    else if(values.pass && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.pass))
        errors.pass = "Password must contain 8-20 characters !"
    if(values.cpass && values.pass !== values.cpass)
        errors.cpass = "Passwords does not match !"
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
    "status" : state.infos.status,
    "error": state.infos.error
});

const mapDispatchToProps = {
    "infosAction": InfosAction
};
const mergeProps = (stateProps, dispatchProps, otherProps)=> ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form)=>{
        dispatchProps.infosAction(form);
        console.log(form)
    })
});

const connectedProfileContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(Profile);
const ProfileContainer = reduxForm({
    form : "profile",
    "destroyOnUnmount": true,  
    validate,
})(connectedProfileContainer);

export default ProfileContainer;