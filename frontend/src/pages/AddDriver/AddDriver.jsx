import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

import "./AddDriver.css";

export default function AddSelling() {

  const [driverID, setdriverID] = useState("");
  const [driverName, setdriverName] = useState("");
  const [driverDoB, setdriverDoB] = useState("");
  const [driverNic, setdriverNic] = useState("");
  const [driverContactNo, setdriverContactNo] = useState("");
  const [driverDeport, setdriverDeport] = useState("");
  const [driverRoute, setdriverRoute] = useState("");


  function sendData(e) {
    e.preventDefault();

      const NewDriver = {
        driverID,
        driverName,
        driverDoB,
        driverNic,
        driverContactNo,
        driverDeport,
        driverRoute
      };

      axios
        .post("http://localhost:5000/driver/add", NewDriver)
        .then(() => {
          alert("New Driver Added");
        })
        .catch((err) => {
          alert(err);
        });
    }

  return (
    <div>
      <Header />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeading">Add Driver</p>
        <br />
        <br />
        <p style={{ float: "left" }}>Driver ID</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="DriverID"
          className="formInput"
          onChange={(e) => {
            setdriverID(e.target.value);
          }}
        />
                <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Name</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="name"
          className="formInput"
          onChange={(e) => {
            setdriverName(e.target.value);
          }}
        />
               <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Date of Birth</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="date"
          placeholder="DoB"
          className="formInput"
          onChange={(e) => {
            setdriverDoB(e.target.value);
          }}
        />
        
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>NIC No</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="NIC number"
          className="formInput"
          onChange={(e) => {
            setdriverNic(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Contact No</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="number"
          placeholder="contact number"
          className="formInput"
          onChange={(e) => {
            setdriverContactNo(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Address</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Address"
          className="formInput"
          onChange={(e) => {
            setdriverDeport(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Allocated Route</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Route"
          className="formInput"
          onChange={(e) => {
            setdriverRoute(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <button className="button-16">Add Driver</button>
      </form>
    </div>
  );
}
