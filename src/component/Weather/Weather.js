import './Weather.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Weather({ sharedcity }) {
  const [weather, setweather] = useState('');
  const [isLoding, setIsLoding] = useState(true);

  const options = {
    method: 'GET',
    url: `https://api.weatherapi.com/v1/current.json?key=caeb363c6a9940cb97e93420222707&q=${sharedcity}&aqi=no`,
    params: sharedcity,
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setweather(response.data);
        console.log(weather);
        setIsLoding(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [sharedcity]);
  return (
    <>
      {isLoding ? (
        <div className='loading'> Loading... </div>
      ) : (
        <div className='img-bg'>
          <div className='weather-container'>
            <div>
              <h1 className='cityname'>
                {weather.location.name}, {weather.location.country}
              </h1>
              <h2 className='date'> {weather.location.localtime}</h2>
              <div className='weather-condition'>
                <img
                  src={`https:${weather.current.condition.icon}`}
                  alt='weatherImage'
                />
                <h3 className='weather-text'>
                  {weather.current.condition.text}
                </h3>
              </div>
            </div>
            <div className='weather-info'>
              <p className='temp'> {weather.current.temp_c}°</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
