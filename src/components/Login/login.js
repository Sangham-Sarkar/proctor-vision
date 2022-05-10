import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Styles from "./login.module.css";
import img from "../../assets/companyLogo.svg";

const Login = () => {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.Container}>
        <img className={Styles.logo} src={img} alt="" />
        <div className={Styles.inputContainer}>
          <TextField
            className={Styles.userName}
            id="outlined-basic"
            placeholder="Username"
            variant="standard"
          />
          <TextField
            className={Styles.password}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
        </div>
        <div className={Styles.resetAction}>
          <p>Reset Password From Default/</p>
          <p>Forgot Password</p>
        </div>
        <button className={Styles.login}>
          <Link to="/OnBoard1">Log in</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
