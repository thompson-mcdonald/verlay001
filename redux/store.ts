/* eslint-disable @typescript-eslint/no-var-requires */
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {createStore} from 'redux';

const persistConfig = {
    key: "root",
    storage,
    debug: false
  };

  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
      __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = createStore(persistedReducer, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  export const persistor = persistStore(store);
  
  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./rootReducer", () => {
      const newRootReducer = require("./rootReducer").default;
      store.replaceReducer(newRootReducer);
    });
  }
