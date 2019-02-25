import { configure, shallow, mount } from 'enzyme';
import {Login} from '../component/Login'
import {createStore} from 'redux';
import myApp from '../service/Reducer';
import * as React from 'react';
import Adapter from 'enzyme-react-adapter-future';

configure({ adapter: new Adapter() });

const store = createStore(myApp);

describe('<Login />',()=>{
    it('should render correctly',()=>{
        const loginComponent = <Login store={store} />;
        const wrapper = shallow(loginComponent);
        expect(wrapper).toMatchSnapshot();   
    });

    xit('should setvalue in input',()=>{
        const loginComponent = <Login store={store} />;
        const wrapper = mount(loginComponent);

        wrapper.find('#userName').simulate('keyPress','chitrank');
        expect(wrapper.find('#userName').childAt(1).text()).toBe('chitrank');
    })
})