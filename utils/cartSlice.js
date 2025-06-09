import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',

    initialState : {
        items : []
    },

    reducers : {
        addItem : (state,action) => {
            //mutating the state
            state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items.length = 0;//mutate orinalstate = [] or return {items :   []}

            //state = [] -> this is wrong as we are not mutating the state we are just adding the refference to it
            //as state is alocal variable it will make its value zero locally 
            //actual modification of original state in redux will not be done internally
        },
    },

});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
   
//addItem -> action
//(state,action) => {} reducer function that modifies the state
//modifies state according to the action
// initial state --> items --> empty array[]

//it has multiple reducers so the name "reducers"