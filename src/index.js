import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './app-theme';
import Searched from './Searched';

ReactDOM.render(
	<MuiThemeProvider muiTheme={AppTheme}>
		<Searched />
	</MuiThemeProvider>
	, document.getElementById('root'));
registerServiceWorker();
