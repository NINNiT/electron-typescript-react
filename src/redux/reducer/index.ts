import { combineReducers } from "redux"
import fetchReducer from "./fetch-reducer"

const rootReducer = combineReducers({
  data: fetchReducer,
})

export default rootReducer
