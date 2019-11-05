import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from '@/redux/reducer'
import * as serviceWorker from './serviceWorker';
import Recommand from '@/pages/Recommand/Index'
import About from '@/pages/About/Index'
import About1 from '@/pages/About1/Index'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* <Header/> */}
            <Route exact path="/" component={Recommand} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about1" component={About1} />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
