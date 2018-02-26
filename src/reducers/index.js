import {combineReducers} from 'redux';
import csvReducer from './csvReducer';




export default combineReducers({
    
    csv : csvReducer
});