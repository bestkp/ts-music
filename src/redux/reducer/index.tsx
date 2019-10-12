import {ModifyAction} from '../action'

export default (state = 0, action: ModifyAction) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}
