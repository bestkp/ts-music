import * as React from 'react'
import { Button } from "antd";

export interface IProps {
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

export default class Index extends React.PureComponent<IProps>{
    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                Clicked: {value} times
                <br/>
                <br/>
                <Button onClick={onIncrement} style={{marginRight: 20}}> + </Button>
                <Button onClick={onDecrement} style={{marginRight: 20}}> - </Button>
            </div>
        )
    }
}