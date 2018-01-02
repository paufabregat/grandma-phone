import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/index.css';

render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./components/App').default;
        render(
            <NextApp />,
            document.getElementById('root')
        );
    });
}
