import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

const rootReducers = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer
})

export default rootReducers;
