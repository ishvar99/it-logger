import { GET_TECHS, SET_LOADING, TECHS_ERROR } from "./types"

export const getTechs = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
      })
      const res = await fetch("/techs")
      const data = await res.json()
      dispatch({
        type: GET_TECHS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        // payload: err.response.data,
      })
    }
  }
}
// export const addLog = (formData) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: SET_LOADING })
//       const res = await fetch("/logs", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-type": "application/json",
//         },
//       })
//       const data = await res.json()
//       dispatch({ type: ADD_LOG, payload: data })
//     } catch (error) {
//       dispatch({
//         type: LOGS_ERROR,
//         payload: error.response.data,
//       })
//     }
//   }
// }
