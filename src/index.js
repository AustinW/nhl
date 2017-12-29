import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

render(<Root />, document.getElementById('root'));
registerServiceWorker();
