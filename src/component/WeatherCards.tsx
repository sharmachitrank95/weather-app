import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid} from '@material-ui/core';

interface IWeatherCardsProps{
    WeatherCardData:[]
}
interface IWeatherCardsStates{

}

export class WeatherCards extends React.Component<IWeatherCardsProps,IWeatherCardsStates>{
    constructor(props:any) {
        super(props);
    }

    render(){
        let cards;
        cards = this.props.WeatherCardData.map((cardData:any)=>{
            return (
                <Grid item xs={"auto"}>
                    <Card>
                        <CardContent>
                            <Typography>
                               Time: {cardData.dt_txt.split(' ')[1]}
                            </Typography>
                            <Typography variant="h3">
                                {cardData.weather[0].description}
                            </Typography>
                            <Typography>
                                Max Temp: {cardData.main.temp_max}
                            </Typography>
                            <Typography>
                                Min Temp: {cardData.main.temp_min}
                            </Typography>
                            <Typography>
                                Pressure: {cardData.main.pressure}
                            </Typography>
                            <Typography>
                                Humidity: {cardData.main.humidity}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })
        return(
            <Grid item xs={10}>
                <Grid container spacing={24} style={{flexGrow:1}}>
                   {cards}
                </Grid>
            </Grid>
        )
        
    }
}

export default WeatherCards;