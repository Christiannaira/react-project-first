
const student = {

    firstname: "Michael",
    lastname: "John"

}

function Student(props){

    return(
        <>
            <div className="card my-3 bg-light shadow">
                <div className="card-body">
                    <p>First name: <span className="fw-bold">{props.firstname}</span></p>
                    <p>Last name: <span className="fw-bold">{props.lastname}</span></p>
                </div>
            </div>
        </>
    )

}

export default Student;