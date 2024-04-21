import { current } from "@reduxjs/toolkit";
import Axios from "../Axios";


export const placeOrder = (token, totalAmount)=> async (dispatch, getState)=> {
    
    dispatch({type: 'PLACE_ORDER_REQUEST'});
    
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    
    try {
        const response = await Axios.post('api/orders/placeorder', {token, totalAmount, currentUser, cartItems});
        dispatch({type: 'PLACE_ORDER_SUCCESS'});
        console.log(response);
        
        
    } catch (error) {
        dispatch({type: 'PLACE_ORDER_FAILED', payload: error});
        console.log(error);
    }
};


export const getUserOrders = ()=> async (dispatch, getState)=> {

    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({type: 'GET_ORDERS_REQUEST'});
    
    try {

        console.log("sending request.. with userID: "+currentUser._id );
        const response = await Axios.get('api/orders/getuserorders/'+currentUser._id);
        console.log("got request successfully with response "+ response);
        dispatch({type: 'GET_ORDERS_SUCCESS', payload: response.data});

    }
    catch (err) {
        dispatch({type: 'GET_ORDERS_FAILED', payload: err});
    }
};