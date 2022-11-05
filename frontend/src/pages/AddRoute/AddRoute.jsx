import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddRoute.css"

import Header from "../../components/Header/Header";

export default function AddRoute() {

  const [routeNo, setrouteNo] = useState("");
  const [time, settime] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [driverID, setdriverID] = useState("");
  const [busNo, setbusNo] = useState("");
  const [date, setdate] = useState("");

  function sendData(e) {
    e.preventDefault();
      const NewRoute = {
        routeNo,
        time,
        start,
        end,
        driverID,
        busNo,
        date
      };

      axios
        .post("http://localhost:5000/shedule/add", NewRoute)
        .then(() => {
          alert("New Route Added");
        })
        .catch((err) => {
          alert(err);
        });
    }

  return (
    <div>
      <Header />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeading">Add New Time Shedule</p>
        <br />
        <br />
        <p style={{ float: "left" }}>Route No</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Route number"
          className="formInput"
          onChange={(e) => {
            setrouteNo(e.target.value);
          }}
        />
                <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Time</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="time"
          placeholder="time"
          className="formInput"
          onChange={(e) => {
            settime(e.target.value);
          }}
        />
               <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Start</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="started location"
          className="formInput"
          onChange={(e) => {
            setstart(e.target.value);
          }}
        />
        
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>End</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="End location"
          className="formInput"
          onChange={(e) => {
            setend(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Driver ID</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="driverID"
          className="formInput"
          onChange={(e) => {
            setdriverID(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Bus No</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Bus number"
          className="formInput"
          onChange={(e) => {
            setbusNo(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Date</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="date"
          placeholder="date"
          className="formInput"
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <button className="button-16">Add Shedule</button>
        <br />
        <br />
      </form>
    </div>
  );
}
