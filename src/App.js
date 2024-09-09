import './App.css';

let name = "Akshat";

function App() {
  return (
    <>
    <nav class="blank">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello, {name}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatibus fuga modi harum voluptas magnam quisquam recusandae debitis sunt possimus id fugiat doloribus quo consequuntur, facilis neque mollitia veritatis totam!</p>
    </div>
    </>
  );
}

export default App;
