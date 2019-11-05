import {INCREMENT, DECREMENT, GETLIST, CHANGENAME} from '../constant'

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

export const getList = (obj:any) => ({
    type: GETLIST,
    payload: obj
})
export const changeName = (name:string) => ({
    type: GETLIST,
    payload: name
})


