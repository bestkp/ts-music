import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './redux/store'
import * as serviceWorker from './serviceWorker';
import Header from "components/Header/Index";
import Recommand from '@/pages/Recommand/Index'

const About: React.FC = () => {
    return <h1>About</h1>;
};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Route exact path="/" component={Recommand} />
            <Route exact path="/about" component={About} />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
