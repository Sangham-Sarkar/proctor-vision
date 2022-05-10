import { Link } from "react-router-dom";
import { data } from "./data";
import Styles from "./OnBoard.module.css";
import img from "../../assets/onboard2.svg";
import currentpage from "../../assets/pageIndication2.svg";

function OnBoard2() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.imageContainer}>
          <img className={Styles.mainImage} src={img} alt="" />
        </div>
        <p className={Styles.description}>{data[1].description}</p>
        <Link className={Styles.next} to="/OnBoard3">
          {data[1].button}
        </Link>
        <img src={currentpage} alt="" />
        <a href="/Home" className={Styles.Skip}>
          Skip
        </a>
      </div>
    </div>
  );
}

export default OnBoard2;
