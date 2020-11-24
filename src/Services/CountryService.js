import Axios from "axios"

export const CountryService = (name) =>{
    return Axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
}