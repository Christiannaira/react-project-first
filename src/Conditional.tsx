
function Conditional(props){


    if (props.isGoal) {
        return <MadeGoal/>
    } 

    return <MissedGoal/>


}

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL!</h1>;
}

export default Conditional;