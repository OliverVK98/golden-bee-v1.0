import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import modalSliceReducer from "./slices/modalSlice";
import cartSliceReducer from "./slices/cartSlice";
import isCartOpenReducer from "./slices/isCartOpenSlice";
import orderSliceReducer from "./slices/orderSlice"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    userState: userSliceReducer,
    modalState: modalSliceReducer,
    cartState: cartSliceReducer,
    isCartOpenState: isCartOpenReducer,
    orderState: orderSliceReducer
})

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["isCartOpenState"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof store.getState>