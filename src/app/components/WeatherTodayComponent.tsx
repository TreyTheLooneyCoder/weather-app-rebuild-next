import { IWeatherTodayProps } from '@/lib/interfaces/WeatherInterfaces';
import React from 'react'

const WeatherToday = (props: IWeatherTodayProps) => {  


  return (
    <div className=' max-h-[30rem] max-w-[70rem] col-1 row-1 pb-[1rem]'>
      <div className='bg-gray-500 opacity-65 w-[70rem] h-[30rem] border'></div>

      <div className='flex flex-row justify-between pt-[0.5rem] px-[2rem] gap-x-[43rem] text-white absolute top-[2rem]'>
        <p className='text-xl'>{props.date}</p>
        <p className='text-xl'>{props.cityName}</p>
      </div>

      <p className='text-7xl text-white px-[2rem] pt-[16rem] absolute top-[5rem] left-[6rem]'>{props.temperature} °F</p>
      
      <div className='flex flex-row gap-2 pl-[57rem] mt-[4.5rem] gap-x-[3rem] text-white absolute top-[24rem] left-[-0.5rem]'>
        <p className='text-xl'>Low - {props.tempLow} °F</p>
        <p className='text-xl'>Max - {props.tempHigh} °F</p>
      </div>
    </div>
  )
}

export default WeatherToday