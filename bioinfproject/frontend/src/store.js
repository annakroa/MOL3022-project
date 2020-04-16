import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/*
Redux store: 
Redux is a state container for JavaScript apps, often called a Redux store. 
It stores the whole state of the app in an immutable object tree. 
To create a store the createStore(reducer, [initialState], [enhancer]) function is used to create a new store. 

It takes three arguments: reducer - A reducing function.
reducer - A reducing function. 
initialState - The initial state of the store.
enhancer - Can be used to enhance the Redux store and add third-party libraries and middleware for logging, 
            persistant storage, etc.
*/


const initialState = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store; 