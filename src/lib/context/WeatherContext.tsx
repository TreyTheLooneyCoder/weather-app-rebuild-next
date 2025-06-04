'use client';
import { createContext, useContext, useState } from "react";

interface Context{
    cityInput: string
    setCityInput: (city: string) => void;

    latitude: number
    setLatitude: (lat: number) => void;

    longitude: number
    setLongitude: (lat: number) => void;
}

const AppContext = createContext<Context>({
    cityInput: '',
    setCityInput: () => '',
    
    latitude: 0,
    setLatitude: () => 0,

    longitude: 0,
    setLongitude: () => 0,

})

export function AppWrapper({ children }: {children: React.ReactNode}) {
    const [cityInput, setCityInput] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
;
    
    


    return (
        <AppContext.Provider value={ { cityInput, setCityInput, latitude, setLatitude, longitude, setLongitude } }>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext () {
    return useContext(AppContext);
}