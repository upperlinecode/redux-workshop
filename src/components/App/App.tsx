import React, { useEffect, useState } from "react";
import Card from "../Card";
import { AppRoot } from "./App.styles";
import { gifData } from "../../data/sample_data";

const App = () => {
  const [activeCard, setActiveCard] = useState<string>("");
  return (
    <AppRoot id="App">
      {gifData.map((gif) => {
        return (
          <Card
            isActive={activeCard === gif.id}
            key={gif.id}
            gif={gif}
            onClick={() => setActiveCard(gif.id)}
          />
        );
      })}
    </AppRoot>
  );
};

export default App;
