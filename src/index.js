import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

//Used to create redux state and a store
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

//Used to for logging state in redux when it changes
import logger from 'redux-logger';

//Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

//Bring in Axios into the project
import axios from 'axios';

//Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMoviesSaga);
    yield takeEvery('FETCH_MOVIE', getMovieSaga);
    yield takeEvery('FETCH_GENRES', getGenresSaga);
}

//Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store movies returned from the server
const movie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

//Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Create Generator Funcitons for sagas
//Generator function that uses saga to ajax get request
function* fetchMoviesSaga ( action ){
    console.log('In fetchMoviesSaga', action);
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get('/api/movies');
        //Once that is back successfully, dispatch action to the reducer
        console.log('response for all movies is',response.data);
        yield put({ type: 'SET_MOVIES', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

//Generator function that uses saga to ajax get request
function* getMovieSaga ( action ){
    console.log('In getMovieSaga', action);
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get(`/api/movies/details?q=${action.payload}`);
        //Once that is back successfully, dispatch action to the reducer
        console.log('response for one movie is',response.data);
        yield put({ type: 'SET_MOVIE', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

//Generator function that uses saga to ajax get request
function* getGenresSaga ( action ){
    console.log('In getGenresSaga', action);
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get(`/api/movies/edit?q=${action.payload}`);
        //Once that is back successfully, dispatch action to the reducer
        console.log('response for genres is',response.data);
        yield put({ type: 'SET_GENRES', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        movie,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
