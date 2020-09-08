import { TECHS_ERROR, SET_LOADING, GET_TECHS, ADD_TECH } from "../action/types"

const initialState = {
  techs: null,
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, loading: true }
    }
    case TECHS_ERROR: {
      return { ...state, error: action.payload }
    }
    case GET_TECHS: {
      return {
        ...state,
        loading: false,
        techs: action.payload,
      }
    }
    case ADD_TECH: {
      return {
        ...state,
        loading: false,
      }
    }
    default:
      return state
  }
}
