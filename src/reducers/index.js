import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import covidDataReducer from './covidDataReducer';
import errorStatusChange from './errorStatusChange';

export default combineReducers({
    searchTerm: searchReducer,
    covidData: covidDataReducer,
    // hasError: errorStatusChange
});