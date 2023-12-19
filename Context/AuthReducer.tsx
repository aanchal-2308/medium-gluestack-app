//Specify app state changes in response to certain  actions
import { initialState } from './AuthContext'
export default (state: any, action: any) => {
  switch (action.type) {

    case 'LOG_IN': 
    return {
        ...state, 
        currentUser: action.payload
    }
    case 'CHECK_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    // case 'GET_USER':
    //   return {
    //     ...state,
    //     currentUser: action.payload,
    //   }

    case 'LOG_OUT':
      return {
        state: initialState,
      }

    default:
      return state
  }
}