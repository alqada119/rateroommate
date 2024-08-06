import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import RoommateComponent from "./components/Roommate/Roommate";
import RoommateNavbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  return (
  <div>
    <RoommateNavbar/>
    <RoommateComponent/>
    {/* <Footer/> */}
  </div>
  )
}

export default App;
