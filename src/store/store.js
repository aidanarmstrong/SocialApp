import React from 'react';
import {createStore, combineReducers} from 'redux';
import NavReducer from '../reducers/nav.reducer';

const rootReducer = combineReducers({
    currentScreenName: NavReducer,
});

const configureStore = () => createStore(rootReducer, {});


export default configureStore;
