import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userSliceReducer from "./slices/userSlice";
import modalSliceReducer from "./slices/modalSlice";
import cartSliceReducer from "./slices/cartSlice";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    userState: userSliceReducer,
    modalState: modalSliceReducer,
    cartState: cartSliceReducer
})

const persistConfig = {
    key: "root",
    storage
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