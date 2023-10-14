import { useState } from "react";
import data from "./data";
import Person from "./person";


export default function () {
  
  const [birthdays, setBirthday] = useState(data);
  return (
    <ul>
      {birthdays.map((birthday) => {
        return (
            <Person key={birthday.id} birthday={birthday} />
        );
      })}
    </ul>
  );
}
