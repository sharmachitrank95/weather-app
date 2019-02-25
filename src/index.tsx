import React from 'react';
import ReactDOM from 'react-dom';
import Login from './component/Login';
import WebApp from './component/WebApp'
import {createStore} from 'redux';
import myApp from './service/Reducer';
import {HashRouter, Route, Redirect} from 'react-router-dom';

let store = createStore(myApp);

const routing = (
    <HashRouter>
        <div style={{height:"100%"}} >
            <Redirect exact from= '/' to= '/login'></Redirect>
            <Route  path='/login' render={(props) => <Login store={store}/>} />
            <Route  path= '/webApp' render={(props) => <WebApp store={store}/>}  /> 
        </div>
    </HashRouter>
)
function render(){
    ReactDOM.render(routing, document.getElementById('root'));
}

store.subscribe(render);

render();