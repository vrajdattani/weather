import { TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {countryAction} from '../Actions/countryAction';
const Countries = () =>{
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const nameChange = (e)=>{
        setName(e.target.value);
    }
    const Country=()=>{
        dispatch(countryAction(name));
    }
    return <div>
        <Typography>Hello, Please the Form</Typography>
        <TextField name={name} onChange={nameChange}/>
        <Link to={{pathname:'/CountryDetails'}}>
        <Button type='submit' onClick={Country} variant='contained' color='primary'>Details</Button>
        </Link>
    </div>

}
export default Countries