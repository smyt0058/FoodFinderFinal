/**
 * Created by Jason on 2018-01-10.
 */

import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Right, Left, Body, Spinner, Thumbnail, Button, Title, Footer } from 'native-base';
import { connect } from 'react-redux';
import { ListView, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class RestaurantList extends Component {



    render() {
        const restObject = this.props.businesses;

        const restArray = restObject.businesses;

        let workableArrays = [];

        for( let x in restArray ){
            workableArrays.push(restArray[x]);
        }

        return (
            <Content>
                <List>
                    {workableArrays.map((item) => {

                        onPress = () => {
                            Actions.restaurantDetails({item})
                        };

                        const distance = item.distance/1000;
                        return (
                            <ListItem onPress={onPress.bind(this, item)} key={item.id} style={{width: '100%', marginLeft: 0, paddingLeft: 10, paddingRight: 10, marginRight: 0}}>
                                <Body>
                                <Text>{item.name}</Text>
                                <Text note>{item.categories[0].title}, {distance.toFixed(2)} km, Rating: {item.rating}</Text>
                                </Body>
                            </ListItem>

                        )
                    })
                    }
                </List>
            </Content>
        );}
}

const mapStateToProps = state => {
    return {
        dataFetched: state.yelpAPI.dataFetched,
        isFetching: state.yelpAPI.isFetching,
        businesses: state.businesses
    };
};


export default connect(mapStateToProps)(RestaurantList);