import React, { createContext, useContext, useReducer } from 'react'

import { StateReducer, InitialState } from './reducers'

export const StateContext = createContext()

export const StateContextProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(StateReducer, InitialState)}>
    {children}
  </StateContext.Provider>
)

export const useContextConsumer = () => useContext(StateContext)
