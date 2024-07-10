

function App() {

  const cars = [{
    id: 1, brand: 'Ford'
  },
  {
    id: 2, brand: 'BMW'
  },
  {
    id: 3, brand: 'Audi'
  }
  ];

  return (
    <>

    <h1>Who lives in my garage?</h1>
    <ul>
      {cars.map((car) => <Lists key={car.id} brand={car.brand} />)}
    </ul>
 
    </>
  )
}

function Lists(props) {

  return <li>I am a {props.brand}</li>

}

export default App
