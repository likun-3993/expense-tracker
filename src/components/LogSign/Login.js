import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { Outlet, Link } from "react-router-dom";

import mixpanel from "mixpanel-browser";
mixpanel.init("482c01866039108cf537c05102ef18d3", {
  debug: true,
});

function Login() {
  useEffect(() => window.analytics.page("Login Page"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false);

  const mix = () => {
    if (check) {
      mixpanel.identify(email);
      mixpanel.track("LOG IN");
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    valid();
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    valid();
  };

  const valid = () => {
    if (email !== "" && password !== "") {
      setCheck(true);
    } else setCheck(false);
  };

  useEffect(() => valid(), [email, password]);
  const p = "Login";

  return (
    <div className={styles.body}>
      <Link to="/signup">
        <div className={styles.log}>Sign Up</div>
      </Link>
      <div className={styles.contain}>
        <h1>Login Page</h1>
        <p className={styles.marker}>Email</p>
        <input
          type="email"
          className={styles.text}
          value={email}
          onChange={handleEmail}
        />
        <p className={styles.marker}>Password</p>
        <input
          type="text"
          className={styles.text}
          value={password}
          onChange={handlePassword}
        />
        <div className={styles.button} onClick={mix}>
          {check && (
            <Link to="/landing" className={styles.link} state={{ id: email }}>
              Login
            </Link>
          )}
          {!check && p}
        </div>
      </div>
    </div>
  );
}

export default Login;
