import React from "react";
import {
  BsEye,
  BsFillCloudSunFill,
  BsSpeedometer2,
  BsWater,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

import "./Weather.scss";
function Weather() {
  const API_KEY = "fa574ade9c12b3365e10ce06f8a5a0cf";

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("Thai nguyen");
  const [data, setData] = useState([]);
  const [image, setImage] = useState("./assets/img/weather1.jpg");

  let date = new Date().toLocaleString("vi");

  useEffect(() => {
    async function fetchApi() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&
        &units=metric&appid=${API_KEY}`
        )
        .then((res) => {
          let dt = res && res.data ? res.data : [];
          setData(dt);
          setLoading(false);

          // console.log(dt);
        })
        .catch(function (error) {
          // handle error
          //   console.log(error);
        });
    }
    fetchApi();
  }, [location]);
  const handleInput = (e) => {
    // console.log(e.target.value);
    setLocation(e.target.value);
    setLoading(true);
    setImage("./assets/img/weather2.jpg");
  };
  return (
    <div className="weather">
      <div className="weather_container">
        <img src={image} alt="" className="img" />
        <input
          type="text"
          className="search"
          value={location}
          onChange={(e) => handleInput(e)}
          placeholder="Type your location"
        />
        {loading === true ? (
          <div className="loading">
            <BeatLoader loading={loading} size={50} color={"#36D7B7"} />
          </div>
        ) : (
          <div className="content">
            <h1 className="capital">
              <span className="city">
                {data.name},{data.sys.country}
              </span>
            </h1>
            <div className="time">
              <span>{date}</span>
            </div>
            <div className="temperature">
              <span>
                {data.main.temp} <sup>o</sup>C
              </span>
            </div>
            <div className="description">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />
              <span>{data.weather[0].main}</span>
              <p>{data.weather[0].description}</p>
            </div>
            <div className="more_des">
              <div className="item">
                <BsEye />
                <span>{data.visibility} m</span>
              </div>
              <div className="item">
                <BsSpeedometer2 />
                <span>{data.wind.speed} m/s</span>
              </div>
              <div className="item">
                <BsWater />
                <span>{data.main.humidity} %</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
