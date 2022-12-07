import axios from "axios";
import { countries } from "./Countries"; //This is an array of
import { WeatherServiceResponse } from "./types";

//TODO: Store these constants in environment module

const API_KEY = "e8a1d606625a48088bb235114222906";
const REQUEST_TEMPLATE = `key=${API_KEY}&q=:CITY&aqi=no`;
const WEATHER_SERVICE_URL = "https://api.weatherapi.com/v1/current.json";

export  const fetchRandomLocation =  async() => {
    const index = /* generate random number between 0 and countries.length - 1 */
    const country = countries[index];    
    const city = /* encode country.capital for url */
    const request = /* replace :CITY place holder in REQUEST_TEMPLATE with city (defined in previous line) */
    const response = /* Use axios post to send the request created in the previous line*/
    const data = response.data;
    data.current.condition.icon = 'https:' + data.current.condition.icon;
    return data;
}