import React from "react";
import Styles from "./Settings.module.css";
import leftarrow from "../../assets/leftarrow.svg";
import profileImg from "../../assets/userimage.jpg";
import editIcon from "../../assets/edit.svg";
function Settings() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div>
          <img src={leftarrow} alt="" />
          <img src={profileImg} alt="" />
          <p>Samuel Doe</p>
          <p>18BIS1241</p>
          <img src={editIcon} alt="" />
          <p>Edit Profile Picture</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
