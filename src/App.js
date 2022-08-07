import "./App.css"
import Header from "./components/header";
import Section from "./components/section/section";
import burgers from "./data/burgers";
import Pizzas from "./data/pizzas"
import burgerHeader from "./assets/header.jpg"
import pizzaHeader from "./assets/pizza-header.jpg"
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="sapcer layer1"></div>
      <section className="intro">
        <h1>Learn it, Cook it</h1>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar lacus ut dolor ullamcorper, eget rutrum eros tempor. Nunc lacus nunc, porttitor non turpis vitae, suscipit pulvinar odio.</p>
      </section>
      <div className="sapcer layer2"></div>
      <Section name="burgers" meals={burgers} imgHeader={burgerHeader}/>
      <div className="sapcer layer1"></div>
      <Section name="pizza" meals={Pizzas} imgHeader={pizzaHeader}/>
    </div>
  );
}

export default App;
