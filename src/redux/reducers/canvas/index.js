import initState from "../../state";
import { canvas } from "../../constants";


const sidebarReducer = (state = initState.sidebar, action) => {
  switch (action.type) {
    case canvas.SIDEBAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SIDEBAR_SWITCH: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        display: action.payload.display,
        loaded: true,
      };
    default:
      return state;
  }
};

const sideMenuContentReducer = (state = initState.sideMenuContent, action) => {
  switch (action.type) {
    case canvas.SIDEMENU_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case canvas.SIDEMENU_CONTENT_SWITCH: //Here the action is directly in this document, not in an action file like most documents
      return {
        ...state,
        display: action.payload.display,
        loaded: true,
      };
    default:
      return state;
  }
};

const topMenuDataReducer = (state = initState.topMenuData, action) => {
  switch (action.type) {
    case canvas.MENUDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case canvas.MENUDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export {
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
};
