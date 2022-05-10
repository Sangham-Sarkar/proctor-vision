import React from "react";
import Styles from "./spash.module.css";
import img from "../../assets/companyLogo.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <div className={Styles.Logo}>
          <img src={img} alt="" />
          <div className={Styles.CompanyName}>
            <p>Proctor</p>
            <p>Vision.</p>
          </div>
        </div>
        <p className={Styles.Context}>Welcome aboard</p>
        <p className={Styles.Context}>To the future in making</p>
        <p className={Styles.Context}>you've just become a part of it</p>
        <button className={Styles.Continue}>
          <Link to="Login">Continue &gt;</Link>
        </button>
      </div>
    </div>
  );
}
export default Home;
