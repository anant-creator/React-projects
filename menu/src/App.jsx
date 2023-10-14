import React, { useState } from "react";
import data from "./data";
import Menu from "./menu";
import FoodGroups from "./FoodGroups";

const App = () => {
  const [items, setItems] = useState(data);
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const catPrinter = (cat) => {
    if (cat === "all") {
      setItems(data);
      return;
    } else {
      const newData = data.filter((item) => item.category === cat);
      setItems(newData);
      return;
    }
  };

  return (
    <main>
      <div className="title" style={{margin: "2em 0"}}>
        <h2>Today's Menu</h2>
        <div className="title-underline"></div>
      </div>
      <FoodGroups categories={categories} catPrinter={catPrinter} />
      <Menu items={items} />
    </main>
  );
};
export default App;
