import React from 'react';
import { Redirect } from 'react-router';
import {loginData,logoutData} from '../service/Action'
import { Grid, Input, Button } from '@material-ui/core';

interface ILoginProps {
    store:any,
}

interface ILoginStates {
    userName:string,
    password:string
}

function getHomeStyle() {
    return {
        padding:"1rem",
    }
}

export class Login extends React.Component<ILoginProps, ILoginStates> {
    constructor(props: any) {
        super(props)
        this.state = {userName:'',password:''};
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    renderRedirect(){
        if (!!localStorage.getItem('userName') && localStorage.getItem('userName')!.length > 0) {
          return <Redirect to={process.env.PUBLIC_URL +'/webApp'} />
        }
    }

    onSubmitClick(e:any){
        this.props.store.dispatch(loginData(this.state.userName));
        this.renderRedirect();
        location.reload();
    }

    handleNameChange(e:any){
        this.setState({
            userName: e.target.value
        });
    }

    handlePasswordChange(e:any){
        this.setState({
            password:e.target.value
        });
    }

    render() {
        return (
            <Grid container direction={"column"} alignItems={"center"} justify={"center"} style={{height:"100%"}}>
                {this.renderRedirect()}
                <Grid item style={getHomeStyle()} >
                    <Input id="userName" placeholder="name" required  autoComplete={'false'} type="name" onChange={this.handleNameChange}/>
                </Grid> 
                 <Grid item style={getHomeStyle()}>  
                    <Input placeholder="password"  type="password" />
                </Grid>
                <Grid item style={getHomeStyle()}>  
                    <Button id="loginButton" variant={"contained"} disabled = {this.state.userName.length == 0} onClick={this.onSubmitClick}>LogIn</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Login;