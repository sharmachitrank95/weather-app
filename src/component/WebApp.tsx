import React from 'react';
import { Redirect } from 'react-router';
import {Header} from '../component/Header';
import {WeatherReport} from '../component/WeatherReport';
import * as _ from 'lodash';
import { CircularProgress } from '@material-ui/core';

interface IWebAppStates{
    xCoordinate: Number,
    yCoordinate:Number,
    weatherData:any,
    isBusy:boolean
}
interface IWebAppProps{
    store:any
}

export class WebApp extends React.Component<IWebAppProps, IWebAppStates>{
    private cityName:string = '';
    constructor(props:any){
        super(props);
        this.state = {xCoordinate:30.734301,yCoordinate:76.793297,weatherData:null,isBusy:false};
        this.setCurrentLocation = this.setCurrentLocation.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    setCurrentLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            if(position){
                this.setState({
                    xCoordinate:position.coords.latitude,
                    yCoordinate:position.coords.longitude
                })
            }
            this.getData();
        });
    }

    shouldComponentUpdate(nextProps:any,nextState:any){
        if(!this.state.weatherData || (!!this.state.weatherData && this.state.weatherData.city.name !== nextState.weatherData.city.name)){
            return true;
        }
        if(this.state.isBusy !== nextState.isBusy){
            return true;
        }
        return false;
    }
    
    componentDidMount(){
        this.getData();
    }

    getData(){
        this.setState({
             isBusy:true
        })
        fetch('https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat='+ this.state.xCoordinate +'&lon='+ this.state.yCoordinate +'&appid=0cefc283fa0c3ad68584e2c30b643c94',
        {
            headers:{'Content-Type': 'text/plain','Access-Type':'application/json'},
        })
        .then((data:any)=>{
           return data.json();
        })
        .then((data)=>{
            this.cityName = data.city.name;
            this.setState({
                isBusy:false,
                weatherData:_.cloneDeep(data) 
            })
        })
    }
    renderRedirect(){
        if (!localStorage.getItem('userName') || localStorage.getItem('userName')!.length == 0) {
          return <Redirect to={process.env.PUBLIC_URL +'/login'} />
        }
    }

    render(){
        let weatherReport;
        let spinner;
        weatherReport = <div id="weatherReport">
            <Header store={this.props.store} cityName={this.cityName} setCurrentLocation={this.setCurrentLocation}/>
            {!!this.state.weatherData && <WeatherReport weatherData={this.state.weatherData}/>}
        </div>
        spinner = <CircularProgress style={{position:'fixed',top:'50%',right:'50%',left:'50%',bottom:'50%'}} size={100}></CircularProgress>
        return(
            <React.Fragment>
                {this.renderRedirect()}
                {this.state.isBusy? spinner: weatherReport}
            </React.Fragment> 
        )
    }
}

export default WebApp;
