/**
 * Created by Jason on 2018-01-10.
 */

import React from 'react'
import { Scene, Router, Stack} from 'react-native-router-flux';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Search from './components/Search';


const RouterComponent = () => {

    return (
        <Router>
            <Stack key="root">
                <Scene key="head" component={Header} title="Food Search"/>
                <Scene key="search" component={Search} title="Searching" back="false"/>
                <Scene key="restaurantList" component={RestaurantList} title="Nearby Restaurants"/>
                <Scene key="restaurantDetails" component={RestaurantDetail} title="Restaurant Info"/>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
