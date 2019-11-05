import React, {useReducer} from 'react'
import {Button} from 'antd'

const initState = {count: 0};

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            };
        case 'decrement':
            return {
                count: state.count - 1
            };
        default:
            throw new Error()
    }
}

export default function About() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <>
            Count: {state.count}
            <Button onClick={() => {dispatch({type: 'increment'})}}>+</Button>
            <Button onClick={() => {dispatch({type: 'decrement'})}}>-</Button>
        </>
    )
}