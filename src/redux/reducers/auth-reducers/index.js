import initState from "../../state";
import { authConstants, registerConstant } from "../../constants";
 
//
export const adminSignInReducer = (state = initState.signIn, action) => {
  // const user = JSON.parse(window.localStorage.getItem("user"))
  switch (action.type) {
    case authConstants.USER_SIGNIN_REQUEST:
      return { ...state, authenticating: true, loading: true };
    case authConstants.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false, 
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        adminNav: action.payload.adminNav, 
        sellerNav: action.payload.sellerNav, 
        role: action.payload.role,
        adminRoutes: action.payload.adminRoutes,
        sellerRoutes: action.payload.sellerRoutes
      };
    //i dont have  to use the break keyword in this switch function because im already using the return keyword
    case authConstants.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload, authenticate: false };
      
    case authConstants.USER_SIGNOUT_REQUEST:
      return { ...state, loading: true }; //return empty object will remove the user info from the state and local-storage
    case authConstants.USER_SIGNOUT_SUCCESS:
      return {  signout: true }; //return empty object will remove the user info from the state and local-storage
    case authConstants.USER_SIGNOUT_FAIL:
      return { ...state, error: action.payload.error, loading: false, authenticate: false }; //return empty object will remove the user info from the state and local-storage

    default:
      return state;
  }
};

export const adminSignUpReducer = (state = initState.adminSignUp, action) => {
  switch (action.type) {
    case registerConstant.USER_SIGNUP_REQUEST: 
      return { ...state, loading: true };
    case registerConstant.USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, message: action.payload.message, completed: true };
    case registerConstant.USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload.error, completed: false };
    default:
      return state;
  }
};
