import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'

const api_key = '<your API_KEY>' ;

export const getData = async(city,country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${api_key}&units=metric`)
}


