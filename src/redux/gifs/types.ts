import initialState from "../initialState";
import { fetchGifs } from "./actions";

export type GifState = typeof initialState.gifs;
export type fetchGifsType = { type: string };
