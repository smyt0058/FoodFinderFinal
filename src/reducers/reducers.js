/**
 * Created by Jason on 2018-01-10.
 */

import { FETCH_DATA, FETCH_SUCCESS } from '../actions'

export default function reducers(state, action) {
    let changes = {};

    switch(action.type) {
        case FETCH_DATA:
            changes.yelpAPI = {isFetching: action.state, dataFetched: true};
            break;
        case FETCH_SUCCESS:

            changes.businesses = {
                businesses: action.data.businesses
            };
            break;
        default:
            return state;
    }

    return Object.assign({}, state, changes);
}
