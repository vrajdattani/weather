import {WeatherType} from './WeatherType'
import {weatherService} from '../Services/weatherService';
export const weatherAction=(name)=>{
    return async(dispatch)=>{
        const details = await weatherService(name);
        dispatch({type:WeatherType,payload:details.data})
    }
}