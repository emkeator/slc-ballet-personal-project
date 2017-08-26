import * as getter from './apiGetter';

//action types
const LOAD_DANCERS = 'LOAD_DANCERS';
const LOAD_DANCERS_PENDING = 'LOAD_DANCERS_PENDING';
const LOAD_DANCERS_FULFILLED = 'LOAD_DANCERS_FULFILLED';

const LOAD_SEASON_SHOWS = 'LOAD_SEASON_SHOWS';
const LOAD_SEASON_SHOWS_PENDING = 'LOAD_SEASON_SHOWS_PENDING';
const LOAD_SEASON_SHOWS_FULFILLED = 'LOAD_SEASON_SHOWS_FULFILLED';

const LOAD_PERFORMANCES = 'LOAD_PERFORMANCES';
const LOAD_PERFORMANCES_PENDING = 'LOAD_PERFORMANCES_PENDING';
const LOAD_PERFORMANCES_FULFILLED = 'LOAD_PERFORMANCES_FULFILLED';


//initial state
const initialState = {
    seasonShows: [],
    dancers: [],
    performances: [], //will change with each show chosem
    seats: [], //will change with each individual performance selected
    loading: false

}

//reducer
export default function(state = initialState, action){
    switch (action.type) {
        case LOAD_DANCERS_PENDING:
            return Object.assign({}, state, {loading: true});
        case LOAD_DANCERS_FULFILLED:
            return Object.assign({}, state, {loading: false, dancers: action.payload});

        case LOAD_SEASON_SHOWS_PENDING:
            return Object.assign({}, state, {loading: true});
        case LOAD_SEASON_SHOWS_FULFILLED:
            return Object.assign({}, state, {loading: false, seasonShows: action.payload});

        default:
            return state;
    }
}

//action builders
export function loadDancers(action){
    return {
        type: LOAD_DANCERS,
        payload: getter.getDancers()
    }
}

export function loadSeasonShows(action){
    return {
        type: LOAD_SEASON_SHOWS,
        payload: getter.getSeasonShows()
    }
}