
import { legacy_createStore as createStore , applyMiddleware} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";


export const initState=
{
    data:[],
    total_pages:0,
    total_obj:0,
}

export const Store=createStore(reducer,initState,applyMiddleware(thunk));

// console.log(Store.getState(),"daata")
Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})
