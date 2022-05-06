import initState from "../../state";
import {globalProductConstant} from "../../constants";

const globalProductReducer = (state = initState.globalProduct, action) => {
    switch(action.type){
        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_REQUEST: 
        return {
            ...state,
            message: action.payload.message
        }

        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_SUCCESS:
            return {
                ...state,
                globalProducts: action.payload.globalProducts,
                loading: false,
                message: action.payload.message
            }

        case globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_FAIL:
            return {
                ...state,
                error: action.payload.error,
                message: action.payload.message
            }

        default: return state;
    }
};

const getGlobalStoreProductInfoBySlugReducer =(state = initState.selectedGlobalStoreItem, action) => {
    switch(action.type){
        case globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_REQUEST:
            return {
                ...state,
                loading: true,
                message: action.payload.message
            }
        case globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_SUCCESS:
            return {
                ...state,
                loading: false,
                message: "Successful",
                sellers: action.payload.sellers,
                productInfo: action.payload.productInfo
            }
        case globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: action.payload.message
            }
        default: return state;
    }
}

export {globalProductReducer, getGlobalStoreProductInfoBySlugReducer}