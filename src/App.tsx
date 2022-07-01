/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { getOrders } from './OrdersService';
import { Section } from './Section';
import { WeatherServiceResponse } from './types';
import { fetchRandomLocation } from './WeatherService';
import { WeatherServiceReport } from './WeatherServiceReport';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [weatherServiceResponse, setWeatherServiceResponse] = useState<WeatherServiceResponse | null>(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const refreshResport = async () => {   
    const weatherServiceResponse = await fetchRandomLocation();
    const serviceOrderResponse = await getOrders();

    setWeatherServiceResponse(weatherServiceResponse);

  }

  const onGetReportPress = () => {
    refreshResport();
  }

  useEffect(() => {
    refreshResport();
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Random Weather Service">
            <Button title='Get Report' onPress={onGetReportPress}/>            
          </Section>
          <Section title="Report">
            <WeatherServiceReport weatherServiceResponse={weatherServiceResponse} />
          </Section>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  highlight: {
    fontWeight: '700',
  },
});

export default App;
