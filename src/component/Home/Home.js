import "./Home.css";
import logo from "./logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setSharedCity }) {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handelSubmit = (e) => {
    setSharedCity(city);
    navigate('/weather-app/weather');
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <p className="title">Check the weather in your city</p>
        </header>
        <div className="container">
          <div className="city-name">
            <input
              type="text"
              placeholder="Enter your city"
              onChange={handleChange}
            />
            <button className="submit" onClick={handelSubmit}>
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
