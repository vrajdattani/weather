import { Avatar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {weatherAction} from '../Actions/weatherAction';
import '../Common.css';
const CheckWeather = (props)=>{
    const dispatch = useDispatch();
    const details = (props.location.state)
    console.log(details);
    useEffect(()=>{
        dispatch(weatherAction(details));
    },[])
    const info = useSelector((state)=>{
        return state.weather.data.current
    })
    
return <div className='div'>
            <Typography>{info?.temperature}</Typography>
            <Typography>{info?.wind_speed}</Typography>
            <Typography>{info?.precip}</Typography>
        {info?.weather_icons.map((weather_icons)=>{return <Avatar src={weather_icons} key={weather_icons}/>})}
    </div>
    }
export default CheckWeather