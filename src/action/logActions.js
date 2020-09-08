import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types"

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
export const addLog = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING })
      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      })
      const data = await res.json()
      dispatch({ type: ADD_LOG, payload: data })
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data,
      })
    }
  }
}
