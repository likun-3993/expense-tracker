import React from "react";
import Exp from "../Expenses/Exp";
import Forms from "../Forms/Forms";
import styles from "../../app.module.css";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import mixpanel from "mixpanel-browser";

function Main({ receiver, update }) {
  const location = useLocation();
  const { id } = location.state;

  const mix = () => {
    // mixpanel.identify(id);
    mixpanel.track("LOG OUT");
    mixpanel.reset();
  };

  // console.log(id);

  return (
    <div>
      <div className={styles.header}>
        <Link to="/" className={styles.link}>
          <span className={styles.log} onClick={mix}>
            Logout
          </span>
        </Link>
      </div>
      <h3>Add your Data</h3>
      <Forms param={receiver} id={id} />
      <h3>Here is your list</h3>
      <Exp data={update} />
    </div>
  );
}

export default Main;
