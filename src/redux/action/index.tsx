import {INCREMENT, DECREMENT} from '../constant'

export interface IIncrementAction {
    type: INCREMENT
}

export interface IDecrementAction {
    type: DECREMENT
}

export type ModifyAction = IIncrementAction | IDecrementAction;

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});