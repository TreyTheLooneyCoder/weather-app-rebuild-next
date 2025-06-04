export interface IGeoLocInfo {
    name: string
    main: { 
        temp: number
        temp_min: number
        temp_max: number
    },
    coord: {
        lat: number
        lon: number
    }
}

export interface IWeatherTodayProps {
    date: string
    cityName: string
    temperature: number
    tempLow: number
    tempHigh: number
}

export interface IForecastInfo {
    list: {
        5: {
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
        }

        13: {
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
        },

        21: {
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
        },

        29: {
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
        },

        37: {
            main: {
                temp: number
                temp_min: number
                temp_max: number
            }
        },
    } 
}

export interface IWeatherForecastProps {
    day1: string
    day1Temp: number
    day1TempLow: number
    day1TempHigh: number

    day2: string
    day2Temp: number
    day2TempLow: number
    day2TempHigh: number

    day3: string
    day3Temp: number
    day3TempLow: number
    day3TempHigh: number

    day4: string
    day4Temp: number
    day4TempLow: number
    day4TempHigh: number

    day5: string
    day5Temp: number
    day5TempLow: number
    day5TempHigh: number
    // skyImage: string


}
