

import React from "react";

function CardRarity( props ) {

    console.log(props)
    
    const options = props.lista.map( (option , index) => {
        return (
            // <option key={ index } value={option.value} > {option.label} </option>

            <>
                    
            </>
        )
    } )
    
    return(        
        
        <h1 {...props}>
            {options}
        </h1>
    )
}

export default CardRarity;