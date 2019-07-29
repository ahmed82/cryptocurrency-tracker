import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    fetchHasError,
    isLoadingData,
    setFetchedList,
    setFilterInput,
    toggleFilterVisibility 
} from '../store/reducers';


const rootReducer = combineReducers({
    list: setFetchedList,
    hasError: fetchHasError,
    isLoading: isLoadingData,
    filter: setFilterInput,
    isFilterShowing: toggleFilterVisibility,
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
