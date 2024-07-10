import Student from "./Student";
import Navbar from "./Navbar";

function App() {

  const students = [
    {
      firstname: 'John',
      lastname: 'Smith',
      grade: 28,
    },
    {
      firstname: 'Mark',
      lastname: 'Zuckerberger',
      grade: 99,
    },
    {
      firstname: 'Melon',
      lastname: 'Musk',
      grade: 60
    }
  ]

  const studentList = students.map((item, id) => (

    <Student key={id} firstname={item.firstname} lastname={item.lastname} grade={item.grade}/>

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
