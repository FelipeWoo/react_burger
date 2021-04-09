import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Aquí se hace el renderizado de toda la aplicación
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
