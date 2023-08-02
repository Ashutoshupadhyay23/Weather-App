import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard';

function Tempapp() {

  const [ searchValue, setSearchValue] = useState("Ahmedabad");

  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=47c55c20d9b7775410ad2266c022eb1b`;

        const response = await fetch(url);
        const data = await response.json();

        // console.log(data)
        const {temp, humidity, pressure} = data.main;

        const {main: weathermood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country, sunset} = data.sys;

        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
        };
        
        setTempInfo(myNewWeatherInfo);

    } catch (error) {
        console.log(error);
    }

  };

  useEffect (() => {
    getWeatherInfo();
  }, []);

  return (
    <>
        <div className='wrap'>
            <div className="search">
                <input
                 type="search"
                 placeholder='Search here'
                 autoFocus
                 id='search'
                 className='searchTerm'
                 value={searchValue}
                 onChange={(e) => setSearchValue(e.target.value)}
                />

                <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                
            </div>
        </div>

        {/* Temp Card  */}

        <Weathercard tempInfo = {tempInfo}/>
        
    </>
  );
};

export default Tempapp;
