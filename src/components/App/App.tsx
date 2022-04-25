import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { AppRoot } from "./App.styles";
import { getActiveCardId, getGifs } from "../../redux/gifs/selectors";
import { fetchGifsThunk, setActiveCardId } from "../../redux/gifs";

const App = () => {
  const dispatch = useDispatch();
  const activeCard = useSelector(getActiveCardId);
  const gifData = useSelector(getGifs);
  const setActiveCard = (cardId: string) => dispatch(setActiveCardId(cardId));

  useEffect(() => {
    dispatch(fetchGifsThunk());
  }, []);

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
