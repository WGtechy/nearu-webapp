import Axios from "../../../utilities-config/axios";
import { canvas } from "../../constants";

const selectedGlobalStoreSeller = data => dispatchAction => {
  
  window.localStorage.setItem("selectedGlobalStoreSeller", JSON.stringify(data));
  dispatchAction({
    type: canvas.SELECTED_SELLER_SUCCESS,
    payload: { data },
  });
};

const selectedGlobalStoreItem = product => async dispatchAction =>{
  dispatchAction({type: canvas.GLOBAL_PRODUCT_CANVAS_REQUEST})
  console.log([product, product._id])
  const {_id} = product;
  const response = await Axios.post("/global-products/selected", product);
  console.log({response})
  try{
    if(response.status === 200) {
      window.localStorage.setItem("selectedGlobalStoreItem", JSON.stringify(response.data));
      dispatchAction({
        type: canvas.GLOBAL_PRODUCT_CANVAS_SUCCESS,
        payload: {data: response.data.products }
      })
    } else {
      dispatchAction({
        type: canvas.GLOBAL_PRODUCT_CANVAS_FAIL,
        payload: {error: response.data.error}
      })
    }

  }catch(error){
    console.log(error)
  }
 
};

 

const sidebarAction = (display) => (dispatchAction) => {
  dispatchAction({
    type: canvas.SIDEBAR_SWITCH,
    payload: { display: display },
  });
};

const sideMenuContentAction = (display) => (dispatchAction) => {
  dispatchAction({
    type: canvas.SIDEMENU_CONTENT_SWITCH,
    payload: { display: display },
  });
};

const topMenuData = (data) => (dispatchAction) => {
  dispatchAction({
    type: canvas.MENUDATA_SUCCESS,
    payload: data,
  });
};

export { selectedGlobalStoreSeller, sidebarAction, sideMenuContentAction, topMenuData, selectedGlobalStoreItem };
