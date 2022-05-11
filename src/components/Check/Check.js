import React from "react";
import Styles from "./Check.module.css";
import leftarrow from "../../assets/leftarrow.svg";
import userimg from "../../assets/userimage.jpg";
import examCheckImg from "../../assets/examCheck.svg";
import check from "../../assets/correct.svg";
import wrong from "../../assets/wrong.svg";
import loading from "../../assets/loading.svg";

function Check() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.Header}>
          <div className={Styles.CurrentExam}>
            <a href="/Home">
              <img src={leftarrow} alt="" />
            </a>
            <h2>Gradute Record Examination</h2>
          </div>

          <div className={Styles.Date}>
            <p>17th Dec 2020</p>
            <p>9:00 am - 12:00 pm</p>
          </div>
        </div>
        <div className={Styles.ExamCheck}>
          <img src={examCheckImg} alt="" />
          <div className={Styles.Status}>
            <p>
              <img src={check} alt="" />
              Webcam check
            </p>
            <p>
              <img src={check} alt="" />
              Mic testing
            </p>
            <p>
              <img src={wrong} alt="" />a Iris sync
            </p>
            <p>
              <img src={wrong} alt="" />
              BT / Alien hardware detection
            </p>
            <p>
              <img src={check} alt="" />
              QR / Virtual Machine detection
            </p>
            <p>
              <img src={loading} alt="" />
              Browser lock
            </p>
            <p>
              <img src={loading} alt="" />
              Screen capture
            </p>
            <p>
              <img src={loading} alt="" />
              Identity authentication
            </p>
            <div>
              <a className={Styles.startExam} href="/Exam">
                Start Exam
              </a>
            </div>
          </div>
        </div>

        <a href="/Settings" className={Styles.userCard}>
          <div>
            <p>Samuel Doe</p>
            <p>18BIS1241</p>
          </div>
          <img className={Styles.userimg} src={userimg} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Check;
