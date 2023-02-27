const initialState = {
    color: "#ffffff",
    lineWidth: 5,
}

interface Action {
    type: string,
    payload: {
        color: string,
        lineWidth: number,
    }  
}

const colorPickerReducer = (state=initialState, action: Action) => {
    switch(action.type) {
        case "setColor":
            return {...state, color: action.payload.color}
        case "setLineWidth":
            return {...state, lineWidth: action.payload.lineWidth}
        default:
            return state
    }
}

export default colorPickerReducer

