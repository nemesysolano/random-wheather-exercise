import axios from "axios";
import { countries } from "./Countries";
import { WeatherServiceResponse } from "./types";
const API_KEY = "e8a1d606625a48088bb235114222906";
const REQUEST_TEMPLATE = `key=${API_KEY}&q=:CITY&aqi=no`;
const WEATHER_SERVICE_URL = "https://api.weatherapi.com/v1/current.json";
const DEFAULT_POST_HEADERS = {"Content-Type": "application/x-www-form-urlencoded"};

const randomInt = (min:number, max:number): number => {
    let result = 0; //TODO: make result a random value between min and max (inclusive)
    
    return (result as number);
}

export  const fetchRandomLocation =  async() => {
    const index = randomInt(0, countries.length-1);
    const country = countries[index];    
    const city = // TODO: Encode country.capital as URI component;   
    const request =  REQUEST_TEMPLATE.replace(":CITY", city);
    const response = await axios.post<WeatherServiceResponse>(WEATHER_SERVICE_URL, request, {headers: DEFAULT_POST_HEADERS});    
    const data = response.data;
    data.current.condition.icon = 'https:' + data.current.condition.icon;
    return data;
}