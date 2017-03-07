
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//MATERIAL COMPNENTS
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//MATERIAL ICONS
import PlayArrow from 'material-ui/svg-icons/av/play-arrow.js';
import Stop from 'material-ui/svg-icons/av/stop.js';
import Pause from 'material-ui/svg-icons/av/pause.js';
import FiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record.js';
import Refresh from 'material-ui/svg-icons/navigation/refresh.js';
import ImportExport from 'material-ui/svg-icons/communication/import-export.js';
import Settings from 'material-ui/svg-icons/action/settings.js';
import Save from 'material-ui/svg-icons/content/save.js';


export default class  SendEmailSimple extends Component {

	constructor(props){
		super(props);

		this.state = {
			canTest : false,
			message : "",
			user : props.users[0]
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

/*      shouldComponentUpdate(){

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

	 handleChange(event, index, value){
		 this.setState({user:value})
	 }
	
	
	sendEmail(){
		
	}

	closeComponent(){
		
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
		const styles = this.props.styles
		return  (
			<div className="container" style={styles.container}>
				<div style={styles.header}>
					<div>Envoyer un email</div>
				</div>
				<div style={styles.content}>

					<div  style={styles.content.title}>
						Déstinataire:
					</div>
					 <SelectField
						 style={styles.content.selectField}
						 value={this.state.user} 
						 onChange={(event, index, value)=>this.handleChange(event, index, value)}
						 underlineStyle = {styles.content.selectField.underlineStyle}
						 hintStyle = {styles.content.selectField.hintStyle}
						 floatingLabelStyle = {styles.content.selectField.floatingLabelStyle}
						 iconStyle = {styles.content.selectField.iconStyle}
						 labelStyle={styles.content.selectField.labelStyle}
					 >
						{this.props.users.map((user, index)=>{
							 return (
								<MenuItem key={index} value={user} primaryText={user.profile.firstName+' '+user.profile.lastName} />
							 )
						 })}
					</SelectField>
					<TextField 
						style={styles.content.message}
						multiLine={true} 
						hintText="Taper votre message"
						rows={10}
					/>

				</div>
				<div style={styles.footer}>
					<RaisedButton 
						label="Envoyer" 
						backgroundColor={styles.footer.button.backgroundColor}
						onClick={()=>this.sendEmail()}
					/>
					<RaisedButton 
						backgroundColor={styles.footer.button.backgroundColor}
						label="Quitter" 
						onClick={()=>this.closeComponent()}/>
				</div>

			</div>
		);
	}
}
