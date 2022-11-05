import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img5 from "../../images/img5.png";

import "./AddInspector.css";

export default function AddMessage() {
  const [inspectorID, setinspectorID] = useState("");
  const [inspectorName, setinspectorName] = useState("");
  const [inspectorDoB, setinspectorDoB] = useState("");
  const [inspectorNic, setinspectorNic] = useState("");
  const [inspectorContactNo, setinspectorContactNo] = useState("");
  const [inspectorDeport, setinspectorDeport] = useState("");
  const [inspectorRoute, setinspectorRoute] = useState("");

  function sendData(e) {
    e.preventDefault();

    const NewInspector = {
      inspectorID,
      inspectorName,
      inspectorDoB,
      inspectorNic,
      inspectorContactNo,
      inspectorDeport,
      inspectorRoute,
    };

    axios
      .post("http://localhost:5000/inspector/add", NewInspector)
      .then(() => {
        alert("New Inspector Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeading">Add Inspector</p>
        <br />
        <br />
        <p style={{ float: "left" }}>Inspector ID</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="Inspector ID"
          className="formInput"
          onChange={(e) => {
            setinspectorID(e.target.value);
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
            setinspectorName(e.target.value);
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
            setinspectorDoB(e.target.value);
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
            setinspectorNic(e.target.value);
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
            setinspectorContactNo(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Address</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="address"
          className="formInput"
          onChange={(e) => {
            setinspectorDeport(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Allocated Route</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="route"
          className="formInput"
          onChange={(e) => {
            setinspectorRoute(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <button className="button-16">Add Inspector</button>
      </form>
    </div>
  );
}
