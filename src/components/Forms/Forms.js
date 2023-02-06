import React, { useState } from "react";
import "./Forms.css";
import mixpanel from "mixpanel-browser";

mixpanel.init("482c01866039108cf537c05102ef18d3", {
  debug: true,
});

let Forms = (props) => {
  let [formTitle, setTitle] = useState("");

  let [formAmount, setAmount] = useState("");

  let [formDate, setDate] = useState("");

  const mix = () => {
    // mixpanel.identify(props.id);
    mixpanel.track("Expenses", {
      title: formTitle,
      date: formDate,
      amount: formAmount,
    });
  };

  const formData = () => {
    window.analytics.track("segment_Expenses", {
      title: formTitle,
      date: formDate,
      amount: formAmount,
    });
  };

  let saveTitle = (event) => {
    setTitle(event.target.value);
  };

  let saveDate = (event) => {
    setDate(event.target.value);
  };

  let saveAmount = (event) => {
    setAmount(event.target.value);
  };

  let reloader = (event) => {
    event.preventDefault();
    const obj = {
      title: formTitle,
      amount: formAmount,
      date: new Date(formDate),
    };

    props.param(obj);
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={reloader} className="formBody">
        <div className="content">
          <label>enter the title :</label>
          <input type="text" value={formTitle} onChange={saveTitle} />
          <br />
        </div>
        <div className="content">
          <label>enter the date :</label>
          <input type="date" value={formDate} onChange={saveDate} />
          <br />
        </div>
        <div className="content">
          <label>enter the amount :</label>
          <input type="number" value={formAmount} onChange={saveAmount} />
          <br />
        </div>
        <button type="submit" onClick={formData}>
          Add to Expenses
        </button>
      </form>
    </div>
  );
};

export default Forms;
