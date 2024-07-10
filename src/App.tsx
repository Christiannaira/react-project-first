import Student from "./Student";
import Navbar from "./Navbar";

function App() {

  const students = [
    {
      firstname: 'John',
      lastname: 'Smith',
    },
    {
      firstname: 'Mark',
      lastname: 'Zuckerberger',
    },
    {
      firstname: 'Melon',
      lastname: 'Musk'
    }
  ]

  const studentList = students.map((item, id) => (

    <Student key={id} firstname={item.firstname} lastname={item.lastname}/>
    
  ))


  return (
    <>

      <div className="container m-5 p-5">

    <Navbar/>
    {studentList}

      </div>

    </>
  )
}



export default App
