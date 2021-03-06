const styles = function(options){
	let theme = options.theme
    let screenWidth = options.screenWidth
    let screenHeight = options.screenHeight
	
	let styles = {
		pc : {
			 container : {
				//marginRight: 24,
				margin : "50px auto 50px auto",
				width : "80px",
				height : "40px",
				//borderRadius : "20px",
				backgroundColor :  theme.colors.primary,
				border: "2px solid green",
				//outline: "2px solid red",
				//outlineOffset: "15px",

				display : "flex",
				alignItems : "center",
				justifyContent : "center",
				cursor : "pointer", 
				color : theme.colors.good
			},
			 hover : {
					backgroundColor : theme.colors.component,
			},
		},
		smartPhohne : {
			container : {
				//marginRight: 24,
				margin : "50px auto 50px auto",
				width : "80px",
				height : "40px",
				//borderRadius : "20px",
				backgroundColor :  theme.colors.primary,
				border: "2px solid green",
				//outline: "2px solid red",
				//outlineOffset: "15px",

				display : "flex",
				alignItems : "center",
				justifyContent : "center",
				cursor : "pointer", 
				color : theme.colors.good
			},
			 hover : {
					backgroundColor : theme.colors.component,
			},
			
		}
	}
	
    return styles[options.device]
}

export default styles