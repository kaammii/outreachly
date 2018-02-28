import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './app-theme';
import Searched from './Searched';
import AppRoutes from './AppRoutes';

ReactDOM.render(
	<MuiThemeProvider muiTheme={AppTheme}>
		<AppRoutes />
	</MuiThemeProvider>
	, document.getElementById('root'));
registerServiceWorker();
