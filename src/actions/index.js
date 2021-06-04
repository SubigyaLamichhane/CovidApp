import {
    SET_SEARCH_TERM,
    FETCH_COVID_DATA,
    ERROR_STATUS_CHANGE
} from './types';

import covidData from '../apis/Covid';

export const search = searchTerm => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}

export const fetchCovidData = () => async dispatch => {
    const response = await covidData.get({
        params: {name: 'italy'}
    });
    console.log(response);
    dispatch({type: FETCH_COVID_DATA, payload:response.data});
}

export const errorStatusChange = (boolean) => {
    return {
        type: ERROR_STATUS_CHANGE,
        payload: boolean
    }
}