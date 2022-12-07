import axios from "axios";
import { countries } from "./Countries";
import { WeatherServiceResponse } from "./types";

//TODO: Store these constants in environment module

const API_KEY = "e8a1d606625a48088bb235114222906";
const REQUEST_TEMPLATE = `key=${API_KEY}&q=:CITY&aqi=no`;
const WEATHER_SERVICE_URL = "https://api.weatherapi.com/v1/current.json";

const randomInt = (min:number, max:number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export  const fetchRandomLocation =  async() => {
    const index = randomInt(0, countries.length-1);
    const country = countries[index];    
    const city = encodeURIComponent(country.capital);
    const request = REQUEST_TEMPLATE.replace(":CITY", city);
    const response = await axios.post<WeatherServiceResponse>(WEATHER_SERVICE_URL, request);    
    const data = response.data;
    data.current.condition.icon = 'https:' + data.current.condition.icon;
    return data;
}