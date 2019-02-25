import { configure, shallow, mount } from 'enzyme';
import {WebApp} from '../component/WebApp'
import {createStore} from 'redux';
import myApp from '../service/Reducer';
import * as React from 'react';
import Adapter from 'enzyme-react-adapter-future';
import { loginData, logoutData } from '../service/Action';

configure({ adapter: new Adapter() });

const store = createStore(myApp);

describe('<WebApp />',()=>{
    it('should render correctly',()=>{
        const WebAppComponent = <WebApp store={store} />;
        const wrapper = shallow(WebAppComponent);
        expect(wrapper).toMatchSnapshot();   
    });

    it('should fetch data',()=>{
        store.dispatch(loginData("Test"));

        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
        json: () => mockJsonPromise,
        });
        jest.spyOn(window,'fetch').mockImplementation(() => mockFetchPromise); // 4
        
        const wrapper = shallow(<WebApp store={store} />); // 5
                                
        expect(window.fetch).toHaveBeenCalledTimes(1);
    })

    it('should render data correctly',()=>{
        store.dispatch(loginData("Test"));

        const mockSuccessResponse = {"cod":"200","message":0.0045,"cnt":39,"list":[{"dt":1551063600,"main":{"temp":287.35,"temp_min":285.171,"temp_max":287.35,"pressure":1012.8,"sea_level":1012.8,"grnd_level":966.75,"humidity":73,"temp_kf":2.18},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":2.86,"deg":110.502},"sys":{"pod":"d"},"dt_txt":"2019-02-25 03:00:00"},{"dt":1551139200,"main":{"temp":282.483,"temp_min":282.483,"temp_max":282.483,"pressure":1012.51,"sea_level":1012.51,"grnd_level":966.1,"humidity":92,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":32},"wind":{"speed":4,"deg":114.007},"rain":{"3h":0.7},"sys":{"pod":"n"},"dt_txt":"2019-02-26 00:00:00"},{"dt":1551225600,"main":{"temp":282.264,"temp_min":282.264,"temp_max":282.264,"pressure":1008.45,"sea_level":1008.45,"grnd_level":962.2,"humidity":96,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":2.6,"deg":43.0042},"rain":{"3h":7.37},"sys":{"pod":"n"},"dt_txt":"2019-02-27 00:00:00"},{"dt":1551236400,"main":{"temp":281.905,"temp_min":281.905,"temp_max":281.905,"pressure":1009.82,"sea_level":1009.82,"grnd_level":963.47,"humidity":98,"temp_kf":0},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":3.11,"deg":59.0013},"rain":{"3h":4.38},"sys":{"pod":"d"},"dt_txt":"2019-02-27 03:00:00"},{"dt":1551322800,"main":{"temp":280.508,"temp_min":280.508,"temp_max":280.508,"pressure":1017.46,"sea_level":1017.46,"grnd_level":970.7,"humidity":84,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.21,"deg":349.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2019-02-28 03:00:00"},{"dt":1551398400,"main":{"temp":280.258,"temp_min":280.258,"temp_max":280.258,"pressure":1016.53,"sea_level":1016.53,"grnd_level":969.6,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.3,"deg":333.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2019-03-01 00:00:00"}],"city":{"id":1274746,"name":"Chandigarh","coord":{"lat":30.7343,"lon":76.7933},"country":"IN","population":914371}};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
        const mockFetchPromise = Promise.resolve({ 
        json: () => mockJsonPromise,
        });
        jest.spyOn(window,'fetch').mockImplementation(() => mockFetchPromise); 
        
        const wrapper = shallow(<WebApp store={store} />); 
                                
        expect(window.fetch).toHaveBeenCalled();
    })
    afterEach(() =>{
        store.dispatch(logoutData());  
    })
})