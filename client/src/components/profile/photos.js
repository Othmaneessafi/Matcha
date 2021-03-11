import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
import AddBtn from "./img/plus.svg";
import RemoveBtn from "./img/remove.svg";

export default function Photos() {
  const [userImage, setUserImage] = useState([]);

  const handleImage = (e) => {
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
    reader.readAsDataURL(e.target.files[0]);
    e.target.value = null;
  };

  const handleRemoveImage = (e) => {

      setUserImage(userImage.filter(img => img.id !== userImage[e.target.id].id))
    console.log(userImage);
  };

  var userImgs = [];
  for (var i = 0; i < 5; i++) {
    userImgs.push(
      <Grid item container sm={4} className="PhotosContainer" key={i}>
        <Grid
          item
          container
          sm={12}
          className="userImage"
          justify="flex-end"
          alignItems="flex-end"
          style={{
            backgroundImage: `url(${userImage[i] ? userImage[i].data : ""})`,
            backgroundSize: "cover",
          }}
        >
          <input
            type="file"
            name="input"
            id="input"
            key={i}
            accept="image/*"
            onChange={handleImage}
            hidden
          />
          {userImage[i] ? (
            <img src={RemoveBtn} className="addBtn" id={i} alt="userImage" onClick={handleRemoveImage} />
          ) : (
            <label htmlFor="input" className="uploadInput">
              <img src={AddBtn} key={i} className="addBtn" alt="userImage" />
            </label>
          )}
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={2}>
      {userImgs}
    </Grid>
  );
}
