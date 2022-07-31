import './App.css';
import Home from './component/Home/Home';
import Weather from './component/Weather/Weather';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [sharedcity, setSharedCity] = useState('');
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/weather-app/weather'
            element={sharedcity ? <Weather sharedcity={sharedcity}/> : <Navigate replace to="/weather-app" />}
          />
          <Route path='/weather-app' element={<Home setSharedCity={setSharedCity} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
