import { Link } from "react-router-dom";
import { data } from "./data";
import Styles from "./OnBoard.module.css";
import img from "../../assets/onboard4.svg";
import currentpage from "../../assets/pageIndication4.svg";

function OnBoard4() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.imageContainer}>
          <img className={Styles.mainImage} src={img} alt="" />
        </div>
        <p className={Styles.description}>{data[3].description}</p>
        <Link className={Styles.next} to="/Home">
          {data[3].button}
        </Link>
        <img className={Styles.Continue} src={currentpage} alt="" />
      </div>
    </div>
  );
}

export default OnBoard4;
