import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img5 from "../../images/img5.png";
import "./UpdateShedule.css";

export default function UpdateShedule(props) {
  const [routeNo, setrouteNo] = useState("");
  const [time, settime] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [driverID, setdriverID] = useState("");
  const [busNo, setbusNo] = useState("");
  const [date, setdate] = useState("");

  function sendData(e) {
    e.preventDefault();

    const UpdateShedule = {
      routeNo,
      time,
      start,
      end,
      driverID,
      busNo,
      date,
    };

    axios
      .put(`http://localhost:5000/shedule/update/${routeNo}`, UpdateShedule)
      .then(() => {
        alert("Shedule updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function deleteShedule(id) {
    axios
      .delete(`http://localhost:5000/shedule/delete/${id}`)
      .then(() => {
        alert("Shedule deleted");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeading">Update Shedule</p>
        <br />
        <br />
        <p style={{ float: "left" }}>Route No</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Route Number"
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
          placeholder="start location"
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
          placeholder="end location"
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
          placeholder="Driver ID"
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
        <button className="button-16">Update</button>
        <br />
        <br />
      </form>
      <br />
      <br />
      <br />
      <br />
      <button className="button-61" onClick={() => deleteShedule(routeNo)}>delete</button>
    </div>
  );
}
