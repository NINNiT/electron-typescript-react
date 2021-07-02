import { Reducer } from "redux"
const initialstate = {}

const fetchReducer: Reducer = (previousState = initialstate, action) => {
  switch (action.type) {
    case "fetch/success":
      return action.payload
    default:
      return previousState
  }
}

export default fetchReducer
