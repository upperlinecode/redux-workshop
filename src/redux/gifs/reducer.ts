import initialState from "../initialState";
import { GifState, fetchGifsType } from "./types";
import sample_data from "../../data/sample_data";

export default function gifsReducer(
  state: GifState = initialState.gifs,
  action: fetchGifsType
) {
  switch (action.type) {
    default:
      return state;
  }
}
