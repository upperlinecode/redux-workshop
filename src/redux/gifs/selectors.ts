import { AppState } from "../initialState";

export const selectGifs = (state: AppState) => state.gifs.data;
