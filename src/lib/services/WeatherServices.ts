export const fetchForecast = async ( lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=392a144b16be7985d06555ccc58efb05&units=imperial`);
    const data = await response.json();

    return data;
}

export const fetchGeoLoc = async (city: string) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=392a144b16be7985d06555ccc58efb05&units=imperial`);
    const data = await response.json();

    return data;
}