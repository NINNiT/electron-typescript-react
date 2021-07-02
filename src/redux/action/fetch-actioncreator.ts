import { ActionCreator, Dispatch } from "redux"

export const fetchActionCreator: ActionCreator<void> = () => async (
  dispatch: Dispatch
) => {
  const resultPayload = {}

  dispatch({ type: "fetch/initiated", payload: {} })
  try {
    dispatch({
      type: "fetch/success",
      payload: resultPayload,
    })
  } catch (error) {
    dispatch({
      type: "fetch/error",
      payload: error,
    })
  }
}
