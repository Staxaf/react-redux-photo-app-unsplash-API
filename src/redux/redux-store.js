import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";
import thunk from "redux-thunk";
import {reducer} from "redux-form";


let reducers = combineReducers({
    app: appReducer,
    form: reducer
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store