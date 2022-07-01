import React from 'react';
import { Image, Text } from 'react-native';
import { WeatherServiceResponse } from './types';

export const WeatherServiceReport : React.FC<{weatherServiceResponse: WeatherServiceResponse | null}> = ({weatherServiceResponse}) => {
  const resp = weatherServiceResponse;
  const country = !resp ? "" : `https://countryflagsapi.com/png/${encodeURIComponent(resp.location.country.toLowerCase())}`;
  
  return (
    !resp ? <></> : (
      <>
        <Image source={{uri: resp.current.condition.icon}} style={{ width: 50, height: 50 }}/>
        <Text>{resp.location.name}, {resp.location.country}.</Text> 
        <Text>{resp.current.condition.text}. {resp.current.temp_c} C, {resp.current.temp_f} F</Text>             
        <Text>{resp.location.localtime}</Text>      
        <Image source={{uri: country}} style={{ width: 175, height: 100 }}/>
      </>
    )
  )
}