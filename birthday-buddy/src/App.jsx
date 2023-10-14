import { useState } from "react";
import data from "./data";

const App = () => {
  const [birthdays, setBirthday] = useState(data);

  const container = { width: "40%", minHeight: "80vh", backgroundColor: "white", margin: "10vh auto", borderRadius: "15px", padding: "2em" }
  
  return <div className="container" style={container}>
    <h3>{birthdays.length} Birthdays Today</h3>
    <ul>
      {birthdays.map((data) => {
        const {id, name, age, image} = data;
        console.log(id, name, age);
         return <li key={id}>
        <div className="person">
          <img src={image} className="img-person"/>
          <div>
            <h4>{name}</h4>
            <h6>{age} Years</h6>
          </div>
        </div>
      </li>
      })
     }
    </ul>
    <button type="button" className="btn" onClick={() => setBirthday([])}>Clear All</button>
  </div>;
};
export default App;
