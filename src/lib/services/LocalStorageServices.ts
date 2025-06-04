function saveToLocalStorageByName(place: string) {
    if (typeof window === 'undefined') return; // Prevents error on server

    const placesArr = getLocalStorage();

    if (!placesArr.includes(place)) {
        placesArr.push(place);
    }

    localStorage.setItem('Names', JSON.stringify(placesArr));
}

function getLocalStorage() {
    if (typeof window === 'undefined') return []; // Prevents error on server

    const localStorageData = localStorage.getItem('Names');

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(place: string) {
    if (typeof window === 'undefined') return; // Prevents error on server

    const placesArr = getLocalStorage();

    const placeIndex = placesArr.indexOf(place);

    if (placeIndex !== -1) {
        placesArr.splice(placeIndex, 1);
        localStorage.setItem('Names', JSON.stringify(placesArr));
    }
}


export{saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage }