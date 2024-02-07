import "./App.css";
// import data from '../public/data';

function Pizza() {
  return (
    <>
      <img src="/pizzas/focaccia.jpg" />
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Test</h1>
      <Pizza />
    </>
  );
}

export default App;
