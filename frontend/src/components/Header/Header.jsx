import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Header() {
  const [style1, setStyle1] = useState("navBarDiv1Click");
  const [style2, setStyle2] = useState("navBarDiv2");
  const [style3, setStyle3] = useState("navBarDiv3");
  const [style4, setStyle4] = useState("navBarDiv4");

  function changeStyle1() {
    setStyle1("navBarDiv1Click");
    setStyle2("navBarDiv2");
    setStyle3("navBarDiv3");
    setStyle4("navBarDiv4");
  }

  function changeStyle2() {
    setStyle2("navBarDiv2Click");
    setStyle1("navBarDiv1");
    setStyle3("navBarDiv3");
    setStyle4("navBarDiv4");
  }

  function changeStyle3() {
    setStyle3("navBarDiv3Click");
    setStyle1("navBarDiv1");
    setStyle2("navBarDiv2");
    setStyle4("navBarDiv4");
  }

  function changeStyle4() {
    setStyle4("navBarDiv4Click");
    setStyle1("navBarDiv1");
    setStyle2("navBarDiv2");
    setStyle3("navBarDiv3");
  }

  return (
    <div>
      <h1 className="header">Bus Ticketing System</h1>
      <div className="bar"></div>

      <div className={style1}></div>
      <Link to="/">
        <p className="navBarText" onClick={changeStyle1}>
          Sheduling
        </p>
      </Link>

      <div className={style2}></div>
      <Link to="/drivers">
        <p className="navBarText2" onClick={changeStyle2}>
          Drivers
        </p>
      </Link>
      <div className={style3}></div>
      <Link to="/inspectors">
        <p className="navBarText3" onClick={changeStyle3}>
          Inspectors
        </p>
      </Link>
      <div className={style4}></div>
      <Link to="/viewPrice">
        <p className="navBarText4" onClick={changeStyle4}>
          Price
        </p>
      </Link>
    </div>
  );
}
