import { useState } from "react";


function State(){

    const [color, setColor] = useState('red');

    return(
        <>

            <h1>My favorite color is {color}!</h1>
        
        </>
    )

}


export default State;