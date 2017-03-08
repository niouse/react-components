import React, { Component } from 'react';

export default class NavButton extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
            
		}
	}
    
    onMouseOver(e){
        e.target.style['background-color']
    }
    
    onMouseOut(e){
        
    }
    
	render () {
        let styles=this.props.styles
		return (
			<div 
                style={styles.container} 
                className = "flexi" onClick={this.props.onClick}
                onMouseOver={(e)=>this.onMouseOver(e)}
                onMouseOut={(e)=>this.onMouseOut(e)}
            >
            {this.props.children}
            </div>
		)
	}
}

