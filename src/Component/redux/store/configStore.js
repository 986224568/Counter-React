import {createStore} from "redux";
// import rootReducer from "../reducer"
import reducer from "../reducer/count";

let store = createStore(reducer);

export default store;