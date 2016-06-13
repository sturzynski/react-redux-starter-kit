import { combineReducers } from 'redux-immutable';
import router from './customRouteReducer';

const rootReducer = combineReducers({
	router,

});

export default rootReducer;