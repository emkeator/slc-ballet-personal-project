import * as getter from './apiGetter';
// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
// console.log(PENDING);

//action types
const MY_TEST = 'MY_TEST';
const MY_TEST_PENDING = 'MY_TEST_PENDING';
const MY_TEST_FULFILLED = 'MY_TEST_FULFILLED';

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
    performances: [], //will change with each show chosen
    seats: [], //will change with each individual performance selected
    loading: false,
    testing: ''
}

//reducer
export default function(state = initialState, action){
    console.log(action.type);
    switch (action.type) {
        case MY_TEST:
            console.log('Just a test');
            return Object.assign({}, state, {loading: true});
        case MY_TEST_PENDING:
            console.log("I'm off to test");
            return Object.assign({}, state, {loading: true});
        case MY_TEST_FULFILLED:
            console.log("I'm back from my test!");
            return Object.assign({}, state, {loading: false, testing: action.payload});

        case LOAD_DANCERS_PENDING:
            console.log('I\'ll be back with the dancers, I promise...');
            return Object.assign({}, state, {loading: true});
        case LOAD_DANCERS_FULFILLED:
            console.log('I\'m back with the dancers!')
            return Object.assign({}, state, {loading: false, dancers: action.payload});

        case LOAD_SEASON_SHOWS_PENDING:
            return Object.assign({}, state, {loading: true});
        case LOAD_SEASON_SHOWS_FULFILLED:
            return Object.assign({}, state, {loading: false, seasonShows: action.payload});
        
        case LOAD_PERFORMANCES_PENDING:
            return Object.assign({}, state, {loading: true});
        case LOAD_PERFORMANCES_FULFILLED:
            return Object.assign({}, state, {loading: false, performances: action.payload});

        default:
            return state;
    }
}

function testing() {
    let x = ''
    return setTimeout(() => {x = 'Wheeeee'; return x}, 500);
    
}
//action builders
export function myTest(){
    console.log('You rang for a test?');    
    return {
        type: MY_TEST,
        payload: testing()
    }
}

export function loadDancers(){
    console.log('You rang?');
    return {
        type: LOAD_DANCERS,
        payload: getter.getDancers()
    }
}

export function loadSeasonShows(){
    return {
        type: LOAD_SEASON_SHOWS,
        payload: getter.getSeasonShows()
    }
}

export function loadPerformances(){
    return {
        type: LOAD_PERFORMANCES,
        payload: getter.getPerformances()
    }
}