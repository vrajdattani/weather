import { Typography,Avatar, Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Common.css';
const CountryDetails = () =>{
    const details = useSelector((state)=>{
        return state.country.data
    })
    console.log(details);
    return(<div className='div'>
        {details?
        <div><Typography>{details?.capital}</Typography>
        <Typography>{details?.population}</Typography>
        {details?.latlng.map((latlng)=>{return <Typography>{latlng}</Typography>})} 
        {/* <Typography>{details?.latlng[0],details?.latlng[1]}</Typography>     */}
        <Avatar src={details?.flag}/></div>
        :null}
        <Link to={{pathname:'/CheckWeather',state:details.capital}}>
        <Button type='submit'>Check Weather</Button>
        </Link>
    </div>)
}
export default CountryDetails;