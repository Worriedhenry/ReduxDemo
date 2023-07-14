import {configureStore} from "@reduxjs/toolkit"
import { ChangeName } from "./Reducers/NameChange"
import rootReducer from "./Reducers"
export const store =configureStore({
    reducer:{rootReducer}
})