import React from 'react';
import {useDispatch} from 'react-redux';
import {SetCurrentScreen} from '../../actions/nav.actions';

const dispatch = useDispatch();

export function setRoute(RouteName){
    dispatch(SetCurrentScreen(RouteName))
}
