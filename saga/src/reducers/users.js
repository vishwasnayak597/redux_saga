import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/actionTypes';
  
  const initialState = {
    loading: false,
    users: [],
    error: '',
    
  }
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        console.log('action red', action)
        console.log('state : ',state)
       
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
     
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default users