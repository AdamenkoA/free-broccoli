import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './redux/store/inedx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.unregister();
