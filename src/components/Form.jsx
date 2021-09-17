import React,{ useEffect , useState } from 'react'
import { Box, Button, TextField , makeStyles} from '@material-ui/core'
import { getData } from '../service/api';
import Information from './Information';

const useStyles = makeStyles({
    component:{
        padding:10,
        background:'#445A6F'
    },
    input:{
        color:'#fff',
        marginRight:15
    },
    button:{
        width:150,
        height:40,
        background:'#e67e22',
        color:'#fff',
        marginTop:5
    }
})

function Form() {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [click, handleClick] = useState(false)
    

    useEffect(() => {
        const getWeather= async() =>{
           city && await getData(city,country).then(response =>{
           getWeatherData(response.data);
           console.log(response.data);
       })
    }
    getWeather();
    handleClick(false);
    }, [click])

    const handleCityChange = (value) =>{
        setCity(value);
    }
    const handleCountryChange = (value) =>{
        setCountry(value);
    }



    return (
        <>
        <Box className={classes.component}>
            <TextField inputProps={{className:classes.input}} className={classes.input} label="City" onChange={(e)=> handleCityChange( e.target.value)}/>

            <TextField inputProps={{className:classes.input}} className={classes.input} label="Country" onChange={(e)=> handleCountryChange( e.target.value)} />

            <Button variant="contained" className={classes.button} onClick={()=>handleClick(true)}> Get Weather</Button>
        </Box>
        <Information data={data}/>

        </>
    )
}

export default Form
