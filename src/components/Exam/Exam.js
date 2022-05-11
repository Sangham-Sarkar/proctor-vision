import React from "react";
import Styles from "./Exam.module.css";
import clock from "../../assets/clock.svg";
import questionImg from "../../assets/Questionimg.svg";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
function Exam() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.ExamInfo}>
          <div className={Styles.Time}>
            <img src={clock} alt="" />
            <p>01:33:33</p>
          </div>
          <h2>Question 1</h2>
          <div className={Styles.question}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in
              id diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut
              placerat gravida. Dolor velit sed non in semper. Enim etiam sem
              nunc fermentum sollicitudin tellus. Sagittis cum nec justo leo
              semper ut sollicitudin. Gravida pellentesque dis.
            </p>
            <img src={questionImg} className={Styles.questionimg} alt="" />
          </div>
          <div className={Styles.option}>
            <input type="radio" name="entry" value="1" />
            <label for="1"> Lorem ipsum dolor</label>
          </div>
          <div className={Styles.option}>
            <input type="radio" name="entry" value="2" />
            <label for="2"> Lorem ipsum dolor</label>
          </div>

          <div className={Styles.option}>
            <input type="radio" name="entry" value="3" />
            <label for="3"> Lorem ipsum dolor</label>
          </div>
          <div className={Styles.option}>
            <input type="radio" name="entry" value="4" />
            <label for="4"> Lorem ipsum dolor</label>
          </div>
        </div>
        <div className={Styles.examStats}>
          <div className={Styles.examHeader}>
            <div className={Styles.button}>Exit</div>
            <div className={Styles.button}>Submit</div>
          </div>
          <div className={Styles.Examoption}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>

          <div className={Styles.page}>
            <img src={leftarrow} alt="" />
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <img src={rightarrow} alt="" />
          </div>
          <div className={Styles.changePage}>
            <div className={Styles.previous}>
              <img className={Styles.arrow} src={leftarrow} alt="" />
              <p>Previous</p>
            </div>
            <div className={Styles.next}>
              <p>Next</p>
              <img className={Styles.arrow} src={rightarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
