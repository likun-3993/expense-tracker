import React, { useEffect, useState } from "react";
import Login from "./components/LogSign/Login";
import Signup from "./components/LogSign/Signup";
import Land from "./components/Land";
import Main from "./components/Dashboard/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mixpanel from "mixpanel-browser";
mixpanel.init("482c01866039108cf537c05102ef18d3", {
  debug: true,
});

let exp = [
  {
    id: "e1",
    title: "college fees",
    amount: 40000,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e2",
    title: "books",
    amount: 560,
    date: new Date(2022, 5, 15),
  },
  {
    id: "e3",
    title: "hostel",
    amount: 14000,
    date: new Date(2022, 5, 18),
  },
  {
    id: "e4",
    title: "food",
    amount: 2000,
    date: new Date(2022, 5, 24),
  },
];

let App = () => {
  let [update, setUpdate] = useState(exp);

  // useEffect(() => mixpanel.track("new app"), []);1

  let receiver = (newData) => {
    const finalObj = {
      id: Math.random().toString(),
      ...newData,
    };
    const finalData = [finalObj, ...update];
    setUpdate(finalData);
    console.log(finalData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/landing"
          element={<Main receiver={receiver} update={update} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
