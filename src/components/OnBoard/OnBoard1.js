import { Link } from "react-router-dom";
import { data } from "./data";
import Styles from "./OnBoard.module.css";
import img from "../../assets/onboard1.svg";
import currentpage from "../../assets/pageIndication1.svg";
function OnBoard1() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.imageContainer}>
          <img className={Styles.mainImage} src={img} alt="" />
        </div>
        <p className={Styles.description}>{data[0].description}</p>
        <Link className={Styles.next} to="/OnBoard2">
          {data[0].button}
        </Link>
        <img src={currentpage} alt="" />
        <a href="/Home" className={Styles.Skip}>
          Skip
        </a>
      </div>
    </div>
  );
}

export default OnBoard1;
