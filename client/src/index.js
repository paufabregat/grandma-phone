import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import './styles/index.css';

render(
    <Routes />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./routes', () => {
        // eslint-disable-next-line global-require
        const NextRoutes = require('./routes').default;
        render(
            <NextRoutes />,
            document.getElementById('root')
        );
    });
}
