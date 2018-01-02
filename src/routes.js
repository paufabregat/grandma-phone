/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ContactsPage from './components/ContactsPage';

export default () => (
    <App>
        <Router>
            <Switch>
                <Route path="/" component={ContactsPage} />
            </Switch>
        </Router>
    </App>
);
