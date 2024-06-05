import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp = () => {
    let apiKey="f03a27e994dbb0a52810a60b9d81e070";
    const [wicon,setWicon]=useState(cloud_icon);
    const search = async()=>{
        const element=document.getElementsByClassName("cityInput");
        if(element[0].value=="") {
           return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
        let response= await fetch(url);
        let data = await response.json();
   
        const humidity=document.getElementsByClassName("humidityPercent");
        const wind=document.getElementsByClassName("windRate");
        const temprature=document.getElementsByClassName("weatherTemp");
        const location=document.getElementsByClassName("weatherLocation");
      
        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML= Math.floor(data.wind.speed)+" km/h";
        temprature[0].innerHTML=Math.floor(data.main.temp)+ " °c";
        location[0].innerHTML=data.name;
        
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if((data.weather[0].icon==="02d" || data.weather[0].icon==="02n")){
            setWicon(cloud_icon)
        }
        else if((data.weather[0].icon==="03d" || data.weather[0].icon==="03n")){
            setWicon(drizzle_icon)
        }
        else if((data.weather[0].icon==="10d" || data.weather[0].icon==="10n")){
            setWicon(rain_icon)
        }
        else if((data.weather[0].icon==="13d" || data.weather[0].icon==="13n")){
            setWicon(snow_icon)
        }
         else if((data.weather[0].icon==="02d" || data.weather[0].icon==="02n")){
            setWicon(cloud_icon)
        }else{
            setWicon(clear_icon)
        }
    }
  return (
    <div className="container">
        <div className="topBar">
           <input type="text" className='cityInput' placeholder='Search'/>
                <div className="searchIcon">
                    <img src={search_icon} alt="" onClick={()=>{search()}} />
                </div>
           
        </div>
        <div className="weatherImg">
            <img src={wicon} alt="" />
        </div>
        <div className="weatherTemp">
            24°C
        </div>

        <div className="weatherLocation">London</div>
        
        <div className="dataContainer">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidityPercent">
                            64%
                        </div>
                        <div className="text">
                            Humidity
                        </div>

                    </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="windRate">
                            18km/h
                        </div>
                        <div className="text">
                            Wind Speed
                        </div>

                    </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp
