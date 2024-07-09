import Car from './Car';
import Honda from './Honda';
import State from './State';
import Styling from './Styling';

function App() {

  return (
    <>
  
    <div className="container">
      
    <h1>Installed Bootstrap Successfully</h1>

    <Car/>
    <Honda/>
    </div>

    <State/>

    <div className="container mt-5 border">
      <Styling/>
    </div>


    </>
  )
}

export default App
