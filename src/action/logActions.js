import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types"

export const getLogs = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
      })
      const res = await fetch("/logs")
      const data = await res.json()
      dispatch({
        type: GET_LOGS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      })
    }
  }
}
