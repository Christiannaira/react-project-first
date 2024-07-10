import Student from "./Student";
import Navbar from "./Navbar";

function App() {


  return (
    <>

      <div className="container m-5 p-5">

    <Navbar/>
    <Student firstname={'Christian'} lastname={'Naira'} />
    <Student firstname={'Vicente'} lastname={'Naira'} />
    <Student firstname={'Jewer'} lastname={'Naira'} />

      </div>

    </>
  )
}



export default App
