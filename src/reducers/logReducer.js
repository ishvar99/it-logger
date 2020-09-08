import { LOGS_ERROR, SET_LOADING, GET_LOGS, ADD_LOG } from "../action/types"

const initialState = {
  logs: null,
  current: null,
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, loading: true }
    }
    case LOGS_ERROR: {
      return { ...state, error: action.payload }
    }
    case GET_LOGS: {
      return {
        ...state,
        loading: false,
        logs: action.payload,
      }
    }
    case ADD_LOG: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }
    }
    default:
      return state
  }
}
