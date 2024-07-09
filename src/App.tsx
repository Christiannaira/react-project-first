import Conditional from "./Conditional"


function App() {

  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>

    <div className="container mt-5 border">
      <Conditional isGoal={true}/>
    </div>

    <div className="container bg-primary text-white mt-5 p-5">
      
      <Garage cars={cars} />

    </div>


    </>
  )
}

function Garage(props){

  const cars = props.cars;

  return(
    <>

    <h1>Garage</h1>
    {
      cars.length > 0 && 
      <h2>
        You have {cars.length} cars in your garage.
      </h2>
    }

    
    </>
  )

}

export default App
