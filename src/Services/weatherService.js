import Axios from "axios"

export const weatherService = async(name) =>{
    return (Axios.get(`http://api.weatherstack.com/current?access_key=b7221146dba1efefb01fe58fb9b3bc11&query=${name}`))
}