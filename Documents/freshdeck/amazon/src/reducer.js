export const initialState = {
    basket: [],
    myRequest: "add to basket"
};

export const total = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case "ADD-TO-BASKET":
        return{
            ...state,
            basket: [...state.basket, action.item]
        };

        case "REMOVE-FROM-BASKET":
            const index= state.basket.findIndex((basketItem) =>
            basketItem.id === action.id
            );   
           let newBasket = [...state.basket];

           if (index >= 0) {
              newBasket.splice(index, 1);
           }
          
           return{
               ...state,
               basket: newBasket
           }

        default:
            return state;
    }
}


export default reducer;