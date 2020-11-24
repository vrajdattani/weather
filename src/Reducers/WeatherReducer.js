import {WeatherType} from '../Actions/WeatherType';
const initialState = {
    data:[]
}
export const WeatherReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case WeatherType:
            return {
                ...state,
                data:payload
            }
        default:
            return state
        
    }
}