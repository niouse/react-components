import theme from "./../themes/theme.base.js"

module.exports = {
	container : {
		width : "300px",
		height : "400px",
		border : "1px solid black",
		padding : "10px",
		backgroundColor : theme.colors.main,
		margin: "auto",
		display : "flex",
		flexDirection : "column",
		borderRadius : "0px"
		//justifyContent : "space-between"
	},
	header : {
		backgroundColor : theme.colors.main,
		fontWeight : "bold",
		color : "black",

	},
	content : {
		flex : 1,
		display : "flex",
		flexDirection : "column",
		//border : "1px solid black",
		color : "black",
		title : {
			width : "100%",
			height : "20px",
			margin : "10px 0 5px 0",
			//border : "1px solid black",
			//textAlign : "center",			
		},
		selectField : {
			width : "100%",
			//border : "1px solid black",
			underlineStyle : {
			},
			floatingLabelStyle : {
			},
			labelStyle : {
			},
			iconStyle : {
			}
		},
		message : {
			//flexGroth : 1,
			width : "100%",
			//border : "1px solid black",
		}

	},
	footer : {
		display : "flex",
		justifyContent : "space-around",
		button : {
			backgroundColor : theme.colors.secondary
		}
	}
}
