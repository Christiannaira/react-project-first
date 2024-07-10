import Student from "./Student";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => (
      {
        ...values, [name]: value
      }
    ))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }




  return (
    <>

      <div className="container m-5 p-5">

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name:
              <input 
              type="text"
              name="username" 
              value={inputs.username || ""}
              onChange={handleChange}
              />
            </label>

            <label htmlFor="">Enter your age:
              <input 
              type="number" 
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
              />
            </label>

            <input type="submit" />
        </form>

    {inputs.username} <br />
    {inputs.age}

      </div>

    </>
  )
}



export default App
