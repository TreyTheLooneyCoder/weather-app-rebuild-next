import React from 'react'
import { IWeatherForecastProps } from '@/lib/interfaces/WeatherInterfaces';

const WeatherForcast = (props: IWeatherForecastProps) => {

  return (
    <div className='flex flex-row gap-x-1 col-1 row-2'>
      <div className='max-h-[10rem] max-w-[13.8rem] border'>
        <div className='bg-gray-500 h-[10rem] w-[13.8rem] opacity-65'></div>
        <p className='text-md text-white absolute top-[32.25rem] left-[4rem]'>{props.day1}</p>
        <p className='text-3xl py-5 text-white absolute top-[33.5rem] left-[4rem]'>{props.day1Temp} °F</p>
        <p className='text-md text-white absolute top-[38rem] left-[4rem]'>Max Temp - {props.day1TempHigh == props.day1Temp ? 'Same Temp' : `${props.day1TempHigh} °F`}</p>
        <p className='text-md text-white absolute top-[39.5rem] left-[4rem]'>Low Temp - {props.day1TempLow == props.day1Temp ? 'Same Temp' : `${props.day1TempLow} °F`}</p>
      </div> 

      <div className='max-h-[10rem] max-w-[13.8rem] border'>
        <div className='bg-gray-500 h-[10rem] w-[13.8rem] opacity-65'></div>
        <p className='text-md text-white absolute top-[32.25rem] left-[18rem]'>{props.day2}</p>
        <p className='text-3xl py-5 text-white absolute top-[33.5rem] left-[18rem]'>{props.day2Temp} °F</p>
        <p className='text-md text-white absolute top-[38rem] left-[18rem]'>Max Temp - {props.day2TempHigh == props.day2Temp ? 'Same Temp' : `${props.day2TempHigh} °F`}</p>
        <p className='text-md text-white absolute top-[39.5rem] left-[18rem]'>Low Temp - {props.day2TempLow == props.day2Temp ? 'Same Temp' : `${props.day2TempLow} °F`}</p>
      </div> 

      <div className='max-h-[10rem] max-w-[13.8rem] border'>
        <div className='bg-gray-500 h-[10rem] w-[13.8rem] opacity-65'></div>
        <p className='text-md text-white absolute top-[32.25rem] left-[32rem]'>{props.day3}</p>
        <p className='text-3xl py-5 text-white absolute top-[33.5rem] left-[32rem]'>{props.day3Temp} °F</p>
        <p className='text-md text-white absolute top-[38rem] left-[32rem]'>Max Temp - {props.day3TempHigh == props.day3Temp ? 'Same Temp' : `${props.day3TempHigh} °F`}</p>
        <p className='text-md text-white absolute top-[39.5rem] left-[32rem]'>Low Temp - {props.day3TempLow == props.day3Temp ? 'Same Temp' : `${props.day3TempLow} °F`}</p>        
      </div> 

      <div className='max-h-[10rem] max-w-[13.8rem] border'>
        <div className='bg-gray-500 h-[10rem] w-[13.8rem] opacity-65'></div>
        <p className='text-md text-white absolute top-[32.25rem] left-[46rem]'>{props.day4}</p>
        <p className='text-3xl py-5 text-white absolute top-[33.5rem] left-[46rem]'>{props.day4Temp} °F</p>
        <p className='text-md text-white absolute top-[38rem] left-[46rem]'>Max Temp - {props.day4TempHigh == props.day4Temp ? 'Same Temp' : `${props.day4TempHigh} °F`}</p>
        <p className='text-md text-white absolute top-[39.5rem] left-[46rem]'>Low Temp - {props.day4TempLow == props.day4Temp ? 'Same Temp' : `${props.day4TempLow} °F`}</p>
      </div> 

      <div className='max-h-[10rem] max-w-[13.8rem] border'>
        <div className='bg-gray-500 h-[10rem] w-[13.8rem] opacity-65'></div>
        <p className='text-md text-white absolute top-[32.25rem] left-[60rem]'>{props.day5}</p>
        <p className='text-3xl py-5 text-white absolute top-[33.5rem] left-[60rem]'>{props.day5Temp} °F</p>
        <p className='text-md text-white absolute top-[38rem] left-[60rem]'>Max Temp - {props.day5TempHigh == props.day5Temp ? 'Same Temp' : `${props.day5TempHigh} °F`}</p>
        <p className='text-md text-white absolute top-[39.5rem] left-[60rem]'>Low Temp - {props.day5TempLow == props.day5Temp ? 'Same Temp' : `${props.day5TempLow} °F`}</p>
      </div> 
    </div>
    
  )
}

export default WeatherForcast