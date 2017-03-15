
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// MATERIAL UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme.js'
import materialTrb from "./themes/materialui.trb.js"
import materialRuggieri from "./themes/materialui.ruggieri.js"

let material = {
	base : lightBaseTheme,
	trb : materialTrb,
	ruggieri : materialRuggieri,
}

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// THEMES
import themes from "./themes/index.js";

import App from "./App.jsx";
import styles from "./App.styles.js";

export default class  AppContainer extends Component {

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);	
	let device;
	
	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 ){
		device="smartPhone"
		//document.body.style['margin']='auto'
	}
	else {
		device="pc"
	}
	
	
	
	let devicePixelRatio = window.devicePixelRatio || 1
	let screenHeight=window.screen.availHeight //*devicePixelRatio
	let screenWidth=window.screen.availWidth //*devicePixelRatio

	let stylesOptions = {
		theme : themes['base'],
		device : device,
		screenHeight : Math.round(screenHeight),
		screenWidth :  Math.round(screenWidth)
	}
	this.state = {
		canTest : false,
		styles : styles(stylesOptions),
		stylesOptions : stylesOptions,
		material : material.base
	}
}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 

	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(newProps) {

	}

	/*shouldComponentUpdate(){

	}*/

	componentDidUpdate(){

	}

	componentWillUnmount(){

	}	


/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT METHODS___________________________________________________
_________________________________________________________________________________________________________________*/

changeStyles(name){
	console.log(name)
	let stylesOptions=this.state.stylesOptions
	stylesOptions.theme=themes[name]
	this.setState({
		stylesOptions : stylesOptions,
		material : material[name]
	})
}

/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________ 
_____________________________________________COMPONENT VIEWS_______________________________________________________
_________________________________________________________________________________________________________________*/



/*_________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________  
_____________________________________________COMPONENT TEMPLATE____________________________________________________
_________________________________________________________________________________________________________________*/

	render() {
		return  (
			<MuiThemeProvider  muiTheme={getMuiTheme(this.state.material)}>
				<App 
					{...this.props}
					styles={this.state.styles}
					stylesOptions={this.state.stylesOptions}
					changeStyles={(name)=>this.changeStyles(name)}
				/>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById('content')
);
