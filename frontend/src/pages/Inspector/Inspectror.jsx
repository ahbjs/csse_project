import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Inspector.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Inspector() {
  const [search, setsearch] = useState("");
  const [searchRoute, setsearchRoute] = useState("");
  const [searchDeport, setsearchDeport] = useState("");

  const [inspector, setinspector] = useState([
    {
      inspectorID: "",
      inspectorName: "",
      inspectorDoB: "",
      inspectorNic: "",
      inspectorContactNo: "",
      inspectorDeport: "",
      inspectorRoute: "",
    },
  ]);

  useEffect(() => {
    function getInspector() {
      axios
        .get("http://localhost:5000/inspector/get")
        .then((res) => {
          console.log(res);
          setinspector(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getInspector();
  }, []);

  const renderClass = (inspector, id) => {
    return (
      <div>
        <div class="table-content">
          <div class="table-row" key={id}>
            <div class="table-data">{inspector.inspectorID}</div>
            <div class="table-data">{inspector.inspectorName}</div>
            <div class="table-data">{inspector.inspectorContactNo}</div>
            <div class="table-data">{inspector.inspectorDeport}</div>
            <div class="table-data">{inspector.inspectorRoute}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="table__div">
        <p className="table__title">Inspectors</p>
        <Link to="/addInspector">
          <button className="button-10">Add New Inspector</button>
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
                  Inspector ID
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
            {inspector
              .filter((val) => {
                if (search === "" && searchRoute === "" && searchDeport === "")
                  return val;
                else if (
                  val.inspectorID.toLowerCase().includes(search.toLowerCase()) &&
                  val.inspectorRoute
                    .toLowerCase()
                    .includes(searchRoute.toLowerCase()) &&
                  val.inspectorDeport
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
