import React from "react";
import styles from "./header.module.css";
import searchIcon from "../../assets/search.svg";
function Header() {
  return (
    <div className={styles.container}>
      <p>Proctor Vision</p>
      <div className={styles.searchContainer}>
        <img src={searchIcon} alt="" />
        <input className={styles.search} type="text" label="Search" />
      </div>
      <div className={styles.defaultButtonContainer}>
        <div className={styles.defaultButton}>_</div>
        <div className={styles.defaultButton}>□</div>
        <div className={styles.defaultButton}>x</div>
      </div>
    </div>
  );
}

export default Header;
