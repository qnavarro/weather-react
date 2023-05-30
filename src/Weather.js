import React from "react";

export default function Weather(props) {
	if (props.temp) {
		return (
			<ul>
				<li>
					The temperature in {props.city} is {Math.round(props.temp)}°C
				</li>
				<li>
					The Weather Description in in {props.city} is {props.desc}
				</li>
				<li>
					The Humidity in {props.city} is {props.humidity}%
				</li>
				<li>
					The Wind Speed in {props.city} is {props.wind}km/h
				</li>
				<li>
					<img
						src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
						alt={props.description}
					/>
				</li>
			</ul>
		);
	}
}
