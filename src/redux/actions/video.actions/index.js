import { videoConstant } from "../../constants";

export const clickedVideos = (data) => async(dispatchAction) => {
    dispatchAction({
        type: videoConstant.GET_VIDEO_SUCCESS,
        payload: data
    })
}