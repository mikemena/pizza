/* eslint-disable react/prop-types */
import "./app.css";

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Focaccia"
        ingredient="Bread with italian olive oil and rosemary"
        photo="/pizzas/focaccia.jpg"
        price={8}
      />
      <Pizza
        name="Pizza Margherita"
        ingredient="Tomato and mozarella"
        photo="/pizzas/margherita.jpg"
        price={10}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photo} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log("isOpen ->", isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
