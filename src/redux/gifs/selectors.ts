import { GifState } from "./types";

export const getActiveCardId = (state: { gifs: GifState }) =>
  state.gifs.activeCardId;

export const getGifs = (state: { gifs: GifState }) => state.gifs.data;
