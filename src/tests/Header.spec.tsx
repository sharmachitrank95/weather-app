import { configure, shallow, mount } from 'enzyme';
import {Header} from '../component/Header'
import {createStore} from 'redux';
import myApp from '../service/Reducer';
import * as React from 'react';
import Adapter from 'enzyme-react-adapter-future';

configure({ adapter: new Adapter() });

const store = createStore(myApp);
const mockSetLocation = (e:any)=>{}

describe('<Login />',()=>{
    it('should render correctly',()=>{
        const loginComponent = <Header store={store} cityName={"chandigarh"} setCurrentLocation={mockSetLocation} />;
        const wrapper = shallow(loginComponent);
        expect(wrapper).toMatchSnapshot();   
    });

    // it('should render country name correctly',()=>{
    //     store.dispatch(loginData("Chitrank"));
    // })
})