import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Weathercard({tempInfo}) {

    const [weatherState, setWeatherState] = useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect (() => {
        if (weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-cloudy");
                    break;

                case "Haze": setWeatherState("wi-day-haze");
                    break;

                case "Clear": setWeatherState("wi-day-sunny");
                    break;

                case "Mist": setWeatherState("wi-dust");
                    break;

                case "Smoke": setWeatherState("wi-smoke");
                    break;

                case "Snow": setWeatherState("wi-snow");
                    break;

                case "Rain": setWeatherState("wi-rain");
                    break;

                case "Thunderstorm": setWeatherState("wi-thunderstorm");
                    break;

                case "Fog": setWeatherState("wi-fog");
                    break;
            
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    // converting the second into time

    let sec = sunset;
    let date = new Date(sec*1000);
    let newTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
       <article className='widget'>
            <div className="weatherIcon">
                <i className={`${weatherState}`}></i>
            </div>

            <div className="weatherInfo">
                <div className='temperature'>
                    <span>{temp}&deg;C</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">
                        {name}, {country}
                    </div>
                </div>
            </div>

            <div className="date">{new Date().toLocaleString()}</div>

            {/* Last Section  */}

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className='extra-info-leftside'> {newTime} PM <br />
                        Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className='extra-info-leftside'> {humidity}% <br />
                        Humidity
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className='extra-info-leftside'> {pressure} mb <br />
                            Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className='extra-info-leftside'> {speed} km/h <br />
                             Speed
                            </p>
                        </div>

                    </div>

            </div>

        </article>
    </>
  )
}

export default Weathercard;
