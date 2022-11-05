import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ViewPrice.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";



export default function ViewPrice() {
  const [search, setsearch] = useState("");
  const [searchRoute,setsearchRoute] = useState("");


  const [price, setprice] = useState([
    {
      tackon: "",
      takeoff: "",
      distance: "",
      price: ""
    },
  ]);

  useEffect(() => {
    function getPrice() {
      axios
        .get("http://localhost:5000/price/get")
        .then((res) => {
          console.log(res);
          setprice(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getPrice();
  }, []);

  const renderClass = (price, id) => {
    return (
      <div>
        <div class="table-content">
          <div class="table-row" key={id}>
            <div class="table-data">{price.tackon}</div>
            <div class="table-data">{price.takeoff}</div>
            <div class="table-data">{price.distance}</div>
            <div class="table-data">{price.price}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="table__div">
        <p className="table__title">Prices</p>
        <Link to="/addPrice">
          <button className="button-10">Add New Price</button>
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
              Route
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
                  Takeon
                </a>
              </div>
              <div class="header__item">
                <a id="wins" class="filter__link filter__link--number" href="#">
                  Takeoff
                </a>
              </div>
              <div class="header__item">
                <a
                  id="draws"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Distance
                </a>
              </div>
              <div class="header__item">
                <a
                  id="losses"
                  class="filter__link filter__link--number"
                  href="#"
                >
                  Price
                </a>
              </div>
            </div>
            {price
              .filter((val) => {
                if (search === "" && searchRoute === "") return val;
                else if (
                  val.tackon.toLowerCase().includes(search.toLowerCase()) &&
                  val.takeoff.toLowerCase().includes(searchRoute.toLowerCase())
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
