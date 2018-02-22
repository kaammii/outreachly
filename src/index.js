import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './app-theme';

ReactDOM.render(
	<MuiThemeProvider muiTheme={AppTheme}>
		<App />
	</MuiThemeProvider>
	, document.getElementById('root'));
registerServiceWorker();
