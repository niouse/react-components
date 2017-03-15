
const styles=function(options){
	let theme = options.theme
    let screenWidth = options.screenWidth
    let screenHeight = options.screenHeight
    let styles = {
        pc: {
			container : {
				display : "flex",
				flex : 1,
				height : "100%",
				flexWrap: "wrap",
				justifyContent : "space-around",
				margin : "50px auto 50px auto",
				//border : "1px solid red"
			},
			toolButton : {
				//marginRight: 24,
				margin : "50px auto 50px auto",
				width : "40px",
				height : "40px",
				borderRadius : "20px",
				backgroundColor :  theme.colors.primary,
				//border: "2px solid green",
				//outline: "2px solid red",
				//outlineOffset: "15px",

				display : "flex",
				alignItems : "center",
				justifyContent : "center",
				cursor : "pointer", 
				color : theme.colors.good
			}
		},
		smartPhone : {
			container : {
				display : "flex",
				flex : 1,
				height : "100%",
				flexWrap: "wrap",
				justifyContent : "space-around",
				margin : "50px auto 50px auto",
				//border : "1px solid red"
			},
			toolButton : {
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
			}
		}
	}
	return styles[options.device]
}

export default styles