import React from "react";
import "./App.css";
import CustomAccordion from "./components/CustomAccordion";
import { DATA_LIST } from "./utils/data";

const App = () => {
  return (
    <div className="container">
      {DATA_LIST.map((item) => (
        <CustomAccordion title={item.title} key={item.id}>
          <p>{item.description}</p>
        </CustomAccordion>
      ))}
    </div>
  );
};

export default App;
