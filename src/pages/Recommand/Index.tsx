import * as React from 'react'
import Banner from './Banner'

export default class Index extends React.Component {
    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Banner/>
        );
    }
}