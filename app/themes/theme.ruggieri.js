
var Color = require('color');

module.exports={
	colors : {
		main : "#16171a",
		component : "black",
		primary : "#b89a53",
		secondary : Color("#b89a53").lighten(0.5).string(),
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