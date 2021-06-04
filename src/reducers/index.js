import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import covidDataReducer from './covidDataReducer';

export default combineReducers({
    searchTerm: searchReducer,
    covidData: covidDataReducer,
});