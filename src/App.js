import React from 'react'
import WeatherApp from './Components/WeatherApp/WeatherApp'
import LeftPart from './Components/LeftPart/leftPart'

export default function App() {
  return (
    <div className="AppContainer">
      <div className='leftPart'>
      <LeftPart/>
      </div>   
      <div className='App'>
        <WeatherApp/>
      </div>
    </div>
  );
}
