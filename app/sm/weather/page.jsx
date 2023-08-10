'use client'
import * as Tabs from '@radix-ui/react-tabs';
import { useState, useEffect } from 'react';
import axios from 'axios'

import Weather from "../../../components/weather/weather"
import Current from "@components/weather/current"
import Forecast from "@components/weather/Forecast"

const page = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('Ankara')

 

  const api = `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a`
  let dailyApi = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a`

  useEffect(() => {
    // const api = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a'
    // axios.get(api).then((response) => {
    //     const weatherData = response.data;
    //     setData(weatherData)
    //     console.log(weatherData)
    // }).catch(error => {
    //     console.error('Error fetching weather data:', error);
    // })
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a`);
        // setForecastData(response.data);
        setData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };
    

    fetchForecastData();
  

  }, []);
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
        axios.get(dailyApi).then((response) => {
            const weatherData = response.data;
            setData(weatherData)
            console.log(weatherData)
        }).catch(error => {
            console.error('Error fetching weather data:', error);
        })
        setLocation('')    //setting location to empty after entering location
    }
}


  return (
    <div className='p-3'>
      <div>
        <input id="table-search" className="block p-2 my-2 text-sm  border border-gray-300 rounded-lg w-80  focus:ring-blue-500 focus:border-blue-500 "
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>


      <Tabs.Root className=' gap-1 ' defaultValue="current">
        <Tabs.List className='flex shrink-0 mb-2 bg-sky-50 rounded-lg  p-1' aria-label="Manage your account">
          <Tabs.Trigger className='tabs_trigger' value="current">Current</Tabs.Trigger>
          <Tabs.Trigger className='tabs_trigger' value="forecast">Daily</Tabs.Trigger>
        </Tabs.List>


        <Tabs.Content className='tabs_content' value="current">
          <Current data={data} />
        </Tabs.Content>
        <Tabs.Content className='tabs_content' value="forecast">
          <Forecast data={data} />
        </Tabs.Content>


      </Tabs.Root>
    </div>
  )
}

export default page