export interface CityLocation {
    name: string,
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface Condition {
    text: string;
    icon: string;
}

export interface CurrentWeather {
    temp_c: number;
    temp_f: number;  
    humidity: number;
    condition: Condition;
}

export interface WeatherServiceResponse {
    location: CityLocation;
    current: CurrentWeather;
}

export interface ServiceOrderResponseData {
    custNo: number
    customerName: string;
}

