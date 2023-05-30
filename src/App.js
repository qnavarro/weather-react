import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
	const [city, setCity] = useState(null);
	const [temp, setTemp] = useState(null);
	const [desc, setDesc] = useState(null);
	const [humidity, setHumidity] = useState(null);
	const [wind, setWind] = useState(null);
	const [icon, setIcon] = useState(null);
	const [search, setSearch] = useState(null);

	function showWeather(response) {
		setTemp(response.data.main.temp);
		setDesc(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setIcon(response.data.weather[0].icon);
		setSearch(response.data.name);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault(event);
		const apiKey = "d55c48b1d5bef2cd3c926fefba853e0e";
		const units = "metric";
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(showWeather);
	}

	return (
		<div className="App">
			<h1> Weather Search Engine </h1>
			<form onSubmit={handleSubmit}>
				<input type="search" placeholder="type a city" onChange={updateCity} />
				<input type="submit" value="Search" />
			</form>
			<div>
				<Weather
					city={search}
					temp={temp}
					desc={desc}
					humidity={humidity}
					wind={wind}
					icon={icon}
				/>
			</div>
		</div>
	);
}
