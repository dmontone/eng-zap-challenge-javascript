import * as AllReducers from './_reducers'

const ReducerList = Object.keys(AllReducers).map(key => AllReducers[key])

export const InitialState = ReducerList.reduce((aggr, current) => {
  return { ...aggr, [current.key]: current.initialState }
}, {})

export const StateReducer = (state = InitialState, action) => {
  return ReducerList.reduce((aggr, current) => {
    return {
      ...aggr,
      [current.key]: current(state, action)
    }
  }, {})
}
