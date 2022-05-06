// import React, { createContext, useContext, useReducer } from "react";

// //Prepares the datalayer

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider
//         value = { useReducer(reducer, initialState) }
//         component = {children} />
// )

// export const useStateValue = () => useContext(StateContext)