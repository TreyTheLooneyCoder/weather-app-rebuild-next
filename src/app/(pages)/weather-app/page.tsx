'use client';
import React, { useState } from 'react'
import { fetchGeoLoc, fetchForecast } from '@/lib/services/WeatherServices'
import { Input } from '@/app/components/ui/Input';
import { useAppContext } from '@/lib/context/WeatherContext';
import WeatherForcast from '@/app/components/WeatherForecast';
import WeatherToday from '@/app/components/WeatherTodayComponent';
import FavoritePlaces from '@/app/components/FavoritePlaces';
import { IGeoLocInfo, IForecastInfo } from '@/lib/interfaces/WeatherInterfaces';
import { saveToLocalStorageByName, removeFromLocalStorage } from '@/lib/services/LocalStorageServices';

const WeatherAppPage = () => {
    const {cityInput, setCityInput} = useAppContext();
    const {latitude, setLatitude} = useAppContext();
    const {longitude, setLongitude} = useAppContext();
    const [geoFetched, setGeoFetched] = useState<IGeoLocInfo>();
    const [forecastFetched, setForecastFetched] = useState<IForecastInfo>();

    async function saveInputToCity() {
        const fetchedGeo: IGeoLocInfo = await fetchGeoLoc(cityInput);
        console.log(fetchedGeo);

        setLatitude(fetchedGeo.coord.lat);
        setLongitude(fetchedGeo.coord.lon);

        const fetchedForecast: IForecastInfo = await fetchForecast(latitude, longitude);
        console.log(fetchedForecast);

        setGeoFetched(fetchedGeo);
        setForecastFetched(fetchedForecast);  
    }

    async function favoriteCity() {
        saveToLocalStorageByName(geoFetched? geoFetched.name : '')
    }

    async function unfavoriteCity() {
        removeFromLocalStorage(geoFetched? geoFetched.name : '')
    }
    

    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = today.getDay();
    const dayName = days[dayOfWeek];
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    const currentMonth = today.getMonth(); // Returns 0 for January, 1 for February, etc.
    const monthName = months[currentMonth];
    const currentDate = today.getDate();

    const forecastDay1 = today.getDay() + 1;
    const forecastDay1Name = days[forecastDay1]; 
    const forecastDay2 = today.getDay() + 2;
    const forecastDay2Name = days[forecastDay2];
    const forecastDay3 = today.getDay() + 3;
    const forecastDay3Name = days[forecastDay3]; 
    const forecastDay4 = today.getDay() + 4;
    const forecastDay4Name = days[forecastDay4]; 
    const forecastDay5 = today.getDay() + 5;
    const forecastDay5Name = days[forecastDay5]; 
    
    return (
    <div style={{backgroundImage: 'url("/WeatherAppBG.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', }}>
        <div className='grid grid-cols-[2fr] grid-rows-[2fr] ml-10 pt-5 max-w-[80rem] '>
            <WeatherToday 
                date={`${dayName}, ${monthName} ${currentDate}`} 
                cityName={geoFetched ? geoFetched.name : 'Find your cities weather!'} 
                temperature={geoFetched ? Math.round(geoFetched.main.temp) : 0} 
                tempLow={geoFetched ? Math.round(geoFetched.main.temp_min) : 0}  
                tempHigh={geoFetched ? Math.round(geoFetched.main.temp_max) : 0}  
            />
            <WeatherForcast 
                day1={`${forecastDay1Name}`} 
                day1Temp={forecastFetched ? Math.round(forecastFetched.list[5].main.temp) : 0} 
                day1TempLow={forecastFetched ? Math.round(forecastFetched.list[5].main.temp_min) : 0} 
                day1TempHigh={forecastFetched ? Math.round(forecastFetched.list[5].main.temp_max) : 0}

                day2={`${forecastDay2Name}`}
                day2Temp={forecastFetched ? Math.round(forecastFetched.list[13].main.temp) : 0} 
                day2TempLow={forecastFetched ? Math.round(forecastFetched.list[13].main.temp_min) : 0} 
                day2TempHigh={forecastFetched ? Math.round(forecastFetched.list[13].main.temp_max) : 0}

                day3={`${forecastDay3Name}`} 
                day3Temp={forecastFetched ? Math.round(forecastFetched.list[21].main.temp) : 0} 
                day3TempLow={forecastFetched ? Math.round(forecastFetched.list[21].main.temp_min) : 0} 
                day3TempHigh={forecastFetched ? Math.round(forecastFetched.list[21].main.temp_max) : 0}
                
                day4={`${forecastDay4Name}`} 
                day4Temp={forecastFetched ? Math.round(forecastFetched.list[29].main.temp) : 0} 
                day4TempLow={forecastFetched ? Math.round(forecastFetched.list[29].main.temp_min) : 0} 
                day4TempHigh={forecastFetched ? Math.round(forecastFetched.list[29].main.temp_max) : 0}

                day5={`${forecastDay5Name}`} 
                day5Temp={forecastFetched ? Math.round(forecastFetched.list[37].main.temp) : 0} 
                day5TempLow={forecastFetched ? Math.round(forecastFetched.list[37].main.temp_min) : 0} 
                day5TempHigh={forecastFetched ? Math.round(forecastFetched.list[37].main.temp_max) : 0}
            />
            
            <FavoritePlaces/>
            <button className='rounded-md hover:bg-violet-600 bg-violet-950 text-white px-[5rem] absolute top-[37rem] left-[73.25rem]' onClick={favoriteCity}>Favorite</button>
            <button className='rounded-md hover:bg-violet-600 bg-violet-950 text-white px-[4.5rem] absolute top-[39rem] left-[73.25rem]' onClick={unfavoriteCity}>Unfavorite</button>
        </div>
        
        <div className='flex flex-row gap-x-1 pt-3 ml-[53rem]'>
            <Input type="text" className='w-[30rem] placeholder-white bg-black opacity-65 text-white' onChange={(e) => setCityInput(e.target.value)} placeholder="Search..."/>        
            <button className='rounded-md hover:bg-violet-600 bg-violet-950 text-white px-2' onClick={saveInputToCity}>search</button>
        </div>
    </div>
  )
}

export default WeatherAppPage