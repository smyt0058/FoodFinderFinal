/**
 * Created by Jason on 2018-01-10.
 */

import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export function isNowFetching(state) {
    console.log("isFetching state: ");
    console.log(state);
    return {
        type: FETCH_DATA,
        state: state
    };
}

export function fetchSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        data: data
    };
}

export function getListUsingGeoLoc() {
    return (dispatch)=> {
        dispatch(isNowFetching(true));
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(isNowFetching(false));
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                dispatch(fetchRestaurantList(lat, lng));
                console.log(lat,lng);

            },
            (error) => {
                console.log("Error", error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function fetchRestaurantList(lat, lng) {
    console.log(lat, lng);
    return (dispatch) => {
        dispatch(isNowFetching(true));
        Actions.search();
        axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: "Bearer " + "8cbwRPhGTo2qQ49r2WuP2vpTY95e3FEKl7doP5tnM8L3FpPJH833hx1vAKB-MdVt1T6ZUF3EtmIq9P6N-Pz7UKX2yuYRliklcGFA6jJ66hwVM-k_7YHk-x2_EHhWWnYx"
            },
            params: {
                term: "food",
                latitude: lat,
                longitude: lng,
                sort_by: "distance"
            }

        })
            .then((response) => {
                dispatch(isNowFetching(false));
                Actions.restaurantList();
                return response;
            })
            .then ((response) => {
                return response.data;
            })
            .then ((data) => {
                return dispatch(fetchSuccess(data));
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
}