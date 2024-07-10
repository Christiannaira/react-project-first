

function App() {

  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>

    <h1>Who lives in my garage?</h1>
    <ul>
      {cars.map((car) => <Lists brand={car} />)}
    </ul>
 
    </>
  )
}

function Lists(props) {

  return <li>I am a {props.brand}</li>

}

export default App
