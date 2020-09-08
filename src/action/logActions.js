import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from "./types"

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
export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
      })
      const res = await fetch(`/logs?q=${text}`)
      const data = await res.json()
      dispatch({
        type: SEARCH_LOGS,
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

export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING })
      await fetch(`/logs/${id}`, { method: "DELETE" })
      dispatch({ type: DELETE_LOG, payload: id })
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }
  }
}
export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING })
      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-type": "application/json",
        },
      })
      const data = await res.json()
      dispatch({ type: UPDATE_LOG, payload: data })
    } catch (err) {
      dispatch({ type: LOGS_ERROR, payload: err.response.data })
    }
  }
}
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  }
}
export const clearCurrent = (log) => {
  return {
    type: CLEAR_CURRENT,
  }
}
