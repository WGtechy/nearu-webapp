import { authConstants, registerConstant } from "../../constants";
import Axios from "../../../utilities-config/axios"; //default export can be imported as word.



//i can also combine the email and password as one parameter in the signIn action by writting a function that takes the two parameters
export const signIn = (user) => async (dispatchAction) => {
  dispatchAction({
    //this action is attached to the action type and will only be dispatched if the type is true in the reducer
    type: authConstants.USER_SIGNIN_REQUEST,
  });
  const response = await Axios.post("/user/signin", { ...user });
  try { 
    if(response.status ===200){
    const  {user, token}  = response.data;
    const role = user.role;
    
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));// if i am to retrieve this data i will have to parse it as JSON: using JSON.parse() method
    dispatchAction({
      type: authConstants.USER_SIGNIN_SUCCESS,
      payload: {role, user, token }
    }); 
  } else {
    dispatchAction({
      type: authConstants.USER_SIGNIN_FAIL,
      payload: { error: response.data.error },
    });
  }
  } catch (error) {
   console.log(error)
  }
};

export const isSignedIn = () => async (dispatchAction) => {
  const token = localStorage.getItem("token");// this will check the user timeout
  if (token){
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user)
    dispatchAction({
      type: authConstants.USER_SIGNIN_SUCCESS,
      payload: {
        token, user
      }
      // payload:  user

    });
  } else {
    dispatchAction({
      type: authConstants.USER_SIGNIN_FAIL,
      payload: {
        authenticate: false,
        error: "User time-out"
      }
    })
  }
};

export const signUp = (user) => async (dispatchAction) => {
  dispatchAction({
    //this action is attached to the action type and will only be dispatched if the type is true in the reducer
    type: registerConstant.USER_SIGNUP_REQUEST
  });
  const response = await Axios.post("/user/signup", { ...user });
  try {
    const  { message }  = response.data;
    if(response.status === 201){
      dispatchAction({
        type: registerConstant.USER_SIGNUP_SUCCESS,
        payload: { message }
      });
    } else {
      dispatchAction({
        type: registerConstant.USER_SIGNUP_FAIL,
        payload: { error: response.data.error },
      });
    }
    
  } catch (error) {
    console.log(error)
  }
};

export const signOut = () => async(dispatchAction) => {
  dispatchAction({
    type: authConstants.USER_SIGNOUT_REQUEST
  });
  const response = await Axios.post("/user/signout");
  try{
    if(response.status === 200){
    localStorage.clear();
    dispatchAction({
      type: authConstants.USER_SIGNOUT_SUCCESS
    })
  } else {
    dispatchAction({
      type: authConstants.USER_SIGNOUT_FAIL,
      payload: {error: response.data.error}
    });
  };
  } catch (error){
   console.log(error)
  }
  
};
