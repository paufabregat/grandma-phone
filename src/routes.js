import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ContactsPage from './components/ContactPage/ContactsPage';
import CallPage from './components/CallPage/CallPage';

export default () => (
    <App>
        <Router>
            <Switch>
                <Route exact path="/" component={ContactsPage} />
                <Route path="/call/:name" component={CallPage} />
            </Switch>
        </Router>
    </App>
);
