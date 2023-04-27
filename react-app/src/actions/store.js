import { configureStore,applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store=configureStore(
    {},
    compose(
        applyMiddleware(thunk)
    )    
    
)