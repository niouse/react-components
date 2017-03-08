const styles = function(theme){
    return ({
        container : {
            marginRight: 24,
            width : "40px",
            height : "40px",
            borderRadius : "20px",
            backgroundColor :  theme.colors.primary,
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            cursor : "pointer",
            hover : {
                backgroundColor : theme.colors.primary,
               // borderStyle : "solid",
               // borderColor : theme.trb.colors.primary,
               // borderWidth :"3px",
            },
        }
    })
}

export default styles