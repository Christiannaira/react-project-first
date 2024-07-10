
const student = {

    firstname: "Michael",
    lastname: "John"

}

function Student({firstname = 'not found', lastname = 'not found', grade = 0}){

    return(
        <>
            <div className={`card my-3 ${grade > 75? 'bg-success' : 'bg-danger'} shadow`}>
                <div className="card-body">
                    <p>First name: <span className="fw-bold">{firstname}</span></p>
                    <p>Last name: <span className="fw-bold">{lastname}</span></p>
                    <p>Grade: <span className="fw-bold">{grade}</span></p>
                </div>
            </div>
        </>
    )

}

export default Student;