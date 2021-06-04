import {ERROR_STATUS_CHANGE} from '../actions/types';

const errorStatusChange = ( state = false, action )=>{
    switch(action.type){
        case ERROR_STATUS_CHANGE:
            return action.payload;
        default:
            return state;
    }
}

export default errorStatusChange;