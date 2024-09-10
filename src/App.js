import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import './App.css';
function App() {
  return (
    <>
      <Navbar title = "TextUtils"/>
      <div className="container">
        <TextForm textBoxTitle = "Please Enter the Text here:"/>
      </div>
    </>
  );
}
export default App;
/*
  * npm install -> to install the node modules
  * npm start -> to start the server
  * npm run build -> to build the project for production
 */
