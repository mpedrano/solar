import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import styles from '../styles/Home.module.css';
import sunny from '../../public/icons/sunny.svg';
import cloudy from '../../public/icons/cloudy.svg';
import rainy from '../../public/icons/rainy.svg';
import thunderstorm from '../../public/icons/thunderstorm.svg';
import snow from '../../public/icons/snow.svg';

export default function Home() {
  const [location, setLocation] = useState<string>("");
  const [currentData, setCurrentData] = useState<ICurrent | null>(null);
  const [forecastData, setForecastData] = useState<IForecast | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_API;
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

  const handleSearch = async () => {
    try {
      const currentRes = await axios.get(currentUrl);
      const forecastRes = await axios.get(forecastUrl);

      setCurrentData(currentRes.data);
      setForecastData(forecastRes.data);

    } catch (error) {
      console.error(error);
    }
  };

  const currentDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const forecastDate = (dateString: string) => {
    const date = new Date(Date.parse(dateString));
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Clear':
        return sunny
      case 'Clouds':
        return cloudy
      case 'Rain':
        return rainy
      case 'Thunderstorm':
        return thunderstorm
      case 'Snow':
        return snow
      default:
        return sunny
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
      <header className={styles.header}>
        <h1>OpenWeather</h1>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      <div className={styles.data}>
        {currentData && (
          <div className={styles.current}>
            <div>
              <p className={styles.celsius}>{Math.round(currentData.main.temp - 273.15).toFixed(1)}°C</p>
              <p className={styles.city}>{currentData.name}</p>
            </div>
            <div className={styles.info}>
              <Image
                src={getIcon(currentData.weather[0].main)}
                alt={currentData.weather[0].main}
                className={styles.bigIcon}
                width={100}
                height={100}
              />
              <p>{currentData.weather[0].main}</p>
              <p>Wind speed: {currentData.wind.speed}</p>
              <p>Last Updated: {currentDate(currentData.dt)}</p>
            </div>
          </div>
        )}
        {
          currentData ? <div>
            {forecastData && (
              <div className={styles.forecast}>
                {forecastData.list
                  .filter((_, index) => index % 8 === 0)
                  .slice(0, 6)
                  .map((forecast) => (
                    <div key={forecast.dt_txt} className={styles.card}>
                      <p>{forecastDate(forecast.dt_txt)}</p>
                      <Image
                        src={getIcon(forecast.weather[0].main)}
                        alt={forecast.weather[0].main}
                        className={styles.smallIcon}
                        width={50}
                        height={50}
                      />
                      <p>{Math.round(forecast.main.temp - 273.15)}°C</p>
                      <p>{forecast.weather[0].main}</p>
                      <p>{forecast.weather[0].description}</p>
                      <p>Wind: {forecast.wind.speed}</p>
                    </div>
                  ))}
              </div>
            )} </div> :
            <div className={styles.default}>
              Enter location to view weather
            </div>
        }
      </div>

      <footer className={styles.footer}>
        <h1>Created by Mariela</h1>
        <p>2022 - 2024</p>
      </footer>
    </main>
  );
}
