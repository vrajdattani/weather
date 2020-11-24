import {CountryType} from '../Actions/CountryType';
const initialState = {
    data:[]
}
export const CountryReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case CountryType:
            return {
                ...state,
                data:payload
            }
        default:
            return state
    }
}