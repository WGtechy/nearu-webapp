import { combineReducers } from "redux";
import {
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
} from "./canvas";

import {
  videoReducer,
  categoryReducer,
  globalProductReducer,
  getGlobalStoreProductInfoBySlugReducer
} from "../reducers";

const rootReducer = combineReducers({
  selectedGlobalItem: getGlobalStoreProductInfoBySlugReducer,
  category: categoryReducer,
  video: videoReducer,
  globalProduct: globalProductReducer,
  sidebar: sidebarReducer,
  sideMenuContent: sideMenuContentReducer,
  topMenuData: topMenuDataReducer,
});

export default rootReducer;
