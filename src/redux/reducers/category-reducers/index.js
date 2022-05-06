import initState from "../../state";
import { categoryConstants } from "../../constants";


export const categoryReducer = ( state = initState.category, action) => {
    switch(action.type) {

        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            return { 
                ...state,
                loading: false
            };

        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: 
            return {
                ...state,
                loading: false,
                categories: action.payload
            };

        case categoryConstants.GET_ALL_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default: return state;
    }    
}