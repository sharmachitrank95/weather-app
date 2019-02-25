(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,t,a){e.exports=a(279)},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),s=a.n(i),o=a(13),c=a(14),l=a(16),u=a(15),m=a(12),h=a(17),d=a(280),p=a(3);var f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userName:"",password:""},a.onSubmitClick=a.onSubmitClick.bind(Object(m.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(m.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(m.a)(a)),a.renderRedirect=a.renderRedirect.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"renderRedirect",value:function(){if(localStorage.getItem("userName")&&localStorage.getItem("userName").length>0)return r.a.createElement(d.a,{to:"/webApp"})}},{key:"onSubmitClick",value:function(e){this.props.store.dispatch({type:"LOGIN",payload:{userName:this.state.userName}}),this.renderRedirect(),location.reload()}},{key:"handleNameChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return r.a.createElement(p.f,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{height:"100%"}},this.renderRedirect(),r.a.createElement(p.f,{item:!0,style:{padding:"1rem"}},r.a.createElement(p.g,{id:"userName",placeholder:"name",required:!0,autoComplete:"false",type:"name",onChange:this.handleNameChange})),r.a.createElement(p.f,{item:!0,style:{padding:"1rem"}},r.a.createElement(p.g,{placeholder:"password",type:"password"})),r.a.createElement(p.f,{item:!0,style:{padding:"1rem"}},r.a.createElement(p.b,{id:"loginButton",variant:"contained",disabled:0==this.state.userName.length,onClick:this.onSubmitClick},"LogIn")))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmitClick=a.onSubmitClick.bind(Object(m.a)(a)),a.state={userName:a.props.store.getState().userName},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSubmitClick",value:function(e){this.props.store.dispatch({type:"LOGOUT",payload:{username:""}}),location.reload()}},{key:"render",value:function(){return r.a.createElement(p.f,{container:!0,alignItems:"center",style:{marginBottom:"1rem"}},r.a.createElement(p.f,{item:!0,style:{flexGrow:1}},r.a.createElement(p.a,{position:"static",style:{flexGrow:1,flexDirection:"row"}},r.a.createElement(p.k,{style:{flexGrow:1,flexDirection:"row"}},r.a.createElement(p.f,{item:!0,id:"welcomeUser",style:{flexGrow:1}}," Welcome ",this.state.userName),r.a.createElement(p.f,{item:!0},this.props.cityName),r.a.createElement(p.h,{style:{color:"white",cursor:"pointer",padding:"1rem"},onClick:this.props.setCurrentLocation},r.a.createElement("i",null,"choose current location")),r.a.createElement(p.f,{item:!0},r.a.createElement(p.b,{onClick:this.onSubmitClick,variant:"contained"},"Logout"))))))}}]),t}(r.a.Component);function g(e){if(e)return{backgroundColor:"grey"}}var y=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.dates.map(function(e){return r.a.createElement(p.j,{button:!0,component:"a",value:e,onClick:function(a){return t.props.handleDateChange(a,e)},style:g(e===t.props.currentDate)},e)}),r.a.createElement(p.f,{item:!0,xs:2},r.a.createElement("h4",{style:{paddingLeft:"1rem"}},"Choose Date:"),r.a.createElement(p.i,{component:"nav"},e))}}]),t}(r.a.Component),C=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return e=this.props.WeatherCardData.map(function(e){return r.a.createElement(p.f,{item:!0,xs:"auto"},r.a.createElement(p.c,null,r.a.createElement(p.d,null,r.a.createElement(p.l,null,"Time: ",e.dt_txt.split(" ")[1]),r.a.createElement(p.l,{variant:"h3"},e.weather[0].description),r.a.createElement(p.l,null,"Max Temp: ",e.main.temp_max),r.a.createElement(p.l,null,"Min Temp: ",e.main.temp_min),r.a.createElement(p.l,null,"Pressure: ",e.main.pressure),r.a.createElement(p.l,null,"Humidity: ",e.main.humidity))))}),r.a.createElement(p.f,{item:!0,xs:10},r.a.createElement(p.f,{container:!0,spacing:24,style:{flexGrow:1}},e))}}]),t}(r.a.Component),v=a(33),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).availableDates=void 0,a.state={cardsData:null,date:null,currentDate:null},a.availableDates=[],a.handleDateChange=a.handleDateChange.bind(Object(m.a)(a)),a.setCardData=a.setCardData.bind(Object(m.a)(a)),a.fetchAvailableDates(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"fetchAvailableDates",value:function(){var e=this;this.props.weatherData.list.map(function(t){t=t.dt_txt.split(" ")[0],-1===e.availableDates.indexOf(t)&&e.availableDates.push(t)})}},{key:"componentWillMount",value:function(){this.setCardData(this.availableDates[0],this.props.weatherData)}},{key:"handleDateChange",value:function(e,t){this.setCardData(t,this.props.weatherData)}},{key:"setCardData",value:function(e,t){var a=v.filter(t.list,function(t){return t.dt_txt.split(" ")[0]===e});this.setState({currentDate:e,cardsData:v.cloneDeep(a)})}},{key:"render",value:function(){return r.a.createElement(p.f,{container:!0,spacing:8},r.a.createElement(y,{dates:this.availableDates,handleDateChange:this.handleDateChange,currentDate:this.state.currentDate}),!!this.state.cardsData&&r.a.createElement(C,{WeatherCardData:this.state.cardsData}))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).cityName="",a.state={xCoordinate:30.734301,yCoordinate:76.793297,weatherData:null,isBusy:!1},a.setCurrentLocation=a.setCurrentLocation.bind(Object(m.a)(a)),a.renderRedirect=a.renderRedirect.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setCurrentLocation",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){t&&e.setState({xCoordinate:t.coords.latitude,yCoordinate:t.coords.longitude}),e.getData()})}},{key:"shouldComponentUpdate",value:function(e,t){return!(this.state.weatherData&&(!this.state.weatherData||this.state.weatherData.city.name===t.weatherData.city.name))||this.state.isBusy!==t.isBusy}},{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.setState({isBusy:!0}),fetch("https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?lat="+this.state.xCoordinate+"&lon="+this.state.yCoordinate+"&appid=0cefc283fa0c3ad68584e2c30b643c94",{headers:{"Content-Type":"text/plain","Access-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.cityName=t.city.name,e.setState({isBusy:!1,weatherData:v.cloneDeep(t)})})}},{key:"renderRedirect",value:function(){if(!localStorage.getItem("userName")||0==localStorage.getItem("userName").length)return r.a.createElement(d.a,{to:"/login"})}},{key:"render",value:function(){var e,t;return e=r.a.createElement("div",{id:"weatherReport"},r.a.createElement(b,{store:this.props.store,cityName:this.cityName,setCurrentLocation:this.setCurrentLocation}),!!this.state.weatherData&&r.a.createElement(D,{weatherData:this.state.weatherData})),t=r.a.createElement(p.e,{style:{position:"fixed",top:"50%",right:"50%",left:"50%",bottom:"50%"},size:100}),r.a.createElement(r.a.Fragment,null,this.renderRedirect(),this.state.isBusy?t:e)}}]),t}(r.a.Component),O=a(83),j={userName:"",password:""},w=a(284),k=a(282),N=a(283),x=Object(O.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return localStorage.setItem("userName",t.payload.userName),console.log("welcome"+t.userName),Object.assign({},e,{userName:t.payload.userName});case"LOGOUT":return localStorage.setItem("userName",""),console.log("Bye Bye"),Object.assign({},e,{userName:t.payload.username});default:return Object.assign({},e,{userName:localStorage.getItem("userName")})}}),S=r.a.createElement(w.a,null,r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(k.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(N.a,{path:"/login",render:function(e){return r.a.createElement(f,{store:x})}}),r.a.createElement(N.a,{path:"/webApp",render:function(e){return r.a.createElement(E,{store:x})}})));function I(){s.a.render(S,document.getElementById("root"))}x.subscribe(I),I()}},[[175,2,1]]]);
//# sourceMappingURL=main.706b4c98.chunk.js.map