import React from "react";
import Styles from "./Settings.module.css";
import leftarrow from "../../assets/leftarrow.svg";
import downarrow from "../../assets/downarrow.svg";
import profileImg from "../../assets/userimage.jpg";
import editIcon from "../../assets/edit.svg";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

function Settings() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.Header}>
          <div className={Styles.info}>
            <a href="/Home">
              <img src={leftarrow} alt="" />
            </a>
            <img src={profileImg} alt="" />
            <p className={Styles.profileName}>Samuel Doe</p>
            <p className={Styles.profileNo}>18BIS1241</p>
          </div>
          <div className={Styles.edit}>
            <img src={editIcon} alt="" />
            <p>Edit Profile Picture</p>
          </div>
        </div>
        <h1>General Settings</h1>
        <div className={Styles.SettingsContainer}>
          <div className={Styles.SettingDisplay}>
            <p className={Styles.name}>Settings 1</p>
            <img src={downarrow} alt="" />
          </div>
          <hr></hr>
          <div className={Styles.SettingDisplay}>
            <p className={Styles.name}>Settings 2</p>
            <div className={Styles.radioButton}>
              <Switch {...label} />
            </div>
          </div>
          <hr></hr>
          <div className={Styles.SettingDisplay}>
            <p className={Styles.name}>Settings 2</p>
            <div className={Styles.radioButton}>
              <Switch {...label} defaultChecked />
            </div>
          </div>
        </div>

        <h1>General Settings</h1>
        <div className={Styles.SettingsContainer}>
          <div className={Styles.SettingDisplay}>
            <p className={Styles.name}>Settings 1</p>
            <p className={Styles.viewMore}>View More</p>
          </div>
          <hr></hr>
          <div className={Styles.SettingDisplay}>
            <p className={Styles.name}>Settings 2</p>
            <div className={Styles.radioButton}>
              <Switch {...label} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
