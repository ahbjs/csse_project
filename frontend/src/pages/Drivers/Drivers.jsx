import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Drivers.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";



export default function Drivers() {
  const [search, setsearch] = useState("");
  const [searchRoute,setsearchRoute] = useState("");
  const [searchDeport,setsearchDeport] = useState("");


  const [driver, setdriver] = useState([
    {
      driverID:"",
      driverName:"",
      driverDoB:"",
      driverNic:"",
      driverContactNo:"",
      driverDeport:"",
      driverRoute:""
    },
  ]);

  useEffect(() => {
    function getDrivers() {
      axios
        .get("http://localhost:5000/driver/get")
        .then((res) => {
          console.log(res);
          setdriver(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getDrivers();
  }, []);

  const renderClass = (driver, id) => {
    return (
      <div>
        <div class="table-content">
          <div class="table-row" key={id}>
            <div class="table-data">{driver.driverID}</div>
            <div class="table-data">{driver.driverName}</div>
            <div class="table-data">{driver.driverContactNo}</div>
            <div class="table-data">{driver.driverDeport}</div>
            <div class="table-data">{driver.driverRoute}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="table__div">
        <p className="table__title">Drivers</p>
        <Link to="/addDriver">
          <button className="button-10">Add New Driver</button>
        </Link>
        <br/>
        <br/>
        <div className="search" style={{ float: "left" }}>
          <input
            placeholder="search"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>
        <div style={{ float: "left", marginLeft: "500px" }}>
          <p
            style={{
              marginTop: "-25px",
              marginBottom: "3px",
              marginLeft: "-95px",
            }}
            className="byRoute"
          >
            By Route
          </p>
          <select
            placeholder="Role"
            style={{ width: "150px" }}
            onChange={(event) => setsearchRoute(event.target.value)}
          >
            <option value="" disabled selected hidden>
              Role
            </option>
            <option value="112">112</option>
            <option value="443">443</option>
          </select>
        </div>

        <div style={{ float: "left", marginLeft: "680px", marginTop: "-22px" }}>
          <p
            style={{
              marginTop: "-25px",
              marginBottom: "3px",
              marginLeft: "-95px",
            }}
            className="byRoute"
          >
            By Deport
          </p>
          <select
            placeholder="Role"
            style={{ width: "150px" }}
            onChange={(event) => setsearchDeport(event.target.value)}
          >
            <option value="" disabled selected hidden>
              select
            </option>
            <option value="colombo west">colombo west</option>
            <option value="kurunegala">kurunegala</option>
          </select>
        </div>

        <br />
        <br />
        <div>
          <div class="table">
            <div class="table-header">
              <div class="header__item">
                <a id="name" class="filter__link" href="#">
                  Driver ID
                </a>
              </div>
              <div class="header__item">
                <a id="wins" class="filter__link filter__link--number" href="#">
                  Name
                </a>
              </div>
              <div class="header__item">
                <a
                  id="draws"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Contact No
                </a>
              </div>
              <div class="header__item">
                <a
                  id="losses"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Deport
                </a>
              </div>
              <div class="header__item">
                <a
                  id="total"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Allocated Route
                </a>
              </div>
            </div>
            {driver
              .filter((val) => {
                if (search === "" && searchRoute === "" && searchDeport === "")
                  return val;
                else if (
                  val.driverID.toLowerCase().includes(search.toLowerCase()) &&
                  val.driverRoute
                    .toLowerCase()
                    .includes(searchRoute.toLowerCase()) &&
                  val.driverDeport
                    .toLowerCase()
                    .includes(searchDeport.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(renderClass)}
          </div>
        </div>
      </div>
      
    </div>
  );
}
