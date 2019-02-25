import React from 'react';
import {List,ListItem, Grid} from '@material-ui/core'
interface IDateNavigatorProps{
    dates:any,
    currentDate:any,
    handleDateChange:(e:any,value:any)=>void
}
interface IDateNavigatorStates{

}
function getListItemStyle(match:boolean) {
    if(match){
        return {
            backgroundColor: 'grey',
        };
    }
}
export class DateNavigator extends React.Component<IDateNavigatorProps,IDateNavigatorStates>{
    constructor(props:any) {
        super(props);
    }

    render(){
        let dates;
        dates = this.props.dates.map((date:any) => {
               return <ListItem 
               button 
               component={"a"} 
               value={date} 
               onClick={e => this.props.handleDateChange(e,date)}
               style={getListItemStyle(date === this.props.currentDate)}>
               {date}
               </ListItem>
           })
        
        return(
            <Grid item xs={2}>
                <h4 style={{paddingLeft:'1rem'}}>Choose Date:</h4>
                <List component={"nav"}>
                    {dates}
                </List>
            </Grid>
        )
        
    }
}

export default DateNavigator;