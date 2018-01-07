import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Contact from './components/Contact/Contact.container';
import Calling from './components/Calling/Calling.container';
import Call from './components/Call/Call.container';

export default () => (
    <App>
        <Router>
            <Switch>
                <Route exact path="/" component={Contact} />
                <Route path="/calling/:name" component={Calling} />
                <Route path="/call/:name" component={Call} />
            </Switch>
        </Router>
    </App>
);
