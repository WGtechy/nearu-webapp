import Axios from "../../../utilities-config/axios"
import { categoryConstants } from "../../constants";


export const getAllCategory = () => async (dispatchAction) => {
    dispatchAction({
      type: categoryConstants.GET_ALL_CATEGORIES_REQUEST,
    });
    const response = await Axios.get("category/get-categories");
    try {
      if (response.status === 200) {
        dispatchAction({
          type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatchAction({
          type: categoryConstants.GET_ALL_CATEGORIES_FAIL,
          payload: { error: response.data.error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

