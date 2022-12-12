import axios from "axios";
import { countries } from "./Countries";
import { WeatherServiceResponse } from "./types";
const WEATHER_SERVICE_URL = "http://localhost:3000/weather";

const randomInt = (min:number, max:number): number => {
    
    let result = 0; //TODO: Generate a non-negative integer between min and max and assigned to result.
    return (result as number);
}

export  const fetchRandomLocation =  async() => {
    const index = randomInt(0, countries.length-1);
    const country = countries[index];    
    const city = //TODO: Encode country.capital such that we can include it in the URL below.;
    const response = await axios.get<WeatherServiceResponse>(`${WEATHER_SERVICE_URL}/${city}`);    
    const data = response.data;
    data.current.condition.icon =  data.current.condition.icon;
    return data;
}