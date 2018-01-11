/**
 * Created by Jason on 2018-01-10.
 */

import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Right, Left, Body, Title } from 'native-base';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

export default class RestaurantDetail extends Component {
    constructor(props){
        super(props);
    }

    render() {

        const distance = this.props.item.distance/1000;

        onPress = () => {
            RNImmediatePhoneCall.immediatePhoneCall(this.props.item.display_phone);
        };

        return (
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                <Text>{this.props.item.name}</Text>
                                <Text note>{this.props.item.categories[0].title}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: this.props.item.image_url}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                    <Text>{distance.toFixed(2)} km</Text>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Text>Rating: {this.props.item.rating}</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text>Price: {this.props.item.price}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Button block success onPress={onPress} style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{this.props.item.display_phone}</Text>
                            </Button>
                        </CardItem>
                    </Card>

        );
    }}