import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Blank from './Blank.jsx'
import SendEmailSimple from "./send-email-simple/SendEmailSimple.container.jsx";
import NavButton from "./nav-button/NavButton.container.jsx";
import ToolBar from "./tool-bar/ToolBar.container.jsx";
import Navigation from "./navigation/Navigation.container.jsx";
import Login from "./login/Login.container.jsx";
import Signup from "./signup/Signup.container.jsx";
import SignupWithPhoto from "./signup-with-photo/SignupWithPhoto.container.jsx";

import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import themes from "./themes/index.js"


export default class App extends Component {
        constructor(props){
            super(props)
			this.buttons = [
				{
					icon : <ActionAccountBox />,
					onClick : ()=>this.test()
				},
				{
					icon : <MenuIcon />,
					onClick : ()=>this.test()
				},
				{
					icon : <ArrowDropRight />,
					onClick : ()=>this.test()
				}
			]
        }
	
		componentDidMount(){
			//document.body.style['background-color']='#16171a'
		}
    
        handleStyleChange(e){
			this.props.changeStyles(e.target.value)
        }
	
		handleBGChange(e){
			document.body.style['background-color']=e.target.value
		}
	
		test(){
			alert('oh yeah')
		}
    
		render() {
			return ( 
					<div className = "container" style={{width:"100%", height:"100%"}}>
                        
						<div>
							<select onChange={(e)=>this.handleStyleChange(e)}>
								<option value='base'>base</option>
								<option value='trb'>trb</option>
								<option value='ruggieri'>ruggieri</option>
							</select>
							<input 
								type="text" 
								onChange={(e)=>this.handleBGChange(e)}
							/>
						</div>
						<div>
							<SendEmailSimple stylesOptions={this.props.stylesOptions}/>
							<NavButton stylesOptions={this.props.stylesOptions}>
								CLICK
							</NavButton>
							<ToolBar 
								stylesOptions={this.props.stylesOptions}
								buttons={this.buttons}
							/>
							<Navigation stylesOptions={this.props.stylesOptions}/>
							<Login stylesOptions={this.props.stylesOptions}/>
							<Signup stylesOptions={this.props.stylesOptions}/>
							<SignupWithPhoto stylesOptions={this.props.stylesOptions}/>
						</div>
					</div>
			);
		}
	}

