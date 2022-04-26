import React, { useEffect, useState } from "react";
import Card from "../Card";
import { AppRoot } from "./App.styles";
import { getActiveCardId, getGifs } from "../../redux/gifs/selectors";
import slice, { fetchGifsThunk } from "../../redux/gifs";
import { useAppDispatch, useAppSelector } from "../../configureStore";

const App = () => {
  const dispatch = useAppDispatch();
  const activeCard = useAppSelector(getActiveCardId);
  const gifData = useAppSelector(getGifs);
  const setActiveCard = (cardId: string) =>
    dispatch(slice.actions.setActiveCardId({ cardId }));

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
