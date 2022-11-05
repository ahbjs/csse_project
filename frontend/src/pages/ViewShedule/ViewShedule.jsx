import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewShedule.css";
import { BrowserRouter, Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img1 from "../../images/3img.jpg";

export default function ViewShedule() {
  const[search, setsearch] = useState("");
  const [searchRoute, setsearchRoute] = useState("");
  const [searchDeport, setsearchDeport] = useState("");

  const [shedule, setshedule] = useState([
    {
      routeNo: "",
      time: "",
      start: "",
      end: "",
      driverID: "",
      busNo: "",
      date: "",
    },
  ]);

  useEffect(() => {
    function getShedules() {
      axios
        .get("http://localhost:5000/shedule/get")
        .then((res) => {
          console.log(res);
          setshedule(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getShedules();
  }, []);

  const renderClass = (shedule, id) => {
    return (
      <div>
        <div class="table-content">
          <div class="table-row" key={id}>
            <div class="table-data">{shedule.routeNo}</div>
            <div class="table-data">{shedule.time}</div>
            <div class="table-data">{shedule.start}</div>
            <div class="table-data">{shedule.end}</div>
            <div class="table-data">{shedule.driverID}</div>
            <div class="table-data">{shedule.busNo}</div>
            <div class="table-data">{shedule.date}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="table__div">
        <p className="table__title">Time Shedule</p>
        <Link to="/addRoute">
          <button className="button-64">Add New Shedule</button>
        </Link>
        <Link to="/updateshedule">
          <button className="button-79">Update Shedule</button>
        </Link>
        <br />
        <br />
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
            Shedule
          </p>
          <select
            placeholder="Role"
            style={{ width: "150px" }}
            onChange={(event) => setsearchRoute(event.target.value)}
          >
            <option value="" disabled selected hidden>
              select
            </option>
            <option value="112">112</option>
            <option value="443">443</option>
          </select>
        </div>

        <br />
        <br />
        <div>
          <div class="table">
            <div class="table-header">
              <div class="header__item">
                <a id="name" class="filter__link" href="#">
                  Time
                </a>
              </div>
              <div class="header__item">
                <a id="wins" class="filter__link filter__link--number" href="#">
                  RouteNo
                </a>
              </div>
              <div class="header__item">
                <a
                  id="draws"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Start
                </a>
              </div>
              <div class="header__item">
                <a
                  id="losses"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Destination
                </a>
              </div>
              <div class="header__item">
                <a
                  id="total"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  DriverID
                </a>
              </div>
              <div class="header__item">
                <a
                  id="total"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Bus No
                </a>
              </div>
              <div class="header__item">
                <a
                  id="total"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Last Updated Date
                </a>
              </div>
            </div>
            {shedule
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.start.toLowerCase().includes(search.toLowerCase())
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
