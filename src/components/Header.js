/**
 * Created by Jason on 2018-01-10.
 */

import React, { Component }  from 'react';
import { Container, Content, Left, Body, Right, Button, Title, Text } from 'native-base';
import { connect } from 'react-redux';
import { getListUsingGeoLoc } from '../actions';

class Head extends Component {
    render() {
        return (
            <Content>
                <Body>
                <Button iconLeft onPress={this.props.getYelpData} style={{ flex: 1, flexDirection:'row',  justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Load Nearby Restaurant List</Text>
                </Button>
                </Body>
            </Content>
        );
    }
}
const mapStatetoProps = (state) => {
    return;
}
const mapDispatchToProps = (dispatch) => {
    return {
        getYelpData: (e) => dispatch(getListUsingGeoLoc())
    };
};

export default connect(null, mapDispatchToProps)(Head);
