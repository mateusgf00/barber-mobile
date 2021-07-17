import React, { createContext, useReducer } from 'react';
import { initialState, UseReducer, UserReducer } from '../reducers/UserReduce';  

export const UserContext = createContext();

export default ({children}) => {
    const [state, dispatch]= useReducer(UserReducer, initialState)

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}