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
            path='/weather'
            element={sharedcity ? <Weather sharedcity={sharedcity}/> : <Navigate replace to="/" />}
          />
          <Route path='/' element={<Home setSharedCity={setSharedCity} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
