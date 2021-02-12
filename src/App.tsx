import React from "react";
import pizzas from "./data/pizzas.json";
import "./App.css";
import Pizza from "./components/Pizza";
import AppCSS from "./app.module.css";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <div className={AppCSS.siteTitile}>Delicious pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
