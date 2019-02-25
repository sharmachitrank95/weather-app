import React from 'react';
import {DateNavigator} from '../component/DateNavigator';
import {WeatherCards} from '../component/WeatherCards';
import * as _ from 'lodash';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IWeatherReportProps{
    weatherData:any
}
interface IWeatherReportStates{
    date:any,
    cardsData:any,
    currentDate:any
}

export class WeatherReport extends React.Component<IWeatherReportProps,IWeatherReportStates>{
    public availableDates:Array<string>;
    constructor(props:any) {
        super(props);
        this.state = {cardsData:null,date:null,currentDate:null};
        this.availableDates = [];
        this.handleDateChange = this.handleDateChange.bind(this);
        this.setCardData = this.setCardData.bind(this);
        this.fetchAvailableDates();
    }

    fetchAvailableDates(){
        this.props.weatherData.list.map((element:any) => {
            element = element.dt_txt.split(' ')[0];
            if(this.availableDates.indexOf(element) === -1){
                this.availableDates.push(element);
            }
        })
    }
    componentWillMount(){
        this.setCardData(this.availableDates[0],this.props.weatherData);
    }

    handleDateChange(e:any,value:any){
       this.setCardData(value,this.props.weatherData);
    }

    setCardData(date:any,weatherData:any){
        let data = _.filter(weatherData.list,(element:any) =>{
           return element.dt_txt.split(' ')[0] === date;
        })
        this.setState({
            currentDate: date,
            cardsData:_.cloneDeep(data)
        })
    }

    render(){
        return(
            <Grid container spacing={8}>
                <DateNavigator dates={this.availableDates} handleDateChange={this.handleDateChange} currentDate={this.state.currentDate}/>
               {!!this.state.cardsData && <WeatherCards WeatherCardData={this.state.cardsData}/>}
            </Grid>
        )
    }
}

export default WeatherReport;

