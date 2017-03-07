
var Color = require('color');

module.exports={
	colors : {
		main : "white",
		component : "white",
		primary : "blue",
		secondary : Color("blue").lighten(0.5).string(),
		warning : "red",
		good : "green",
	},
	layouts : {
		center : {
			display : "flex",
			justifyContent : "center",
			alignItems : "center",
		}
	},
	fonts : {
		main : 'sans-serif'
	}
}