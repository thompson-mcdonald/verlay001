import reducerSwitch from './reducers/Reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    store: reducerSwitch
});

export default rootReducer;
