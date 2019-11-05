import {ModifyAction} from '../action'
import {GETLIST, CHANGENAME} from '../constant'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

function counter(state = 0, action: ModifyAction) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

function getlist(state: any[] = [], action: any) {
    if (action.type === GETLIST) {
        return [{
            name: 'kp',
            age: 12
        }, {
            name: 'zs',
            age: 15
        }];
    } else {
        return state;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware: any = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
let reducer = combineReducers({counter, getlist});
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
));

store.subscribe(() => {
    console.log(store.getState())
});

export default store
