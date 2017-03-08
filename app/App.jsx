import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Blank from './Blank.jsx'
import SendEmailSimple from "./send-email-simple/SendEmailSimple.container.jsx";
import NavButton from "./nav-button/NavButton.container.jsx";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import themes from "./themes/index.js"


class Container extends Component {
        constructor(){
            super()
            this.state={
                theme : themes['base']
            }
        }
    
        handleStyleChange(e){
            this.setState({
                theme : themes[e.target.value]
            })
        }
    
		render() {
			return ( 
				<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} style={{width:"100%", height:"100%"}}>
					<div className = "container" style={{width:"100%", height:"100%"}}>
                        <select onChange={(e)=>this.handleStyleChange(e)}>
                            <option value='base'>base</option>
                            <option value='trb'>trb</option>
                            <option value='ruggieri'>ruggieri</option>
                        </select>
						<SendEmailSimple theme={this.state.theme}/>
                        <NavButton theme={this.state.theme}/>
					</div>
				</MuiThemeProvider>
			);
		}
	}

	ReactDOM.render(
	  <Container />,
	  document.getElementById('content')
	);