
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    //import PureRenderMixin from 'react-addons-pure-render-mixin';
    //import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, Redirect } from 'react-router';

    import ToolBar from "./ToolBar.jsx";

    import styles from "./ToolBar.styles.js";

    export default class  ToolBarContainer extends Component {

				
    constructor(props){
        super(props);
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            canTest : false,
			styles : styles(props.stylesOptions),
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
            return  (
                <div style={{width:"100%", height:"100%"}}>
                    {
						this.props.buttons ?
						<ToolBar 
                        {...this.props}
                        styles={this.state.styles}
                    	/> :
						<div>no buttons provided</div>
					}
                </div>
            );
        }
    }
    