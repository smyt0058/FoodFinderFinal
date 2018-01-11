/**
 * Created by Jason on 2018-01-10.
 */

import React, { Component } from 'react';
import { Container, Header, Content, Footer, Body, Button, Title, Text } from 'native-base';

export default class YelpFooter extends Component {
    render() {
        return (
            <Footer>
                <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                <Text>Powered by Yelp</Text>
                </Body>
            </Footer>

        );
    }
}
