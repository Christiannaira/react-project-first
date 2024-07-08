import { useEffect, useState } from "react";


function State(){

    const [count, setCount] = useState(0);

    useEffect(() => {

        setTimeout(
            () => {

                setCount((count) => count + 1);

            }, 1000
        );

    }, [])


    return(
        <>
    <h1>I have rendered {count} times!</h1>
        
        </>
    )

}


export default State;