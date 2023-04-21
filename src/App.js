import "./styles.css";
import { useState } from "react";

let countries = [
  { name: "India", value: "IN", cities: ["delhi", "Varanasi"] },
  { name: "USA", value: "US", cities: ["Texas", "Washington"] },
  { name: "Australia", value: "AUS", cities: ["Sydney", "Melbourne"] }
];
export default function App() {
  let [city, setCity] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select
        onChange={(k) => {
          setCity(k.target.value);
          console.log(k.target.value);
          // console.log(value)

          // console.log(setCity)
        }}
      >
        {countries.map((e, index) => {
          return <option value={index}>{e.name}</option>;
        })}
      </select>
      <select>
        {countries[city].cities.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
