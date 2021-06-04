import { FETCH_COVID_DATA } from '../actions/types';

const covidDataReducer = (state={},action) => {
    switch(action.type){
        case FETCH_COVID_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default covidDataReducer;