// This is the App.js file for my hangman game
// import the body and header components

import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  //Return a div containing the header and body components
  return (

    <div className="main-container">

      <Header />
      <Body />

    </div>

  );
}

//export default app
export default App;