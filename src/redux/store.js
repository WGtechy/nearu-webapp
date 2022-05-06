import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
// import { configureStore } from '@reduxjs/toolkit'  



//this is a middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware for initial signin
const userInfoStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
//the create store takes 2 arguments first is the reducer and the second is the middleware. 9n this case im using thunk as the middleware
 const store = createStore(rootReducer, userInfoStorage, composeEnhancer(applyMiddleware(thunk)));


// viewing the store in the browser for development
window.store = store;

export default store;