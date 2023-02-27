import { legacy_createStore as createStore } from "redux"
import colorPickerReducer from "./ColorPicker/ColorPicerReducer"

const store = createStore(colorPickerReducer)

export default store