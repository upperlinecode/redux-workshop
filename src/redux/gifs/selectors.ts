import { RootState } from "../../configureStore";

export const getGifsState = (state: RootState) => state.gifs;

export const getActiveCardId = (state: RootState) =>
  getGifsState(state).activeCardId;

export const getGifs = (state: RootState) => getGifsState(state).data;
