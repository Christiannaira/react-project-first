import Student from "./Student";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

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

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name:
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="submit" />
        </form>

      </div>

    </>
  )
}



export default App
