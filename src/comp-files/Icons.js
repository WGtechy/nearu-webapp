import {
    IoIosArrowDropdown,
    IoIosBasket,
    IoIosBookmark,
    IoIosClose,
    IoIosFlame,
    IoIosInformationCircleOutline,
    IoIosShareAlt,
  } from "react-icons/io";

// This icons are to be used in the globalStoreProductInfo to design the sellers card for global products
const globalSellersIcons = [
    {
      name: "Basket",
      icon: IoIosBasket,
      size: 40,
    },
    {
      name: "Quick pay",
      icon: IoIosFlame,
      size: 25,
    },

    {
      name: "Save",
      icon: IoIosBookmark,
      size: 25,
    },

    {
      name: "Share",
      icon: IoIosShareAlt,
      size: 25,
    },
  ];

export {
    globalSellersIcons,
}