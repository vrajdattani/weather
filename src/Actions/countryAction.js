import { CountryService } from "../Services/CountryService"
import { CountryType } from './CountryType';
export const countryAction = (name) =>{
    return async (dispatch) =>{
        const details = await CountryService(name);
        dispatch({type:CountryType,payload:details.data[0]});
    }
}