import React, { Component } from 'react';

export default class NavButton extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
            
		}
	}
	
	componentDidMount(){
		
	}
    
    onMouseOver(e){
        e.target.style['background-color']=this.props.styles.hover.backgroundColor
    }
    
    onMouseOut(e){
		e.target.style['background-color']=this.props.styles.container.backgroundColor
    }
    
	render () {
        let styles=this.props.styles
		return (
			<div 
				id={this.props.id || "button"}
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

