import { ChangeName,ChangeAge } from "./NameChange";
import { combineReducers } from "redux";


const rootReducer= combineReducers({
  ChangeAge,ChangeName
});
export default rootReducer
