import initState from "../../state";
import { videoConstant } from "../../constants"

export const videoReducer = (state = initState.clickedVideo, action) => {
    switch(action.type){
        case videoConstant.GET_VIDEO_SUCCESS : 
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default: return state;
    }

     
}