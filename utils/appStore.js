const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
    },
});

export default appStore;

//app store has singlre reducer for whole app that contains multiple small reducers