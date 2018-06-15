import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppPavi from './AppPavi';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppPavi />, document.getElementById('root'));
registerServiceWorker();
