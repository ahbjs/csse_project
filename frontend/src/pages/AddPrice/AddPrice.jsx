import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

import "./AddPrice.css";

export default function AddPrice() {

  const [tackon, settackon] = useState("");
  const [takeoff, settakeoff] = useState("");
  const [distance, setdistance] = useState("");
  const [price, setprice] = useState("");
  const [routeNo, setRouteno] = useState("");

  function sendData(e) {
    e.preventDefault();

      const NewPrice = {
        tackon,
        takeoff,
        distance,
        price,
        routeNo
      };

      axios
        .post("http://localhost:5000/price/add", NewPrice)
        .then(() => {
          alert("New Price Added");
        })
        .catch((err) => {
          alert(err);
        });
    }

  return (
    <div>
      <Header />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeadingP">Add Price for Distance</p>
        <br />
        <br />
        <p style={{ float: "left" }}>Route Number</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="route number"
          className="formInput"
          onChange={(e) => {
            setRouteno(e.target.value);
          }}
        />
        <br/>
        <br />
        <br />
        <p style={{ float: "left" }}>Take On</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="takeon"
          className="formInput"
          onChange={(e) => {
            settackon(e.target.value);
          }}
        />
                <br />
        <br />
        <br />
        <p style={{ float: "left" }}>TakeOff</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="text"
          placeholder="takeoff"
          className="formInput"
          onChange={(e) => {
            settakeoff(e.target.value);
          }}
        />
               <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Distance (Km)</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="number"
          placeholder="distance (km)"
          className="formInput"
          onChange={(e) => {
            setdistance(e.target.value);
          }}
        />
        
        <br />
        <br />
        <br />
        <p style={{ float: "left" }}>Price (Rs)</p>
        <input
          style={{ marginLeft: "50px", marginTop: "10px" }}
          type="number"
          placeholder="rs.price"
          className="formInput"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <button className="button-16">Add Price</button>
      </form>
    </div>
  );
}
