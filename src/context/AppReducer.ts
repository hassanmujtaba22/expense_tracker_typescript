export const AppReducer = (state: transaction[], action: action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [action.data, ...state]
        case "REMOVE_TRANSACTION":
            return [...state.slice(0, action.delIndex), ...state.slice(action.delIndex+1)]
        default:
            return state
    }
}