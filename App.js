/**
 * FoodFinder app
 * Created by Jason Smyth (smyt0058)
 * For MAD9135 Final
 * Version: 1.0.0
 */
import React, { Component }from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from './src/reducers/reducers';
import YelpFooter from './src/components/YelpFooter';
import Routers from './src/Routers';
import {StatusBar} from 'react-native';

let initialState = {
    yelpAPI: {
        isFetching: false,
        dataFetched: false
    },
    businesses: []
}

const store = createStore(reducers, initialState, applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : undefined);


export default class App extends Component {

    render(){
        return(
            <Provider store={store}>
              <Container>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="dark-content" />
                <Routers/>
                <YelpFooter/>
              </Container>
            </Provider>
        )
    }
}
