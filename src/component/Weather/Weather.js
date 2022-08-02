import './Weather.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie, PieChart, Cell } from 'recharts';


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
              <div className='temp'> {weather.current.temp_c}°</div>
            </div>
          </div>
          <div className='humidity-chart'>
            <div className='scoreTitle'>Humidity</div>
            <div className='percentage'>
                <div className='percentageDescription'><span className='perScore'>{weather.current.humidity}</span> </div>
            </div>
            <PieChart className='test' width={65} height={75}>
              <Pie
                data={[ { name: 'humidity', value: weather.current.humidity } ]}
                cx={85}
                cy={85}
                innerRadius={70}
                outerRadius={80}
                fill='#8884d8'
                paddingAngle={5}
                dataKey='value'
              >
                <Cell fill='#FFF' />
                <Cell fill='#8884d8' />
              </Pie>
            </PieChart>
        </div>
        </div>

      )}

    </>
  );
}

export default Weather;
