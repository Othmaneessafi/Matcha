import React, { useState } from 'react';
import Photo from '../../components/infos/photos'
import {connect} from "react-redux";
import {sendPics,delPics,setProfilePic} from '../../actions/uploadAction';

const Photos = (props) => {
const { user,images,sendPics,delPics,setProfilePic} = props;
const [userImage, setUserImage] = useState([]);

const fileChangedHandler = (event) => {
    let files  = event.target.files[0];
    const formData = new FormData();
    formData.append('files',files);
    formData.append('user_id',user.id);
    sendPics(formData);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserImage([
          ...userImage,
          {
            id: userImage.length,
            data: reader.result,
          },
        ]);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    event.target.value = null;
}

const deletePicture = (imgId, isProfilePic) => {
   const img = {
    imgId : imgId,
    isProfilePic :isProfilePic
   }
   delPics(img);
  }
  const setProfilePicture = (imgId) => {
    setProfilePic(imgId);
  }

    return (
        <div>
            <Photo
                fileChangedHandler = {fileChangedHandler} userImage={userImage}
                images = {images} deletePicture={deletePicture} setProfilePicture={setProfilePicture}
            />
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "sendPics" : sendPics,
    "delPics" : delPics,
    "setProfilePic" :setProfilePic
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);