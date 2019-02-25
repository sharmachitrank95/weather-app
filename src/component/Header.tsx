import React from 'react';
import {logoutData} from '../service/Action'
import { Grid, Button, AppBar, Toolbar, Link } from '@material-ui/core';

interface IHeaderProps {
    store:any,
    cityName:string,
    setCurrentLocation:(e:any) => void
}

interface IHeaderStates {
    userName:string
}

export class Header extends React.Component<IHeaderProps, IHeaderStates> {
    constructor(props: any) {
        super(props)
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.state = {userName: this.props.store.getState().userName}
    }

    onSubmitClick(e:any){
        this.props.store.dispatch(logoutData());
        location.reload();
    }

    render() {
        return (
                <Grid container alignItems={"center"} style={{marginBottom:'1rem'}}>
                    <Grid item style={{flexGrow:1}}>
                        <AppBar position={"static"} style={{flexGrow:1, flexDirection:'row'}}>
                            <Toolbar style={{flexGrow:1, flexDirection:'row'}}>
                                <Grid item id="welcomeUser" style={{flexGrow:1}} > Welcome {this.state.userName}</Grid>
                                <Grid item>{this.props.cityName}</Grid>
                                <Link style={{color:"white", cursor:"pointer", padding:'1rem'}} onClick={this.props.setCurrentLocation}><i>choose current location</i></Link>
                                <Grid item ><Button onClick={this.onSubmitClick} variant={"contained"} >Logout</Button></Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid> 
        )
    }
}

export default Header;;