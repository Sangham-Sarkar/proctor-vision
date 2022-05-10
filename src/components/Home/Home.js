import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Home.module.css";
import DownArrow from "../../assets/downarrow.svg";
import UpArrow from "../../assets/uparrow.svg";
import disabledNotification from "../../assets/disablednotification.svg";
import notification from "../../assets/notification.svg";
import userimg from "../../assets/userimage.jpg";

function Home() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <h1>My Classes</h1>
        <div className={Styles.ClassInfo}>
          <div className={Styles.context}>
            <p>Neural Networks and Fuzzy Control</p>
            <p>CSE3013</p>
          </div>
          <img src={DownArrow} alt="" />
        </div>
        <div className={Styles.ClassInfoExtended}>
          <div className={Styles.ClassInfo}>
            <div className={Styles.context}>
              <p>IOT system Architecture</p>
              <p>ECE1029</p>
            </div>
            <img src={UpArrow} alt="" />
          </div>

          <div className={Styles.ExamInfo}>
            <p>CAT1</p>
            <p className={Styles.info}>
              22nd Dec 2020 • 9:00 am - 12:00 pm{" "}
              <img src={disabledNotification} alt="" />
            </p>
            <div className={Styles.ExamStatus}>Completed</div>
          </div>
          <div className={Styles.ExamInfo}>
            <p>CAT2</p>
            <p className={Styles.info}>
              12th Jan 2021 • 9:00 am - 12:00 pm
              <img src={notification} alt="" />
            </p>
            <Link to="/Check">
              <div className={Styles.ExamStatusActive}>Join Exam</div>
            </Link>
          </div>
          <div className={Styles.ExamInfo}>
            <p>Lab FAT</p>
            <p className={Styles.info}>
              22nd Mar 2021 • 9:00 am - 12:00 pm
              <img src={notification} alt="" />
            </p>
            <div className={Styles.ExamStatus}>Yet to start</div>
          </div>
        </div>
        <div className={Styles.footer}>
          <p>Take Demo Exam</p>
          <a href="/Settings" className={Styles.userCard}>
            <div>
              <p>Samuel Doe</p>
              <p>18BIS1241</p>
            </div>
            <img className={Styles.userimg} src={userimg} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
