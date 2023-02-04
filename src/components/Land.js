import React from "react";
import mixpanel from "mixpanel-browser";
import { Outlet, Link } from "react-router-dom";
import styles from "./Land.module.css";

mixpanel.init("482c01866039108cf537c05102ef18d3", {
  debug: true,
});

const Segment = () => {
  analytics.track("segment test event", {
    title: "tracking call from segment",
    industry: "Computer Science",
  });
};

function Land() {
  const mix = () => {
    mixpanel.track("Land page");
  };

  return (
    <div className={styles.container}>
      <div>Welcome to Personal Expense Tracker</div>

      <Link to="/login" className={styles.link}>
        <span className={styles.butt} onClick={mix}>
          Get Started with me again
        </span>
        <span className={styles.butt} onClick={Segment}>
          Get Started segent data
        </span>
      </Link>

      <Outlet />
    </div>
  );
}

export default Land;
