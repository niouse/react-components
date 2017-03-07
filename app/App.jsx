import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Blank from './Blank.jsx'
import SendEmailSimple from "./send-email-simple/SendEmailSimple.container.jsx";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Container extends Component {
		render() {
			return ( 
				<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} style={{width:"100%", height:"100%"}}>
					<div className = "container" style={{width:"100%", height:"100%"}}>
						<SendEmailSimple />
					</div>
				</MuiThemeProvider>
			);
		}
	}

	ReactDOM.render(
	  <Container />,
	  document.getElementById('content')
	);