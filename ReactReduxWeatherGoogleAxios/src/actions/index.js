
import axios from 'axios';

const API_KEY = '115e1d44ef0526d76360f3d811c2a0ef';
//const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

   const url = `${ROOT_URL}&q=${city},us`;

   //returns promise.Does not contain any of our response data .
   const request = axios.get(url);

   //console.log('Request is', request);

   //Redux-Promise middleware intervenes and executes the request waits for it to finish and sends over the response to 
   //the reducers .

   return {

       type:FETCH_WEATHER,
       payload:request

   }

}