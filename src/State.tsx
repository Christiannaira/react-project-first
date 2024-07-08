import { useState } from "react";


function State(){

    const [color, setColor] = useState('red');
    const [brand, setBrand] = useState("Ford");
    const [year, setYear] = useState("1964");
    const [model, setModel] = useState("Mustang");

    return(
        <>

           <h1>My {brand}</h1>
           <p>
            It is a {color} {model} from {year}.
           </p>
        
        </>
    )

}


export default State;