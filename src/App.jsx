import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

function App() {
  return (
    // Using a fragment <> to prevent the use of an extra div
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
