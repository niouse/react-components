// REACT COMPONENTS
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

// EXTERNAL LIB
//import Tracker from 'tracker-component';
import user from "./Navigation.mocks.js";

import Navigation from "./Navigation.jsx";

import styles from "./Navigation.styles.js";

//export default class  NavigationContainer extends Tracker.Component {
export default class  NavigationContainer extends Component {                                      // TO DELETE 

constructor(props){
	super(props);
	//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);	
	
	this.state = {
		canTest : false,
		styles : styles(props.stylesOptions),
		//user : false
		user : user // 																				// TO DELETE 
	}

	/*this.autorun(() => { 
		let user = Meteor.user() || false;
		this.setState({
			user: Meteor.user(),
		});		  
	});*/

}

/*_______________________________________________________________________________________________________________
_________________________________________________________________________________________________________________  
_____________________________________________COMPONENT LIFE TIME_________________________________________________
_________________________________________________________________________________________________________________*/


	componentWillMount() { 

	}

	componentDidMount(){
		//Meteor.subscribe("userData");
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			styles : styles(newProps.stylesOptions),
		})
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

	toggleStateBool(key){
		this.setState({
			[key] : !this.state[key]
		})
	}

	showMessage(message){
		this.setState({
			message : message,
			showMessage : true
		})
	}

	test(){

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
		const style=this.props.style || {width:"100%", height:"100%"}
		return  (
			<div style={style}>
				<Navigation 
					{...this.props}
					styles={this.state.styles}
					user={this.state.user}
				/>
			</div>
		);
	}
}
    